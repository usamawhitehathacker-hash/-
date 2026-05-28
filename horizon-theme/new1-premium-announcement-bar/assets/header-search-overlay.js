/**
 * Header Search Overlay Controller
 * Full-screen search experience with "/" shortcut.
 *
 * Used by: snippets/header-search-overlay.liquid
 * Features: "/" key to open, Escape to close, auto-focus input, clear button, predictive fetch
 */

class HeaderSearchOverlay extends HTMLElement {
  connectedCallback() {
    this.overlay = document.getElementById('SearchOverlay');
    if (!this.overlay) return;

    this.input = this.overlay.querySelector('[data-search-overlay-input]');
    this.clearBtn = this.overlay.querySelector('[data-search-overlay-clear]');
    this.closeButtons = this.overlay.querySelectorAll('[data-search-overlay-close]');
    this.resultsContainer = this.overlay.querySelector('[data-search-overlay-results]');
    this.popularContainer = this.overlay.querySelector('[data-search-overlay-popular]');
    this.isOpen = false;
    this.debounceTimer = null;

    this.bindEvents();
  }

  bindEvents() {
    // Open triggers (search icons/buttons in header)
    document.querySelectorAll('[data-search-overlay-open]').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        this.open();
      });
    });

    // Close triggers
    this.closeButtons.forEach(btn => {
      btn.addEventListener('click', () => this.close());
    });

    // Keyboard shortcut: "/" to open (when not in input/textarea)
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && !this.isOpen && !this.isInputFocused()) {
        e.preventDefault();
        this.open();
      }
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Input events
    if (this.input) {
      this.input.addEventListener('input', () => this.handleInput());
    }

    // Clear button
    if (this.clearBtn) {
      this.clearBtn.addEventListener('click', () => this.clearInput());
    }
  }

  isInputFocused() {
    const active = document.activeElement;
    return active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable);
  }

  open() {
    if (!this.overlay) return;
    this.overlay.hidden = false;
    this.isOpen = true;
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      if (this.input) this.input.focus();
    });
  }

  close() {
    if (!this.overlay) return;
    this.isOpen = false;
    document.body.style.overflow = '';
    this.overlay.hidden = true;

    // Clear results
    if (this.resultsContainer) this.resultsContainer.innerHTML = '';
    if (this.popularContainer) this.popularContainer.hidden = false;
  }

  handleInput() {
    const query = this.input?.value.trim() || '';

    // Toggle clear button
    if (this.clearBtn) {
      this.clearBtn.hidden = query.length === 0;
    }

    // Toggle popular searches
    if (this.popularContainer) {
      this.popularContainer.hidden = query.length > 0;
    }

    // Debounced predictive search
    clearTimeout(this.debounceTimer);
    if (query.length >= 2) {
      this.debounceTimer = setTimeout(() => this.fetchResults(query), 300);
    } else {
      if (this.resultsContainer) this.resultsContainer.innerHTML = '';
    }
  }

  async fetchResults(query) {
    try {
      const url = `/search/suggest.json?q=${encodeURIComponent(query)}&resources[type]=product,collection,article&resources[limit]=6`;
      const response = await fetch(url);
      if (!response.ok) return;
      const data = await response.json();
      this.renderResults(data);
    } catch (error) {
      console.error('Search overlay fetch error:', error);
    }
  }

  renderResults(data) {
    if (!this.resultsContainer) return;
    const resources = data.resources?.results || {};
    const products = resources.products || [];
    const collections = resources.collections || [];
    const articles = resources.articles || [];

    let html = '';

    if (products.length > 0) {
      html += '<div class="search-overlay__section"><p class="search-overlay__section-title">Products</p><ul class="search-overlay__product-list">';
      products.forEach(product => {
        const image = product.image ? `<img src="${product.image}" alt="" width="60" height="60" loading="lazy" class="search-overlay__product-img">` : '';
        html += `<li class="search-overlay__product-item"><a href="${product.url}" class="search-overlay__product-link">${image}<span class="search-overlay__product-info"><span class="search-overlay__product-title">${product.title}</span><span class="search-overlay__product-price">${product.price}</span></span></a></li>`;
      });
      html += '</ul></div>';
    }

    if (collections.length > 0) {
      html += '<div class="search-overlay__section"><p class="search-overlay__section-title">Collections</p><ul class="search-overlay__link-list">';
      collections.forEach(col => {
        html += `<li><a href="${col.url}" class="search-overlay__link">${col.title}</a></li>`;
      });
      html += '</ul></div>';
    }

    if (articles.length > 0) {
      html += '<div class="search-overlay__section"><p class="search-overlay__section-title">Articles</p><ul class="search-overlay__link-list">';
      articles.forEach(article => {
        html += `<li><a href="${article.url}" class="search-overlay__link">${article.title}</a></li>`;
      });
      html += '</ul></div>';
    }

    if (!html && this.input?.value.trim()) {
      html = '<p class="search-overlay__no-results">No results found</p>';
    }

    this.resultsContainer.innerHTML = html;
  }

  clearInput() {
    if (this.input) {
      this.input.value = '';
      this.input.focus();
    }
    if (this.clearBtn) this.clearBtn.hidden = true;
    if (this.resultsContainer) this.resultsContainer.innerHTML = '';
    if (this.popularContainer) this.popularContainer.hidden = false;
  }
}

customElements.define('header-search-overlay', HeaderSearchOverlay);

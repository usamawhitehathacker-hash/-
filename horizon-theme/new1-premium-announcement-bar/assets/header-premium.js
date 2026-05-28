/**
 * Premium Header Controller
 * Main brain: sticky behavior (always/scroll-up/shrink), transparent header, scroll direction.
 * Reads data attributes and CSS variables from sections/header.liquid.
 *
 * Used by: sections/header.liquid
 * Data attributes:
 *   data-sticky-behavior: "none" | "always" | "scroll-up" | "shrink"
 *   data-is-transparent: "true" | "false"
 *   data-section-type: "header-premium"
 */

class HeaderPremium extends HTMLElement {
  connectedCallback() {
    this.header = document.querySelector('[data-section-type="header-premium"]');
    if (!this.header) return;

    this.stickyBehavior = this.header.dataset.stickyBehavior || 'none';
    this.isTransparent = this.header.dataset.isTransparent === 'true';
    this.lastScrollY = window.scrollY;
    this.scrollDirection = 'down';
    this.ticking = false;
    this.shrinkThreshold = 50; // px scroll before shrink activates
    this.isShrunk = false;

    if (this.stickyBehavior !== 'none') {
      this.initSticky();
    }

    if (this.isTransparent) {
      this.initTransparent();
    }
  }

  initSticky() {
    window.addEventListener('scroll', () => this.onScroll(), { passive: true });
    // Set initial state
    this.updateStickyState();
  }

  initTransparent() {
    // Transparent header becomes solid on scroll past hero
    this.heroSection = document.querySelector('[data-section-type="header-premium"]')?.nextElementSibling;
    this.heroHeight = this.heroSection?.offsetHeight || 400;

    window.addEventListener('scroll', () => this.onScroll(), { passive: true });
  }

  onScroll() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.updateStickyState();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  updateStickyState() {
    const currentScrollY = window.scrollY;
    this.scrollDirection = currentScrollY > this.lastScrollY ? 'down' : 'up';

    switch (this.stickyBehavior) {
      case 'scroll-up':
        this.handleScrollUp(currentScrollY);
        break;
      case 'shrink':
        this.handleShrink(currentScrollY);
        break;
      case 'always':
        // Always sticky - CSS handles positioning, JS just tracks state
        this.header.dataset.scrollDirection = this.scrollDirection;
        break;
    }

    // Transparent to solid transition
    if (this.isTransparent) {
      this.handleTransparent(currentScrollY);
    }

    this.lastScrollY = currentScrollY;
  }

  handleScrollUp(scrollY) {
    if (this.scrollDirection === 'down' && scrollY > this.shrinkThreshold) {
      this.header.setAttribute('data-scroll-direction', 'down');
    } else {
      this.header.setAttribute('data-scroll-direction', 'up');
    }
  }

  handleShrink(scrollY) {
    const shouldShrink = scrollY > this.shrinkThreshold;

    if (shouldShrink && !this.isShrunk) {
      this.header.setAttribute('data-shrunk', 'true');
      this.isShrunk = true;
    } else if (!shouldShrink && this.isShrunk) {
      this.header.removeAttribute('data-shrunk');
      this.isShrunk = false;
    }
  }

  handleTransparent(scrollY) {
    const heroBottom = this.heroHeight - 100; // Start transition 100px before hero ends

    if (scrollY > heroBottom) {
      this.header.classList.add('header-premium--solid');
      this.header.classList.remove('header-premium--transparent');
    } else {
      this.header.classList.remove('header-premium--solid');
      this.header.classList.add('header-premium--transparent');
    }
  }
}

customElements.define('header-premium', HeaderPremium);

// Auto-initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('[data-section-type="header-premium"]');
  if (header && !header.querySelector('header-premium')) {
    const controller = document.createElement('header-premium');
    controller.style.display = 'none';
    header.appendChild(controller);
  }
});

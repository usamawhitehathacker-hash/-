/**
 * Premium Mega Menu Controller
 * Handles: hover open/close with delay, keyboard nav, backdrop overlay, mobile detection
 *
 * Used by: blocks/_header-menu.liquid
 * Reads CSS vars: --header-hover-delay, --header-animation-duration
 */

class MegaMenuPremium extends HTMLElement {
  connectedCallback() {
    this.menuItems = this.querySelectorAll('[data-mega-menu-trigger]');
    this.overlay = document.querySelector('[data-mega-overlay]');
    this.hoverDelay = parseInt(getComputedStyle(this).getPropertyValue('--header-hover-delay')) || 200;
    this.openTimeout = null;
    this.closeTimeout = null;
    this.activeMenu = null;

    if (window.matchMedia('(min-width: 990px)').matches) {
      this.initDesktop();
    }

    this.initKeyboard();
  }

  disconnectedCallback() {
    this.cleanup();
  }

  initDesktop() {
    this.menuItems.forEach(trigger => {
      const parent = trigger.closest('[data-mega-menu-item]');
      const panel = parent?.querySelector('[data-mega-menu-panel]');
      if (!panel) return;

      parent.addEventListener('mouseenter', () => this.handleMouseEnter(trigger, panel));
      parent.addEventListener('mouseleave', () => this.handleMouseLeave(trigger, panel));
      trigger.addEventListener('click', (e) => this.handleClick(e, trigger, panel));
    });
  }

  initKeyboard() {
    this.menuItems.forEach(trigger => {
      trigger.addEventListener('keydown', (e) => {
        const parent = trigger.closest('[data-mega-menu-item]');
        const panel = parent?.querySelector('[data-mega-menu-panel]');
        if (!panel) return;

        switch (e.key) {
          case 'Enter':
          case ' ':
            e.preventDefault();
            this.togglePanel(trigger, panel);
            break;
          case 'Escape':
            this.closePanel(trigger, panel);
            trigger.focus();
            break;
          case 'ArrowDown':
            e.preventDefault();
            if (panel.hidden) this.openPanel(trigger, panel);
            const firstLink = panel.querySelector('a, button');
            if (firstLink) firstLink.focus();
            break;
        }
      });
    });

    // Global escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.activeMenu) {
        const { trigger, panel } = this.activeMenu;
        this.closePanel(trigger, panel);
        trigger.focus();
      }
    });
  }

  handleMouseEnter(trigger, panel) {
    clearTimeout(this.closeTimeout);
    this.openTimeout = setTimeout(() => {
      this.openPanel(trigger, panel);
    }, this.hoverDelay);
  }

  handleMouseLeave(trigger, panel) {
    clearTimeout(this.openTimeout);
    this.closeTimeout = setTimeout(() => {
      this.closePanel(trigger, panel);
    }, this.hoverDelay);
  }

  handleClick(e, trigger, panel) {
    if (window.matchMedia('(max-width: 989px)').matches) {
      e.preventDefault();
      this.togglePanel(trigger, panel);
    }
  }

  openPanel(trigger, panel) {
    // Close any other open panels first
    if (this.activeMenu && this.activeMenu.panel !== panel) {
      this.closePanel(this.activeMenu.trigger, this.activeMenu.panel);
    }

    panel.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    this.activeMenu = { trigger, panel };

    if (this.overlay) {
      this.overlay.hidden = false;
      this.overlay.setAttribute('data-visible', '');
    }

    // Announce to screen readers
    panel.setAttribute('aria-hidden', 'false');
  }

  closePanel(trigger, panel) {
    panel.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
    this.activeMenu = null;

    if (this.overlay) {
      this.overlay.removeAttribute('data-visible');
      setTimeout(() => { this.overlay.hidden = true; }, 250);
    }
  }

  togglePanel(trigger, panel) {
    if (panel.hidden) {
      this.openPanel(trigger, panel);
    } else {
      this.closePanel(trigger, panel);
    }
  }

  cleanup() {
    clearTimeout(this.openTimeout);
    clearTimeout(this.closeTimeout);
  }
}

customElements.define('mega-menu-premium', MegaMenuPremium);

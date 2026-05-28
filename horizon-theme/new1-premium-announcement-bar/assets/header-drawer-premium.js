/**
 * Premium Header Drawer Controller
 * Multi-level mobile navigation with sublevel slide animation.
 *
 * Used by: snippets/header-mobile-drawer-premium.liquid
 * Features: focus trap, escape close, overlay close, sublevel toggle, back button
 */

class HeaderDrawerPremium extends HTMLElement {
  connectedCallback() {
    this.drawer = this.querySelector('.drawer-premium__panel') || this;
    this.overlay = this.querySelector('[data-drawer-overlay]');
    this.closeButtons = this.querySelectorAll('[data-drawer-close]');
    this.toggleButtons = document.querySelectorAll('[data-drawer-open]');
    this.sublevelToggles = this.querySelectorAll('[data-drawer-toggle]');
    this.backButtons = this.querySelectorAll('[data-drawer-back]');
    this.isOpen = false;

    this.bindEvents();
  }

  bindEvents() {
    // Open triggers (hamburger button in header)
    this.toggleButtons.forEach(btn => {
      btn.addEventListener('click', () => this.open());
    });

    // Close triggers
    this.closeButtons.forEach(btn => {
      btn.addEventListener('click', () => this.close());
    });

    // Overlay click
    if (this.overlay) {
      this.overlay.addEventListener('click', () => this.close());
    }

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) this.close();
    });

    // Sublevel toggles
    this.sublevelToggles.forEach(toggle => {
      toggle.addEventListener('click', () => this.openSublevel(toggle));
    });

    // Back buttons
    this.backButtons.forEach(btn => {
      btn.addEventListener('click', () => this.closeSublevel(btn));
    });
  }

  open() {
    this.hidden = false;
    this.isOpen = true;
    document.body.style.overflow = 'hidden';

    // Focus first interactive element
    requestAnimationFrame(() => {
      const firstFocusable = this.querySelector('button, a, input, [tabindex]');
      if (firstFocusable) firstFocusable.focus();
    });

    // Update hamburger aria
    this.toggleButtons.forEach(btn => btn.setAttribute('aria-expanded', 'true'));
  }

  close() {
    this.isOpen = false;
    document.body.style.overflow = '';

    // Close all sublevels
    this.querySelectorAll('[data-drawer-sublevel]').forEach(sub => {
      sub.hidden = true;
    });
    this.sublevelToggles.forEach(toggle => {
      toggle.setAttribute('aria-expanded', 'false');
    });

    // Animate out then hide
    this.classList.add('drawer-premium--closing');
    setTimeout(() => {
      this.hidden = true;
      this.classList.remove('drawer-premium--closing');
    }, 250);

    // Restore focus to trigger
    this.toggleButtons.forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
    });
    const opener = document.querySelector('[data-drawer-open]');
    if (opener) opener.focus();
  }

  openSublevel(toggle) {
    const sublevel = toggle.nextElementSibling;
    if (!sublevel || !sublevel.hasAttribute('data-drawer-sublevel')) return;

    sublevel.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');

    // Focus back button in sublevel
    const backBtn = sublevel.querySelector('[data-drawer-back]');
    if (backBtn) requestAnimationFrame(() => backBtn.focus());
  }

  closeSublevel(backBtn) {
    const sublevel = backBtn.closest('[data-drawer-sublevel]');
    if (!sublevel) return;

    sublevel.hidden = true;

    // Focus parent toggle
    const parentItem = sublevel.closest('.drawer-premium__item');
    const parentToggle = parentItem?.querySelector('[data-drawer-toggle]');
    if (parentToggle) {
      parentToggle.setAttribute('aria-expanded', 'false');
      parentToggle.focus();
    }
  }
}

customElements.define('header-drawer-premium', HeaderDrawerPremium);

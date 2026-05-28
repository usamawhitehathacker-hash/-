/**
 * Announcement Countdown Timer
 * Web Component that counts down to a target date/time.
 * On expiry: hides countdown, shows expired text or hides entire element.
 *
 * Used by: blocks/_countdown-announcement.liquid
 */

class CountdownAnnouncement extends HTMLElement {
  connectedCallback() {
    this.endDate = this.dataset.endDate ? new Date(this.dataset.endDate).getTime() : null;
    this.expiredText = this.dataset.expiredText || '';

    if (!this.endDate) return;

    this.displayEl = this.querySelector('[data-countdown-display]');
    this.expiredEl = this.querySelector('[data-countdown-expired]');
    this.compactEl = this.querySelector('[data-countdown-compact]');
    this.daysEl = this.querySelector('[data-countdown-days]');
    this.hoursEl = this.querySelector('[data-countdown-hours]');
    this.minutesEl = this.querySelector('[data-countdown-minutes]');
    this.secondsEl = this.querySelector('[data-countdown-seconds]');

    this.tick();
    this.interval = setInterval(() => this.tick(), 1000);
  }

  disconnectedCallback() {
    if (this.interval) clearInterval(this.interval);
  }

  tick() {
    const now = Date.now();
    const distance = this.endDate - now;

    if (distance <= 0) {
      this.handleExpired();
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    if (this.compactEl) {
      this.compactEl.textContent = `${days}d ${hours}h ${minutes}m`;
    }

    if (this.daysEl) this.daysEl.textContent = String(days).padStart(2, '0');
    if (this.hoursEl) this.hoursEl.textContent = String(hours).padStart(2, '0');
    if (this.minutesEl) this.minutesEl.textContent = String(minutes).padStart(2, '0');
    if (this.secondsEl) this.secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  handleExpired() {
    clearInterval(this.interval);

    if (this.displayEl) this.displayEl.hidden = true;

    if (this.expiredEl && this.expiredText) {
      this.expiredEl.hidden = false;
    } else if (!this.expiredText) {
      // No expired text - hide entire announcement
      this.hidden = true;
    }
  }
}

customElements.define('countdown-announcement', CountdownAnnouncement);

export const calculatorUI = {
  matchedVariations: false,
  open: false,
  toggle() {
    this.open = !this.open;
  },
  toggleWraper() {
    if (this.open) {
      this.$el.style.maxHeight = 300 + this.$el.scrollHeight + 'px';
    } else {
      this.$el.style.maxHeight = null;
    }
  },
};

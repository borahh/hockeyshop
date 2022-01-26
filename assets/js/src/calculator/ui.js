export function calculatorUI() {
  return {
    open: false,
    toggle() {
      this.open = !this.open;
    },
    toggleWraper() {
      if (this.open) {
        $el.style.maxHeight = 300 + $el.scrollHeight + 'px';
      } else {
        $el.style.maxHeight = null;
      }
    },
  };
}

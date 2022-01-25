export function calculatorUI() {
  return {
    open: false,
    toggle() {
      this.open = !this.open;
    },
    toggleWraper() {
      console.log(this.open);
    },
  };
}

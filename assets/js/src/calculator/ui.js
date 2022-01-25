export function calculatorUI() {
  return {
    open: false,
    toggle() {
      this.open = !this.open;

      $scrollHeight = $el.scrollHeight;
      $offsetHeight = $el.offsetHeight;
      if ($offsetHeight) {
        $el.style.maxHeight = 300 + $scrollHeight + 'px';
      } else {
        $el.style.maxHeight = null;
      }
    },
    toggleWraper() {},
  };
}

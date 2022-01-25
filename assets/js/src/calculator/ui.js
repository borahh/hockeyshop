export function calculatorUI() {
  return {
    open: false,
    toggle() {
      this.open = !this.open;

      $scrollHeight = $refs.wraper.scrollHeight;
      $offsetHeight = $refs.wraper.offsetHeight;
      if ($offsetHeight) {
        $refs.wraper.style.maxHeight = 300 + $scrollHeight + 'px';
      } else {
        $refs.wraper.style.maxHeight = null;
      }
    },
    toggleWraper() {},
  };
}

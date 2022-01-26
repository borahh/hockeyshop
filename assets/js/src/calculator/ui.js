export const calculatorUI = {
  // State to manage current step
  currentStep: 0,
  maxStep: 0,

  // Step to manage variations matching
  matchedVariations: false,

  // State to manage wraper state
  open: false,

  // Handler to manage wraper state
  toggleOpen() {
    this.open = !this.open;
  },
  onToggleOpen() {
    if (this.open) {
      this.$el.style.maxHeight = 300 + this.$el.scrollHeight + 'px';
    } else {
      this.$el.style.maxHeight = null;
    }
  },
  showPrev() {
    return this.currentStep !== 0;
  },
  onPrev() {
    this.currentStep--;
  },
  showNext() {
    return this.currentStep !== this.maxStep;
  },
  onNext() {
    this.currentStep++;
  },
};

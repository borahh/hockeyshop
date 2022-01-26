export const calculatorUI = {
  // State to manage current step
  currentStep: 0,
  maxStep: 0,
  final: false,

  // Step to manage variations matching
  matchedVariations: false,

  // State to manage wraper state
  open: false,

  // Getters
  getCurrentStep() {
    return this.currentStep + 1;
  },
  getMaxStep() {
    return this.maxStep + 1;
  },

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
  showPrevHandler() {
    if (this.currentStep == 0) {
      return 'invisible';
    } else {
      return 'visible';
    }
  },
  handlePrev() {
    this.currentStep--;
  },
  showNextHandler() {
    return this.currentStep !== this.maxStep;
  },
  handleNext() {
    this.currentStep++;
  },
  showFinalHandler() {
    return this.currentStep == this.maxStep;
  },
  handleFinal() {
    this.final == true;
    console.log(this.final);
  },
  showOnFinal() {
    return !this.final;
  },
};

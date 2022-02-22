export const cmToInch = {
  selectedUnit: 'cm',
  units: [{ id: 'cm' }, { id: 'in' }],
  convert(x) {
    if (this.selectedUnit === 'cm') {
      return x;
    } else if (this.selectedUnit === 'in') {
      const y = x / 2.54;
      return y.toFixed(0);
    }
  },
  invert(x) {
    console.log(this.selectedUnit);
    if (this.selectedUnit === 'cm') {
      return x;
    } else if (this.selectedUnit === 'in') {
      const y = x * 2.54;
      return y.toFixed(0);
    }
  },
};

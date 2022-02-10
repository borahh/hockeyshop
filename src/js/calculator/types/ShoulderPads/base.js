import { calculatorUI } from '../../ui';
import { cmToInch } from '../../unitConverter';

export const ShoulderPads = {
  ...calculatorUI,
  ...cmToInch,
  maxStep: 1,
  getChestValue() {
    return this.convert(this.input.chest);
  },
  getHeightValue() {
    return this.convert(this.input.height);
  },
  handleFinal() {
    const size = this.getResult();
    console.log(size);
    if (size) {
      this.onDataObtained = true;
      this.dataObtained.size = size;
    }
    this.onSubmit = true;
  },
};

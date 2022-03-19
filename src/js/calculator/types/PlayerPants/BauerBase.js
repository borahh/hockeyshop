import { getVariationEl } from '../../../helpers/getVariationEl';
import { calculatorUI } from '../../ui';
import { cmToInch } from '../../unitConverter';

export const PlayerPants = {
  ...calculatorUI,
  ...cmToInch,
  maxStep: 1,

  getWaistValue() {
    const waist = this.convert(this.input.waist);
    return waist;
  },

  getHeightValue() {
    return this.convert(this.input.height);
  },

  handleFinal() {
    const size = this.getResult();

    this.dataObtained.size = size;

    const AvailableVariationsLoader = JSON.parse(
      document
        .getElementById('AvailableVariationsLoader')
        .getAttribute('data-variations'),
    );

    if (
      AvailableVariationsLoader.size.value
        .split(',')
        .includes(this.dataObtained.size)
    ) {
      const selectSize = getVariationEl(
        AvailableVariationsLoader.size,
        this.dataObtained.size,
      );

      if (selectSize) {
        this.matchedVariations = true;
        if (selectSize.classList.contains('disabled')) {
          this.matchedVariations = false;
        }
        if (!selectSize.classList.contains('selected')) {
          selectSize.click();
        }
      } else {
        this.matchedVariations = false;
      }
    } else {
      this.matchedVariations = false;
    }
    this.onDataObtained = true;
    this.onSubmit = true;
  },
};

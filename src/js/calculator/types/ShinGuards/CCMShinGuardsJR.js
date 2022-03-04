import { ShinGuards } from './base';

export function CCMShinGuardsJR() {
  return {
    ...ShinGuards,
    getTibiaInput(i) {
      const output = {
        a: [28, 30],
        b: [30, 33],
        c: [33, 36],
      };
      const height = parseInt(this.input.height, 10);

      if (height >= 132 && height <= 142) {
        return output.a[i];
      } else if (height >= 143 && height <= 152) {
        return output.b[i];
      } else if (height >= 153 && height <= 163) {
        return output.c[i];
      }
    },
    handleNext() {
      const el = document.getElementById('lengthInput');

      el.setAttribute('min', this.getTibiaInput(0));
      el.setAttribute('max', this.getTibiaInput(1));

      const value = parseFloat(
        (this.getTibiaInput(0) + this.getTibiaInput(1)) / 2,
      ).toFixed(0);
      el._x_model.set(value);

      this.currentStep++;
    },
    input: {
      height: 132,
      length: 28,
    },
    rangeFrom: {
      height: 132,
      length: 28,
    },
    rangeTo: {
      height: 163,
      length: 36,
    },
    getResult() {
      const length = parseInt(this.input.length, 10);
      const height = parseInt(this.input.height, 10);

      if (height >= 132 && height <= 142 && length >= 28 && length <= 30) {
        return '11';
      } else if (
        height >= 142 &&
        height <= 152 &&
        length >= 30 &&
        length <= 33
      ) {
        return '12';
      } else if (
        height >= 152 &&
        height <= 163 &&
        length >= 33 &&
        length <= 36
      ) {
        return '13';
      }
    },
  };
}

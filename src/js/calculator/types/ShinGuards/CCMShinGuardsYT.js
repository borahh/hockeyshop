import { ShinGuards } from './base';

export function CCMShinGuardsYT() {
  return {
    ...ShinGuards,
    getTibiaInput(i) {
      const output = {
        a: [20, 23],
        b: [23, 25],
        c: [25, 28],
      };
      const height = parseInt(this.input.height, 10);

      if (height >= 102 && height <= 112) {
        return output.a[i];
      } else if (height >= 113 && height <= 122) {
        return output.b[i];
      } else if (height >= 123 && height <= 132) {
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
      height: 102,
      length: 20,
    },
    rangeFrom: {
      height: 102,
      length: 20,
    },
    rangeTo: {
      height: 132,
      length: 28,
    },
    getResult() {
      const length = parseInt(this.input.length, 10);
      const height = parseInt(this.input.height, 10);

      if (height >= 102 && height <= 112 && length >= 20 && length <= 23) {
        return '8';
      } else if (
        height >= 112 &&
        height <= 122 &&
        length >= 23 &&
        length <= 25
      ) {
        return '9';
      } else if (
        height >= 122 &&
        height <= 132 &&
        length >= 25 &&
        length <= 28
      ) {
        return '10';
      }
    },
  };
}

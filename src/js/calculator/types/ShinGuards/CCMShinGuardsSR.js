import { ShinGuards } from './base';

export function CCMShinGuardsSR() {
  return {
    ...ShinGuards,
    getTibiaInput(i) {
      const output = {
        a: [36, 38],
        b: [38, 41],
        c: [41, 43],
        d: [43, 48],
      };
      const height = parseInt(this.input.height, 10);

      if (height >= 163 && height <= 173) {
        return output.a[i];
      } else if (height >= 174 && height <= 183) {
        return output.b[i];
      } else if (height >= 184 && height <= 193) {
        return output.c[i];
      } else if (height >= 194 && height <= 210) {
        return output.d[i];
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
      height: 163,
      length: 36,
    },
    rangeFrom: {
      height: 163,
      length: 36,
    },
    rangeTo: {
      height: 210,
      length: 48,
    },
    getResult() {
      const length = parseInt(this.input.length, 10);
      const height = parseInt(this.input.height, 10);

      if (height >= 163 && height <= 173 && length >= 36 && length <= 38) {
        return '14';
      } else if (
        height >= 173 &&
        height <= 183 &&
        length >= 38 &&
        length <= 41
      ) {
        return '15';
      } else if (
        height >= 183 &&
        height <= 193 &&
        length >= 41 &&
        length <= 43
      ) {
        return '16';
      } else if (height >= 193 && length >= 43 && length <= 46) {
        return '17';
      } else if (height >= 193 && length >= 46 && length <= 48) {
        return '18';
      }
    },
  };
}

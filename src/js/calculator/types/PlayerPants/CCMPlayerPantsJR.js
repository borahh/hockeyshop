import { PlayerPants } from './base';

export function CCMPlayerPantsJR() {
  return {
    ...PlayerPants,
    getWaistInput(i) {
      const output = {
        a: [30, 58],
        b: [58, 64],
        c: [62, 72],
        d: [69, 79],
        e: [69, 74],
      };
      const height = parseInt(this.input.height, 10);

      if (height >= 110 && height <= 126) {
        return output.a[i];
      } else if (height >= 127 && height <= 137) {
        return output.b[i];
      } else if (height >= 138 && height <= 147) {
        return output.c[i];
      } else if (height >= 148 && height <= 157) {
        return output.d[i];
      } else if (height >= 158 && height <= 170) {
        return output.e[i];
      }
    },
    handleNext() {
      const el = document.getElementById('waistInput');

      el.setAttribute('min', this.getWaistInput(0));
      el.setAttribute('max', this.getWaistInput(1));

      const value = parseFloat(
        (this.getWaistInput(0) + this.getWaistInput(1)) / 2,
      ).toFixed(0);
      el._x_model.set(value);

      this.currentStep++;
    },
    input: {
      waist: 58,
      height: 127,
    },
    rangeFrom: {
      waist: 58,
      height: 127,
    },
    rangeTo: {
      waist: 79,
      height: 170,
    },
    getResult() {
      const height = parseInt(this.input.height, 10);
      const waist = parseInt(this.input.waist, 10);
      if (waist <= 58 && height <= 132) {
        return 'XS';
      } else if (waist >= 58 && waist <= 64 && height >= 127 && height <= 137) {
        return 'S';
      } else if (waist >= 62 && waist <= 72 && height >= 137 && height <= 147) {
        return 'M';
      } else if (waist >= 69 && waist <= 79 && height >= 147 && height <= 157) {
        return 'L';
      } else if (waist >= 69 && waist <= 74 && height >= 163 && height <= 170) {
        return 'XL';
      }
    },
  };
}

import { PlayerPants } from './base';

export function CCMPlayerPantsWomen() {
  return {
    ...PlayerPants,
    getWaistInput(i) {
      const output = {
        a: [64, 74],
        b: [74, 84],
        c: [84, 94],
      };
      const height = parseInt(this.input.height, 10);

      if (height >= 150 && height <= 160) {
        return output.a[i];
      } else if (height >= 161 && height <= 170) {
        return output.b[i];
      } else if (height >= 171 && height <= 183) {
        return output.c[i];
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
      waist: 64,
      height: 150,
    },
    rangeFrom: {
      waist: 64,
      height: 150,
    },
    rangeTo: {
      waist: 94,
      height: 183,
    },
    getResult() {
      const height = parseInt(this.input.height, 10);
      const waist = parseInt(this.input.waist, 10);

      if (waist >= 64 && waist <= 74 && height >= 150 && height <= 160) {
        return 'S';
      } else if (waist >= 74 && waist <= 84 && height >= 160 && height <= 170) {
        return 'M';
      } else if (waist >= 84 && waist <= 94 && height >= 170 && height <= 183) {
        return 'L';
      }
    },
  };
}

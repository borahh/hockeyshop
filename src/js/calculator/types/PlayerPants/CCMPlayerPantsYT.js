import { PlayerPants } from './base';

export function CCMPlayerPantsYT() {
  return {
    ...PlayerPants,
    getWaistInput(i) {
      const output = {
        a: [51, 55],
        b: [53, 57],
        c: [56, 60],
      };
      const height = parseInt(this.input.height, 10);

      if (height >= 102 && height <= 109) {
        return output.a[i];
      } else if (height >= 110 && height <= 117) {
        return output.b[i];
      } else if (height >= 118 && height <= 127) {
        return output.c[i];
      }
    },
    handleNext() {
      const el = document.getElementById('waistInput');

      el.setAttribute('min', this.getWaistValue(0));
      el.setAttribute('max', this.getWaistValue(1));

      const value = parseFloat(
        (this.getWaistValue(0) + this.getWaistValue(1)) / 2,
      ).toFixed(0);
      el._x_model.set(value);

      this.currentStep++;
    },
    input: {
      waist: 51,
      height: 102,
    },
    rangeFrom: {
      waist: 51,
      height: 102,
    },
    rangeTo: {
      waist: 60,
      height: 127,
    },
    getResult() {
      const height = parseInt(this.input.height, 10);
      const waist = parseInt(this.input.waist, 10);

      if (waist >= 51 && waist <= 55 && height >= 102 && height <= 109) {
        return 'S';
      } else if (waist >= 53 && waist <= 57 && height >= 109 && height <= 117) {
        return 'M';
      } else if (waist >= 56 && waist <= 60 && height >= 117 && height <= 127) {
        return 'L';
      }
    },
  };
}

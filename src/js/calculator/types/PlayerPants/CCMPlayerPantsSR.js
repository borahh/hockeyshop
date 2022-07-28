import { PlayerPants } from './CCMBase';

export function CCMPlayerPantsSR() {
  return {
    ...PlayerPants,
    getWaistInput(i) {
      const output = {
        a: [74, 82],
        b: [79, 89],
        c: [86, 99],
        d: [86, 107],
      };
      const height = parseInt(this.input.height, 10);

      if (height >= 157 && height <= 168) {
        return output.a[i];
      } else if (height >= 169 && height <= 178) {
        return output.b[i];
      } else if (height >= 179 && height <= 182) {
        return output.c[i];
      } else if (height >= 183 && height <= 210) {
        return output.d[i];
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
      waist: 74,
      height: 157,
    },
    rangeFrom: {
      waist: 74,
      height: 157,
    },
    rangeTo: {
      waist: 107,
      height: 188,
    },
    getResult() {
      const height = parseInt(this.input.height, 10);
      const waist = parseInt(this.input.waist, 10);

      if (waist >= 74 && waist <= 82 && height >= 157 && height <= 168) {
        return 'S';
      } else if (waist >= 79 && waist <= 89 && height >= 168 && height <= 178) {
        return 'M';
      } else if (waist >= 86 && waist <= 99 && height >= 178 && height <= 188) {
        return 'L';
      } else if (waist >= 95 && waist <= 107 && height >= 183) {
        return 'XL';
      }
    },
  };
}

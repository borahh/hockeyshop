import { ShoulderPads } from './CCMBase';

export function CCMShoulderPadsSR() {
  return {
    ...ShoulderPads,
    getChestInput(i) {
      const output = {
        a: [86, 97],
        b: [94, 104],
        c: [102, 112],
        d: [109, 122],
      };
      const height = parseInt(this.input.height, 10);

      if (height >= 157 && height <= 168) {
        return output.a[i];
      } else if (height >= 169 && height <= 178) {
        return output.b[i];
      } else if (height >= 179 && height <= 188) {
        return output.c[i];
      } else if (height >= 189 && height <= 210) {
        return output.d[i];
      }
    },
    handleNext() {
      const el = document.getElementById('chestInput');

      el.setAttribute('min', this.getChestInput(0));
      el.setAttribute('max', this.getChestInput(1));

      const value = parseFloat(
        (this.getChestInput(0) + this.getChestInput(1)) / 2,
      ).toFixed(0);
      el._x_model.set(value);

      this.currentStep++;
    },
    input: {
      height: 157,
      chest: 86,
    },
    rangeFrom: {
      height: 157,
    },
    rangeTo: {
      height: 210,
    },

    getResult() {
      const chest = parseInt(this.input.chest, 10);
      const height = parseInt(this.input.height, 10);

      if (chest >= 86 && chest <= 97 && height >= 157 && height <= 168) {
        return 'S';
      } else if (
        chest >= 94 &&
        chest <= 104 &&
        height >= 168 &&
        height <= 178
      ) {
        return 'M';
      } else if (
        chest >= 102 &&
        chest <= 112 &&
        height >= 178 &&
        height <= 188
      ) {
        return 'L';
      } else if (
        chest >= 109 &&
        chest <= 122 &&
        height >= 183 &&
        height <= 210
      ) {
        return 'XL';
      }
    },
  };
}

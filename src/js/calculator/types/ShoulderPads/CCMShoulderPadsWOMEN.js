import { ShoulderPads } from './base';

export function CCMShoulderPadsWomen() {
  return {
    ...ShoulderPads,
    getChestInput(i) {
      const output = {
        a: [71, 84],
        b: [84, 99],
        c: [99, 119],
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
      chest: 71,
      height: 150,
    },
    rangeFrom: {
      chest: 71,
      height: 150,
    },
    rangeTo: {
      chest: 119,
      height: 183,
    },
    getResult() {
      const chest = parseInt(this.input.chest, 10);
      const height = parseInt(this.input.height, 10);

      if (chest >= 71 && chest <= 84 && height >= 150 && height <= 160) {
        return 'S';
      } else if (chest >= 84 && chest <= 99 && height >= 160 && height <= 170) {
        return 'M';
      } else if (
        chest >= 99 &&
        chest <= 119 &&
        height >= 170 &&
        height <= 183
      ) {
        return 'L';
      }
    },
  };
}

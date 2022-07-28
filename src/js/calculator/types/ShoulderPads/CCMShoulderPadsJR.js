import { ShoulderPads } from './CCMBase';

export function CCMShoulderPadsJR() {
  return {
    ...ShoulderPads,
    getChestInput(i) {
      const output = {
        a: [60, 76],
        b: [67, 81],
        c: [75, 89],
      };
      const height = parseInt(this.input.height, 10);

      if (height >= 127 && height <= 137) {
        return output.a[i];
      } else if (height >= 138 && height <= 147) {
        return output.b[i];
      } else if (height >= 148 && height <= 157) {
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
      chest: 60,
      height: 127,
    },
    rangeFrom: {
      chest: 60,
      height: 127,
    },
    rangeTo: {
      chest: 89,
      height: 157,
    },
    getResult() {
      const chest = parseInt(this.input.chest, 10);
      const height = parseInt(this.input.height, 10);

      if (chest >= 60 && chest <= 76 && height >= 127 && height <= 137) {
        return 'S';
      } else if (chest >= 67 && chest <= 81 && height >= 137 && height <= 147) {
        return 'M';
      } else if (chest >= 75 && chest <= 89 && height >= 147 && height <= 157) {
        return 'L';
      }
    },
  };
}

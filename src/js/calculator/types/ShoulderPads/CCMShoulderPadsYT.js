import { ShoulderPads } from './base';

export function CCMShoulderPadsYT() {
  return {
    ...ShoulderPads,
    getChestInput(i) {
      const output = {
        a: [48, 58],
        b: [58, 64],
        c: [58, 70],
      };
      const height = parseInt(this.input.height, 10);

      if (height >= 102 && height <= 109) {
        return output.a[i];
      } else if (height >= 110 && height <= 116) {
        return output.b[i];
      } else if (height >= 117 && height <= 127) {
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
      chest: 58,
      height: 102,
    },
    rangeFrom: {
      chest: 58,
      height: 102,
    },
    rangeTo: {
      chest: 70,
      height: 127,
    },
    getResult() {
      const chest = parseInt(this.input.chest, 10);
      const height = parseInt(this.input.height, 10);

      if (chest <= 58 && height >= 102 && height <= 109) {
        return 'S';
      } else if (chest >= 58 && chest <= 64 && height >= 102 && height <= 122) {
        return 'M';
      } else if (chest >= 60 && chest <= 70 && height >= 117 && height <= 127) {
        return 'L';
      }
    },
  };
}

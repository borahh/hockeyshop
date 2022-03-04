import { ElbowPads } from './base';

export function CCMElbowPadsJR() {
  return {
    ...ElbowPads,
    getForeArmInput(i) {
      const output = {
        a: [16, 20],
        b: [18, 22],
        c: [20, 25],
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
    getBicepInput(i) {
      const output = {
        a: [18, 23],
        b: [20, 25],
        c: [23, 28],
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
      foreArmLength: 16,
      bicepCirc: 18,
      height: 127,
    },
    rangeFrom: {
      foreArmLength: 16,
      bicepCirc: 18,
      height: 127,
    },
    rangeTo: {
      foreArmLength: 25,
      bicepCirc: 28,
      height: 157,
    },
    getResult() {
      const foreArmLength = parseInt(this.input.foreArmLength, 10);
      const bicepCirc = parseInt(this.input.bicepCirc, 10);
      const height = parseInt(this.input.height, 10);

      if (
        foreArmLength >= 16 &&
        foreArmLength <= 20 &&
        bicepCirc >= 18 &&
        bicepCirc <= 23 &&
        height >= 127 &&
        height <= 137
      ) {
        return 'S';
      } else if (
        foreArmLength >= 18 &&
        foreArmLength <= 22 &&
        bicepCirc >= 20 &&
        bicepCirc <= 25 &&
        height >= 137 &&
        height <= 147
      ) {
        return 'M';
      } else if (
        foreArmLength >= 20 &&
        foreArmLength <= 25 &&
        bicepCirc >= 23 &&
        bicepCirc <= 28 &&
        height >= 147 &&
        height <= 157
      ) {
        return 'L';
      }
    },
  };
}

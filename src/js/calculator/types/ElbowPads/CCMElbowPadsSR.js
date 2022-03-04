import { ElbowPads } from './base';

export function CCMElbowPadsSR() {
  return {
    ...ElbowPads,
    getForeArmInput(i) {
      const output = {
        a: [23, 27],
        b: [25, 29],
        c: [28, 32],
        d: [28, 50],
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
    getBicepInput(i) {
      const output = {
        a: [25, 30],
        b: [28, 36],
        c: [33, 41],
        d: [38, 50],
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
      foreArmLength: 23,
      bicepCirc: 25,
      height: 157,
    },
    rangeFrom: {
      foreArmLength: 23,
      bicepCirc: 25,
      height: 157,
    },
    rangeTo: {
      foreArmLength: 32,
      bicepCirc: 41,
      height: 188,
    },
    getResult() {
      const foreArmLength = parseInt(this.input.foreArmLength, 10);
      const bicepCirc = parseInt(this.input.bicepCirc, 10);
      const height = parseInt(this.input.height, 10);

      if (
        foreArmLength >= 23 &&
        foreArmLength <= 27 &&
        bicepCirc >= 25 &&
        bicepCirc <= 30 &&
        height >= 157 &&
        height <= 168
      ) {
        return 'S';
      } else if (
        foreArmLength >= 25 &&
        foreArmLength <= 29 &&
        bicepCirc >= 28 &&
        bicepCirc <= 36 &&
        height >= 168 &&
        height <= 178
      ) {
        return 'M';
      } else if (
        foreArmLength >= 28 &&
        foreArmLength <= 32 &&
        bicepCirc >= 33 &&
        bicepCirc <= 41 &&
        height >= 178 &&
        height <= 188
      ) {
        return 'L';
      } else if (foreArmLength >= 29 && bicepCirc >= 38 && height >= 183) {
        return 'XL';
      }
    },
  };
}

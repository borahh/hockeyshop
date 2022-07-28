import { ElbowPads } from './CCMBase';

export function CCMElbowPadsYT() {
  return {
    ...ElbowPads,
    getForeArmInput(i) {
      const output = {
        a: [11, 15],
        b: [14, 17],
        c: [15, 19],
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
    getBicepInput(i) {
      const output = {
        a: [14, 17],
        b: [16, 19],
        c: [18, 21],
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
      const foreArm = document.getElementById('foreArmLength');
      const bicep = document.getElementById('bicepCirc');

      foreArm.setAttribute('min', this.getForeArmInput(0));
      foreArm.setAttribute('max', this.getForeArmInput(1));

      const foreArmvalue = parseFloat(
        (this.getForeArmInput(0) + this.getForeArmInput(1)) / 2,
      ).toFixed(0);
      foreArm._x_model.set(foreArmvalue);

      bicep.setAttribute('min', this.getBicepInput(0));
      bicep.setAttribute('max', this.getBicepInput(1));

      const bicepValue = parseFloat(
        (this.getBicepInput(0) + this.getBicepInput(1)) / 2,
      ).toFixed(0);
      bicep._x_model.set(bicepValue);

      this.currentStep++;
    },
    input: {
      foreArmLength: 11,
      bicepCirc: 14,
      height: 102,
    },
    rangeFrom: {
      foreArmLength: 11,
      bicepCirc: 14,
      height: 102,
    },
    rangeTo: {
      foreArmLength: 19,
      bicepCirc: 21,
      height: 127,
    },
    getResult() {
      const foreArmLength = parseInt(this.input.foreArmLength, 10);
      const bicepCirc = parseInt(this.input.bicepCirc, 10);
      const height = parseInt(this.input.height, 10);

      if (
        foreArmLength >= 11 &&
        foreArmLength <= 15 &&
        bicepCirc >= 14 &&
        bicepCirc <= 17 &&
        height >= 102 &&
        height <= 109
      ) {
        return 'S';
      } else if (
        foreArmLength >= 14 &&
        foreArmLength <= 17 &&
        bicepCirc >= 16 &&
        bicepCirc <= 19 &&
        height >= 109 &&
        height <= 117
      ) {
        return 'M';
      } else if (
        foreArmLength >= 15 &&
        foreArmLength <= 19 &&
        bicepCirc >= 18 &&
        bicepCirc <= 21 &&
        height >= 117 &&
        height <= 127
      ) {
        return 'L';
      }
    },
  };
}

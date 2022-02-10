import { ShoulderPads } from './base';

export function ShoulderPadsSR() {
  return {
    ...ShoulderPads,
    input: {
      chest: 86,
      height: 157,
    },
    getHeight(i) {
      const ranges = {
        a: [86, 97],
        b: [94, 104],
        c: [102, 112],
        d: [109, 122],
      };
      const chest = this.invert(parseInt(this.input.chest, 10));

      if (chest >= 86 && chest <= 97) {
        return ranges.a[i];
      } else if (chest >= 94 && chest <= 108) {
        return ranges.b[i];
      } else if (chest >= 102 && chest <= 112) {
        return ranges.c[i];
      } else if (chest >= 109 && chest <= 122) {
        return ranges.d[i];
      }
    },
    rangeFrom: {
      chest: 86,
      height: getHeight(0),
    },
    rangeTo: {
      chest: 112,
      height: getHeight(1),
    },
    getResult() {
      const chest = this.invert(parseInt(this.input.chest, 10));
      const height = this.invert(parseInt(this.input.height, 10));

      if (chest >= 86 && chest <= 97 && height >= 157 && height <= 168) {
        return 'S';
      } else if (
        chest >= 94 &&
        chest <= 108 &&
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
      } else if (chest >= 109 && chest <= 122 && height >= 183) {
        return 'XL';
      }
    },
  };
}

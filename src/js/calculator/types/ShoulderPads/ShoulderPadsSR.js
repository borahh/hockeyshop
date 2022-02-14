import { ShoulderPads } from './base';

export function ShoulderPadsSR() {
  return {
    ...ShoulderPads,
    input: {
      height: 157,
      chest: 86,
    },
    rangeFrom: {
      height: 157,
      chest: 86,
    },
    rangeTo: {
      height: 183,
      chest: 122,
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

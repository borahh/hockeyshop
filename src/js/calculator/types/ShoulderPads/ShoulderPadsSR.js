import { ShoulderPads } from './base';

export function ShoulderPadsSR() {
  return {
    ...ShoulderPads,
    input: {
      chest: 86,
      height: 157,
    },
    rangeFrom: {
      chest: 86,
      height: () => {
        const values = {
          a: 86,
          b: 94,
          c: 102,
          d: 109,
        };
        const chest = this.invert(parseInt(this.input.chest, 10));

        if (chest >= 86 && chest <= 97) {
          return values.a;
        } else if (chest >= 94 && chest <= 108) {
          return values.b;
        } else if (chest >= 102 && chest <= 112) {
          return values.c;
        } else if (chest >= 109 && chest <= 122) {
          return values.d;
        }
      },
    },
    rangeTo: {
      chest: 112,
      height: () => {
        const values = {
          a: 97,
          b: 104,
          c: 112,
          d: 122,
        };
        const chest = this.invert(parseInt(this.input.chest, 10));

        if (chest >= 86 && chest <= 97) {
          return values.a;
        } else if (chest >= 94 && chest <= 108) {
          return values.b;
        } else if (chest >= 102 && chest <= 112) {
          return values.c;
        } else if (chest >= 109 && chest <= 122) {
          return values.d;
        }
      },
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

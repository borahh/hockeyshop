import { ShoulderPads } from './base';

export function BauerShoulderPadsWOMEN() {
  return {
    ...ShoulderPads,

    input: {
      chest: 76,
    },
    rangeFrom: {
      chest: 76,
    },
    rangeTo: {
      chest: 102,
    },
    getResult() {
      const chest = this.invert(parseInt(this.input.chest, 10));

      if (chest >= 76 && chest <= 86) {
        return 'XS';
      } else if (chest >= 81 && chest <= 91) {
        return 'S';
      } else if (chest >= 86 && chest <= 97) {
        return 'M';
      } else if (chest >= 91 && chest <= 102) {
        return 'L';
      }
    },
  };
}

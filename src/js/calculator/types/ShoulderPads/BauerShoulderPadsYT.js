import { ShoulderPads } from './base';

export function ShoulderPadsYT() {
  return {
    ...ShoulderPads,
    input: {
      chest: 51,
    },
    rangeFrom: {
      chest: 51,
    },
    rangeTo: {
      chest: 64,
    },
    getResult() {
      const chest = this.invert(parseInt(this.input.chest, 10));

      if (chest >= 51 && chest <= 56) {
        return 'S';
      } else if (chest >= 56 && chest <= 61) {
        return 'M';
      } else if (chest >= 59 && chest <= 64) {
        return 'L';
      }
    },
  };
}

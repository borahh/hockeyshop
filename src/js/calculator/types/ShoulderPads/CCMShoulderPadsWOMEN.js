import { ShoulderPads } from './base';

export function CCMShoulderPadsWomen() {
  return {
    ...ShoulderPads,
    input: {
      chest: 71,
      height: 150,
    },
    rangeFrom: {
      chest: 71,
      height: 150,
    },
    rangeTo: {
      chest: 119,
      height: 183,
    },
    getResult() {
      const chest = parseInt(this.input.chest, 10);
      const height = parseInt(this.input.height, 10);

      if (chest >= 71 && chest <= 84 && height >= 150 && height <= 160) {
        return 'S';
      } else if (chest >= 84 && chest <= 99 && height >= 160 && height <= 170) {
        return 'M';
      } else if (
        chest >= 99 &&
        chest <= 119 &&
        height >= 170 &&
        height <= 183
      ) {
        return 'L';
      }
    },
  };
}

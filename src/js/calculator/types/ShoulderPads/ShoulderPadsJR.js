import { ShoulderPads } from './base';

export function ShoulderPadsJR() {
  return {
    ...ShoulderPads,
    input: {
      chest: 60,
      height: 127,
    },
    rangeFrom: {
      chest: 60,
      height: 127,
    },
    rangeTo: {
      chest: 89,
      height: 157,
    },
    getResult() {
      const chest = this.invert(parseInt(this.input.chest, 10));
      const height = this.invert(parseInt(this.input.height, 10));

      if (chest >= 60 && chest <= 76 && height >= 127 && height <= 137) {
        return 'S';
      } else if (chest >= 67 && chest <= 81 && height >= 137 && height <= 147) {
        return 'M';
      } else if (chest >= 75 && chest <= 89 && height >= 147 && height <= 157) {
        return 'L';
      }
    },
  };
}

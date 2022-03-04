import { ShoulderPads } from './base';

export function CCMShoulderPadsJR() {
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
      const chest = parseInt(this.input.chest, 10);
      const height = parseInt(this.input.height, 10);

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

import { ShoulderPads } from './BauerBase';

export function BauerShoulderPadsYT() {
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
      const chest = this.invert(parseFloat(this.input.chest, 10));

      if (chest >= 51 && chest <= 55) {
        return 'S';
      } else if (chest >= 56 && chest <= 60) {
        return 'M';
      } else if (chest >= 61 && chest <= 64) {
        return 'L';
      }
    },
  };
}

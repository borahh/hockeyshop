import { ShoulderPads } from './BauerBase';

export function BauerShoulderPadsINT() {
  return {
    ...ShoulderPads,
    input: {
      chest: 71,
    },
    rangeFrom: {
      chest: 71,
    },
    rangeTo: {
      chest: 102,
    },
    getResult() {
      const chest = this.invert(parseInt(this.input.chest, 10));

      if (chest >= 71 && chest <= 81) {
        return 'M';
      } else if (chest >= 81 && chest <= 102) {
        return 'L';
      }
    },
  };
}

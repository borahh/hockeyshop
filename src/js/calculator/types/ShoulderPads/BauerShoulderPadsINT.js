import { ShoulderPads } from './BauerBase';

export function BauerShoulderPadsINT() {
  return {
    ...ShoulderPads,
    input: {
      chest: 73,
    },
    rangeFrom: {
      chest: 73,
    },
    rangeTo: {
      chest: 96,
    },
    getResult() {
      const chest = this.invert(parseInt(this.input.chest, 10));

      if (chest >= 73 && chest <= 81) {
        return 'M';
      } else if (chest >= 82 && chest <= 96) {
        return 'L';
      }
    },
  };
}

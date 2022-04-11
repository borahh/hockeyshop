import { ShoulderPads } from './BauerBase';

export function BauerShoulderPadsJR() {
  return {
    ...ShoulderPads,
    input: {
      chest: 61,
    },
    rangeFrom: {
      chest: 61,
    },
    rangeTo: {
      chest: 71,
    },
    getResult() {
      const chest = this.invert(parseInt(this.input.chest, 10));

      if (chest >= 61 && chest <= 66) {
        return 'S';
      } else if (chest >= 67 && chest <= 71) {
        return 'M';
      }
    },
  };
}

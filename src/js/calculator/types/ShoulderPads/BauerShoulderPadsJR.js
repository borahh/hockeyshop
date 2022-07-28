import { ShoulderPads } from './BauerBase';

export function BauerShoulderPadsJR() {
  return {
    ...ShoulderPads,
    input: {
      chest: 65,
    },
    rangeFrom: {
      chest: 65,
    },
    rangeTo: {
      chest: 72,
    },
    getResult() {
      const chest = this.invert(parseFloat(this.input.chest, 10));

      if (chest >= 65 && chest <= 68) {
        return 'S';
      } else if (chest >= 69 && chest <= 72) {
        return 'M';
      }
    },
  };
}

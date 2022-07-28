import { ShoulderPads } from './BauerBase';

export function BauerShoulderPadsSR() {
  return {
    ...ShoulderPads,

    input: {
      chest: 97,
    },
    rangeFrom: {
      chest: 97,
    },
    rangeTo: {
      chest: 117,
    },

    getResult() {
      const chest = this.invert(parseFloat(this.input.chest, 10));

      if (chest >= 97 && chest <= 103) {
        return 'M';
      } else if (chest >= 104 && chest <= 111) {
        return 'L';
      } else if (chest >= 112 && chest <= 117) {
        return 'XL';
      }
    },
  };
}

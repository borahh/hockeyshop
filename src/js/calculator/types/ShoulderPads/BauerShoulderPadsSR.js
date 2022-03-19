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
      chest: 120,
      // max value is not specific in the given data
    },

    getResult() {
      const chest = parseInt(this.input.chest, 10);

      if (chest >= 97 && chest <= 107) {
        return 'M';
      } else if (chest >= 102 && chest <= 112) {
        return 'L';
      } else if (chest >= 107 && chest <= 117) {
        return 'XL';
      } else if (chest >= 112) {
        return 'XXL';
      }
      // There should be xxxl size but it has same condition as xxl
    },
  };
}

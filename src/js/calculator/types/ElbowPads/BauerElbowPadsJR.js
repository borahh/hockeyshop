import { ElbowPads } from './base';

export function BauerElbowPadsJR() {
  return {
    ...ElbowPads,

    input: {
      Length: 20,
    },
    rangeFrom: {
      Length: 20,
    },
    rangeTo: {
      Length: 25,
    },
    getResult() {
      const Length = this.invert(parseInt(this.input.Length, 10));

      if (Length >= 20 && Length <= 23) {
        return 'S';
      } else if (Length >= 22 && Length <= 25) {
        return 'M';
      }
    },
  };
}

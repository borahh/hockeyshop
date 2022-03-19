import { ElbowPads } from './BauerBase';

export function BauerElbowPadsJR() {
  return {
    ...ElbowPads,

    input: {
      length: 20,
    },
    rangeFrom: {
      length: 20,
    },
    rangeTo: {
      length: 25,
    },
    getResult() {
      const Length = this.invert(parseInt(this.input.length, 10));

      if (Length >= 20 && Length <= 23) {
        return 'S';
      } else if (Length >= 22 && Length <= 25) {
        return 'M';
      }
    },
  };
}

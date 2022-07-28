import { ElbowPads } from './BauerBase';

export function BauerElbowPadsYT() {
  return {
    ...ElbowPads,

    input: {
      length: 15,
    },
    rangeFrom: {
      length: 15,
    },
    rangeTo: {
      length: 20,
    },
    getResult() {
      const Length = this.invert(parseFloat(this.input.length, 10));

      if (Length >= 15 && Length <= 16) {
        return 'S';
      } else if (Length >= 17 && Length <= 18) {
        return 'M';
      } else if (Length >= 19 && Length <= 20) {
        return 'L';
      }
    },
  };
}

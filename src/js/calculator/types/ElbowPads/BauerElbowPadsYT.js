import { ElbowPads } from './BauerBase';

export function BauerElbowPadsYT() {
  return {
    ...ElbowPads,

    input: {
      Length: 15,
    },
    rangeFrom: {
      Length: 15,
    },
    rangeTo: {
      Length: 20,
    },
    getResult() {
      const Length = this.invert(parseInt(this.input.Length, 10));

      if (Length >= 15 && Length <= 18) {
        return 'S';
      } else if (Length >= 16 && Length <= 19) {
        return 'M';
      } else if (Length >= 18 && Length <= 20) {
        return 'L';
      }
    },
  };
}

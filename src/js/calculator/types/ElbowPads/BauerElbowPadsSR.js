import { ElbowPads } from './BauerBase';

export function BauerElbowPadsSR() {
  return {
    ...ElbowPads,

    input: {
      length: 27,
    },
    rangeFrom: {
      length: 27,
    },
    rangeTo: {
      length: 37,
    },
    getResult() {
      const length = this.invert(parseInt(this.input.length, 10));

      if (length >= 27 && length <= 31) {
        return 'M';
      } else if (length >= 32 && length <= 34) {
        return 'L';
      } else if (length >= 35 && length <= 37) {
        return 'XL';
      }
    },
  };
}

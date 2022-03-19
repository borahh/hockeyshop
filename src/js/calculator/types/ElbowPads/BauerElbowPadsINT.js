import { ElbowPads } from './base';

export function BauerElbowPadsINT() {
  return {
    ...ElbowPads,

    input: {
      length: 24,
    },
    rangeFrom: {
      length: 24,
    },
    rangeTo: {
      length: 29,
    },
    getResult() {
      const length = this.invert(parseInt(this.input.length, 10));

      if (length >= 24 && length <= 27) {
        return 'M';
      } else if (length >= 26 && length <= 29) {
        return 'L';
      }
    },
  };
}

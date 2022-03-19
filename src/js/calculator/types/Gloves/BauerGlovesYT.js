import { Gloves } from './base';

export function BauerGlovesYT() {
  return {
    ...Gloves,
    input: {
      length: 10.5,
    },
    rangeFrom: {
      length: 10.5,
    },
    rangeTo: {
      length: 14,
    },

    getResult() {
      const length = this.invert(parseInt(this.input.length, 10));

      if (length >= 10.5 && length <= 13) {
        return '8';
      } else if (length >= 11.5 && length <= 14) {
        return '9';
      }
    },
  };
}

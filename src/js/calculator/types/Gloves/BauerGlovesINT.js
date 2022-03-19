import { Gloves } from './BauerBase';

export function BauerGlovesINT() {
  return {
    ...Gloves,
    input: {
      length: 15.5,
    },
    rangeFrom: {
      length: 15.5,
    },
    rangeTo: {
      length: 19,
    },
    getResult() {
      const length = this.invert(parseInt(this.input.length, 10));

      if (length >= 15.5 && length <= 18) {
        return '12';
      } else if (length >= 16.5 && length <= 19) {
        return '13';
      }
    },
  };
}

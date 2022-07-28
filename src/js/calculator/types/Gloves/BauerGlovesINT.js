import { Gloves } from './BauerBase';

export function BauerGlovesINT() {
  return {
    ...Gloves,
    input: {
      length: 17,
    },
    rangeFrom: {
      length: 17,
    },
    rangeTo: {
      length: 19,
    },
    getResult() {
      const length = this.invert(parseFloat(this.input.length, 10));

      if (length >= 17 && length <= 18) {
        return '12';
      } else if (length >= 18.5 && length <= 19) {
        return '13';
      }
    },
  };
}

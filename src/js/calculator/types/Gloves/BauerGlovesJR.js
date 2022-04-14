import { Gloves } from './BauerBase';

export function BauerGlovesJR() {
  return {
    ...Gloves,
    input: {
      length: 13,
    },
    rangeFrom: {
      length: 13,
    },
    rangeTo: {
      length: 16.5,
    },
    getResult() {
      const length = this.invert(parseFloat(this.input.length, 10));

      if (length >= 14 && length <= 15.5) {
        return '10';
      } else if (length >= 16 && length <= 16.5) {
        return '11';
      }
    },
  };
}

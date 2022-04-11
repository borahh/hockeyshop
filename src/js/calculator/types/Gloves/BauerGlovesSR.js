import { Gloves } from './BauerBase';

export function BauerGlovesSR() {
  return {
    ...Gloves,
    input: {
      length: 18,
    },
    rangeFrom: {
      length: 18,
    },
    rangeTo: {
      length: 22,
    },
    getResult() {
      const length = this.invert(parseFloat(this.input.length, 10));

      if (length >= 18 && length <= 20.5) {
        return '14';
      } else if (length >= 19 && length <= 22) {
        return '15';
      }
    },
  };
}

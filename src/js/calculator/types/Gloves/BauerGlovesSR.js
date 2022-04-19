import { Gloves } from './BauerBase';

export function BauerGlovesSR() {
  return {
    ...Gloves,
    input: {
      length: 19.5,
    },
    rangeFrom: {
      length: 19.5,
    },
    rangeTo: {
      length: 22,
    },
    getResult() {
      const length = this.invert(parseFloat(this.input.length, 10));

      if (length >= 19.5 && length <= 20.5) {
        return '14';
      } else if (length >= 21 && length <= 22) {
        return '15';
      }
    },
  };
}

import { Gloves } from './base';

export function CCMGlovesYT() {
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
      const length = parseFloat(this.input.length, 10);

      if (length >= 10.5 && length <= 13) {
        return '8';
      } else if (length == 14) {
        return '9';
      }
    },
  };
}

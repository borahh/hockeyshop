import { Gloves } from './base';

export function CCMGlovesSR() {
  return {
    ...Gloves,
    input: {
      length: 16.5,
    },
    rangeFrom: {
      length: 16.5,
    },
    rangeTo: {
      length: 22,
    },
    getResult() {
      const length = this.invert(parseInt(this.input.length, 10));
      console.log(this.input.length, '🍕');
      if (length >= 16.5 && length <= 18) {
        return '13';
      } else if (length >= 18.5 && length <= 19.0) {
        return '14';
      } else if (length >= 19.5 && length <= 22) {
        return '15';
      }
    },
  };
}

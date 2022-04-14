import { ShinGuards } from './BauerBase';

export function BauerShinGuardsYT() {
  return {
    ...ShinGuards,

    input: {
      length: 25.5,
    },
    rangeFrom: {
      length: 25.5,
    },
    rangeTo: {
      length: 33.5,
    },
    getResult() {
      const length = this.invert(parseInt(this.input.length, 10));

      if (length >= 25.5 && length <= 28) {
        return '8';
      } else if (length >= 28.5 && length <= 31) {
        return '9';
      } else if (length >= 31.5 && length <= 33.5) {
        return '10';
      }
    },
  };
}

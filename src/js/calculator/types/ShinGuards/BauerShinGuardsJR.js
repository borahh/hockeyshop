import { ShinGuards } from './BauerBase';

export function BauerShinGuardsJR() {
  return {
    ...ShinGuards,

    input: {
      length: 33.5,
    },
    rangeFrom: {
      length: 33.5,
    },
    rangeTo: {
      length: 38.5,
    },
    getResult() {
      const length = this.invert(parseInt(this.input.length, 10));

      if (length >= 33.5 && length <= 36) {
        return '11';
      } else if (length >= 36 && length <= 38.5) {
        return '12';
      }
    },
  };
}

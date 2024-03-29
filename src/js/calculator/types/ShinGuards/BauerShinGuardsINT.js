import { ShinGuards } from './BauerBase';

export function BauerShinGuardsINT() {
  return {
    ...ShinGuards,

    input: {
      length: 38.5,
    },
    rangeFrom: {
      length: 38.5,
    },
    rangeTo: {
      length: 43.5,
    },
    getResult() {
      const length = this.invert(parseFloat(this.input.length, 10));

      if (length >= 38.5 && length <= 41) {
        return '13';
      } else if (length >= 41.5 && length <= 43.5) {
        return '14';
      }
    },
  };
}

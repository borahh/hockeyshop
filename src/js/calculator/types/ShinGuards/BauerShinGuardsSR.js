import { ShinGuards } from './BauerBase';

export function BauerShinGuardsSR() {
  return {
    ...ShinGuards,

    input: {
      length: 43.5,
    },
    rangeFrom: {
      length: 43.5,
    },
    rangeTo: {
      length: 51.5,
    },
    getResult() {
      const length = this.invert(parseFloat(this.input.length, 10));

      if (length >= 43.5 && length <= 46) {
        return '15';
      } else if (length >= 46.5 && length <= 48.5) {
        return '16';
      } else if (length >= 49 && length <= 51.5) {
        return '17';
      }
    },
  };
}

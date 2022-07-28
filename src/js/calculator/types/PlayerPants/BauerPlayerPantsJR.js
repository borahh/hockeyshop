import { PlayerPants } from './BauerBase';

export function BauerPlayerPantsJR() {
  return {
    ...PlayerPants,
    input: {
      waist: 61,
    },
    rangeFrom: {
      waist: 61,
    },
    rangeTo: {
      waist: 72,
    },
    getResult() {
      const waist = this.invert(parseFloat(this.input.waist, 10));
      if (waist >= 61 && waist <= 64) {
        return 'S';
      } else if (waist >= 65 && waist <= 68) {
        return 'M';
      } else if (waist >= 69 && waist <= 72) {
        return 'L';
      }
    },
  };
}

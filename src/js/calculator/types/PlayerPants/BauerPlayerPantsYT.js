import { PlayerPants } from './BauerBase';

export function BauerPlayerPantsYT() {
  return {
    ...PlayerPants,

    input: {
      waist: 48,
    },
    rangeFrom: {
      waist: 48,
    },
    rangeTo: {
      waist: 62,
    },
    getResult() {
      const waist = this.invert(parseInt(this.input.waist, 10));

      if (waist >= 48 && waist <= 52) {
        return 'S';
      } else if (waist >= 53 && waist <= 55) {
        return 'M';
      } else if (waist >= 56 && waist <= 61) {
        return 'L';
      }
    },
  };
}

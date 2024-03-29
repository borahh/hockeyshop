import { PlayerPants } from './BauerBase';

export function BauerPlayerPantsINT() {
  return {
    ...PlayerPants,
    input: {
      waist: 72,
    },
    rangeFrom: {
      waist: 72,
    },
    rangeTo: {
      waist: 86,
    },
    getResult() {
      const waist = this.invert(parseFloat(this.input.waist, 10));

      if (waist >= 72 && waist <= 78) {
        return 'M';
      } else if (waist >= 79 && waist <= 86) {
        return 'L';
      }
    },
  };
}

import { PlayerPants } from './BauerBase';

export function BauerPlayerPantsINT() {
  return {
    ...PlayerPants,

    input: {
      waist: 71,
    },
    rangeFrom: {
      waist: 71,
    },
    rangeTo: {
      waist: 86,
    },
    getResult() {
      const waist = this.invert(parseInt(this.input.waist, 10));

      if (waist >= 72 && waist <= 78) {
        return 'M';
      } else if (waist >= 73 && waist <= 82) {
        return 'L';
      }
    },
  };
}

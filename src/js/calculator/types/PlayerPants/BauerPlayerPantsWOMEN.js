import { PlayerPants } from './BauerBase';

export function BauerPlayerPantsWOMEN() {
  return {
    ...PlayerPants,
    input: {
      waist: 61,
    },
    rangeFrom: {
      waist: 61,
    },
    rangeTo: {
      waist: 84,
    },
    getResult() {
      const waist = this.invert(parseFloat(this.input.waist, 10));

      if (waist >= 61 && waist <= 69) {
        return 'XS';
      } else if (waist >= 66 && waist <= 74) {
        return 'S';
      } else if (waist >= 71 && waist <= 79) {
        return 'M';
      } else if (waist >= 76 && waist <= 84) {
        return 'L';
      }
    },
  };
}

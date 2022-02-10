import { PlayerPants } from './base';

export function PlayerPantsYT() {
  return {
    ...PlayerPants,
    input: {
      waist: 51,
      height:102
    },
    rangeFrom: {
        waist: 51,
        height:102
    },
    rangeTo: {
        waist: 60,
        height:127
    },
    getResult() {
      const height = this.invert(parseInt(this.input.height, 10));
      const waist = this.invert(parseInt(this.input.waist, 10));

       if( waist >= 51 && waist<=55 && height >= 102 && height <=109){
        return 'S'
      }else if( waist >=53 && waist<=57 && height >= 109 && height <=117){
        return 'M'
      }else if( waist >= 56 && waist<=60 && height >= 117 && height <=127){
        return 'L'
      }

     
    },
  };
}
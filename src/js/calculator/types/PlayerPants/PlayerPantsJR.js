import { PlayerPants } from './base';

export function PlayerPantsJR() {
  return {
    ...PlayerPants,
    input: {
      waist: 58,
      height:127
    },
    rangeFrom: {
        waist: 58,
        height:127
    },
    rangeTo: {
        waist: 79,
        height:170
    },
    getResult() {
      const height = this.invert(parseInt(this.input.height, 10));
      const waist = this.invert(parseInt(this.input.waist, 10));
      if(  waist<=58 &&  height <=132){
        return 'XS'
      } else if( waist >= 58 && waist<=64 && height >= 127 && height <=137){
        return 'S'
      }else if( waist >=62 && waist<=72 && height >= 137 && height <=147){
        return 'M'
      }else if( waist >= 69 && waist<=79 && height >= 147 && height <=157){
        return 'L'
      }else if( waist >= 69 && waist <=74 && height >= 163 && height <= 170 ){
        return 'XL'
      }

     
    },
  };
}
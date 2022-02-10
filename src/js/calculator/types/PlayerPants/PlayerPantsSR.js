import { PlayerPants } from './base';

export function PlayerPantsSR() {
  return {
    ...PlayerPants,
    input: {
      waist: 74,
      height:157
    },
    rangeFrom: {
        waist: 74,
        height:157
    },
    rangeTo: {
        waist: 107,
        height:188
    },
    getResult() {
      const height = this.invert(parseInt(this.input.height, 10));
      const waist = this.invert(parseInt(this.input.waist, 10));
       
      if( waist >= 74 && waist<=82 && height >= 157 && height <=168){
        return 'S'
      }else if( waist >=79 && waist<=89 && height >= 168 && height <=178){
        return 'M'
      }else if( waist >= 86 && waist<=99 && height >= 178 && height <=188){
        return 'L'
      }else if( waist >= 95 && waist <=107 && height >= 183 ){
        return 'XL'
      }

     
    },
  };
}
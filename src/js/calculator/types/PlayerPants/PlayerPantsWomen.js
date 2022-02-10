import { PlayerPants } from './base';

export function PlayerPantsWomen() {
  return {
    ...PlayerPants,
    input: {
      waist: 64,
      height:150
    },
    rangeFrom: {
        waist: 64,
        height:150
    },
    rangeTo: {
        waist: 94,
        height:183
    },
    getResult() {
      const height = this.invert(parseInt(this.input.height, 10));
      const waist = this.invert(parseInt(this.input.waist, 10));
       
      if( waist >= 64 && waist<=74 && height >= 150 && height <=160){
        return 'S'
      }else if( waist >=74 && waist<=84 && height >= 160 && height <=170){
        return 'M'
      }else if( waist >= 84 && waist<=94 && height >= 170 && height <=183){
        return 'L'
      }

     
    },
  };
}
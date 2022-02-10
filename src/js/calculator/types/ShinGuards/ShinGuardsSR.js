import { ShinGuards } from './base';

export function ShinGuardsSR() {
  return {
    ...ShinGuards,
    input: {
      height: 163,
      length:36
    },
    rangeFrom: {
        height: 163,
        length:36
    },
    rangeTo: {
        height: 193,
        length:48
    },
    getResult() {
      const length = this.invert(parseInt(this.input.length, 10));
      const height = this.invert(parseInt(this.input.height, 10));
       
      if( height >= 163 && height<=173 && length >= 36 && length <=38){
        return '14'
      }else if( height >= 173 && height<=183 && length >= 38 && length <=41){
        return '15'
      }else if( height >= 183 && height<=193 && length >= 41 && length <=43){
        return '16'
      }else if( height >= 193 && length >= 43 && length <=46){
        return '17'
      }else if( height >= 193  && length >= 46 && length <=48){
        return '18'
      }

     
    },
  };
}
import { ShinGuards } from './base';

export function ShinGuardsJR() {
  return {
    ...ShinGuards,
    input: {
      height: 132,
      length:28
    },
    rangeFrom: {
        height: 132,
        length:28
    },
    rangeTo: {
        height: 163,
        length:36
    },
    getResult() {
      const length = this.invert(parseInt(this.input.length, 10));
      const height = this.invert(parseInt(this.input.height, 10));
       
      if( height >= 132 && height<=142 && length >= 28 && length <=30){
        return '11'
      }else if( height >= 142 && height<=152 && length >= 30 && length <=33){
        return '12'
      }else if( height >= 152 && height<=163 && length >= 33 && length <=36){
        return '13'
      }

     
    },
  };
}
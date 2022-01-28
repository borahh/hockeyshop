import { calculatorUI } from '../ui';

export function BauerIcehockeySkates() {
  return {
    ...calculatorUI,
    maxStep: 3,
    units: [{ id: 'EU' }, { id: 'US' }],
    lengthInput: '0',
    getLengthValue(i) {
      return this.lengthInputValues[this.selectedUnit][
        parseInt(this.lengthInput, 10) + i
      ];
    },
    getBauerValue(i) {
      return this.lengthInputValues['BAUER'][
        parseInt(this.lengthInput, 10) + i
      ];
    },
    selectedUnit: 'EU',
    lengthInputValues: {
      US: [
        '7.0Y',
        '7.5Y',
        '8.0Y',
        '8.5Y',
        '9.0Y',
        '9.5Y',
        '10.0Y',
        '10.5Y',
        '11.0Y',
        '11.5Y',
        '12.0Y',
        '12.0Y',
        '12.5Y',
        '13.0Y',
        '13.0Y',
        '13.5Y',
        '1.0',
        '1.5',
        '1.5',
        '2.0',
        '2.5',
        '3.0',
        '3.0',
        '3.5',
        '4.0',
        '4.5',
        '5.0',
        '5.0',
        '5.5',
        '6.0',
        '6.5',
        '7.0',
        '7.0',
        '7.5',
        '8.0',
        '8.5',
        '8.5',
        '9.0',
        '9.5',
        '10.0',
        '10.0',
        '10.5',
        '11.0',
        '11.5',
        '12.0',
        '12.5',
        '12.5',
        '13.0',
        '13.5',
      ],
      EU: [
        '24',
        '24.5',
        '25',
        '25.5',
        '26',
        '26.5',
        '27',
        '27.5',
        '28',
        '28.5',
        '29',
        '29.5',
        '30',
        '30.5',
        '31',
        '31.5',
        '32',
        '32.5',
        '33',
        '33.5',
        '34',
        '34.5',
        '35',
        '35.5',
        '36',
        '36.5',
        '37.0',
        '37.5',
        '38',
        '38.5',
        '39',
        '39.5',
        '40',
        '40.5',
        '41',
        '41.5',
        '42',
        '42.5',
        '43',
        '43.5',
        '44',
        '44.5',
        '45',
        '45.5',
        '46',
        '46.5',
        '47',
        '47.5',
        '48',
      ],
      BAUER: [
        '6.0Y',
        '7.0Y',
        '7.0Y',
        '8.0Y',
        '8.0Y',
        '8.5Y',
        '9.0Y',
        '9.5Y',
        '10.0Y',
        '10.5Y',
        '11.0Y',
        '11.0Y',
        '11.5Y',
        '12.0Y',
        '12.0Y',
        '12.5Y',
        '13.0Y',
        '13.5Y',
        '13.5Y',
        '1.0',
        '1.5',
        '2.0',
        '2.0',
        '2.5',
        '3.0',
        '3.5',
        '4.0',
        '4.0',
        '4.5',
        '5.0',
        '5.5',
        '6.0',
        '6.0',
        '6.0',
        '6.5',
        '7.0',
        '7.0',
        '7.5',
        '8.0',
        '8.5',
        '8.5',
        '9.0',
        '9.5',
        '10.0',
        '10.5',
        '11.0',
        '11.0',
        '11.5',
        '12.0',
      ],
    },
    reccomendLength() {
      let yth = false;
      const length = document.querySelector('input[name = "__length"]').value;

      if (length.includes('Y')) {
        yth = true;
      }

      const scale = document.querySelector('input[name = "__scale"]').value;
      const fit = document.querySelector('input[name = "__fit"]:checked').value;
      const width = document.querySelector(
        'input[name = "__width"]:checked',
      ).value;
      const height = document.querySelector(
        'input[name = "__height"]:checked',
      ).value;

      // function get_recommended_length(fit, length, yth) {
      //   switch (fit) {
      //     case 0:
      //       // Subtract 0.5

      //       if (yth) {
      //         return parseFloat(length - 0.5).toFixed(1) + 'Y';
      //       } else {
      //         return parseFloat(length - 0.5).toFixed(1);
      //       }

      //       break;
      //     case 1:
      //       // Do nothing
      //       if (yth) {
      //         return parseFloat(length).toFixed(1) + 'Y';
      //       } else {
      //         return parseFloat(length).toFixed(1);
      //       }

      //       break;
      //     case 2:
      //       // Add 0.5

      //       if (yth) {
      //         return parseFloat(length + 0.5).toFixed(1) + 'Y';
      //       } else {
      //         return parseFloat(length + 0.5).toFixed(1);
      //       }

      //       break;
      //     default:
      //       // Do nothing
      //       if (yth) {
      //         return parseFloat(length).toFixed(1) + 'Y';
      //       } else {
      //         return parseFloat(length).toFixed(1);
      //       }
      //   }
      // }

      // function get_scale_fit(width, height) {
      //   switch (width) {
      //     case 0:
      //       // Narrow Width
      //       switch (height) {
      //         case 2:
      //           // High Height
      //           return 'fit2';
      //           break;
      //         default:
      //           return 'fit1';
      //       }
      //       break;
      //     case 1:
      //       // Medium Width
      //       switch (height) {
      //         case 2:
      //           // Hight Height
      //           return 'fit3';
      //           break;
      //         default:
      //           return 'fit2';
      //       }
      //       break;
      //     case 2:
      //       // Wide Width
      //       switch (height) {
      //         case 0:
      //           // Low Height
      //           return 'fit2';
      //           break;
      //         default:
      //           return 'fit3';
      //       }
      //       break;
      //     default:
      //       // Do nothing
      //       return 'fit1';
      //   }
      // }

      // function get_scale_ee(width, height) {
      //   switch (width) {
      //     case 0:
      //       // Narrow Width
      //       return 'd';
      //       break;
      //     case 1:
      //       // Medium Width
      //       switch (height) {
      //         case 2:
      //           // Hight Height
      //           return 'ee';
      //           break;
      //         default:
      //           return 'd';
      //       }
      //       break;
      //     case 2:
      //       // Wide Width
      //       return 'ee';
      //       break;
      //     default:
      //       // Do nothing
      //       return 'd';
      //   }
      // }

      // function get_scale(scale) {
      //   if (scale === 'scale_fit') {
      //     return get_scale_fit(width, height);
      //   } else if (scale === 'scale_ee') {
      //     return get_scale_ee(width, height);
      //   }
      // }

      const data = {
        yth,
        scale,
        fit,
        width,
        height,
      };

      console.log(data);
    },
    handleFinal() {
      this.reccomendLength();
      this.onSubmit = true;
    },
  };
}

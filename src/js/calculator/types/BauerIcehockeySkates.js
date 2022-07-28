import { getVariationEl } from '../../helpers/getVariationEl';
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

      const get_length = (fit, length, yth) => {
        if (fit === '0') {
          const i = parseFloat(length - 0.5).toFixed(1);
          return yth ? i + 'Y' : i;
        } else if (fit === '1') {
          const i = parseFloat(length).toFixed(1);
          return yth ? i + 'Y' : i;
        } else if (fit === '2') {
          const i = parseFloat(length + 0.5).toFixed(1);
          return yth ? i + 'Y' : i;
        }
      };

      const get_scale = (scale, width, height) => {
        switch (width) {
          // Narrow Width
          case '0':
            switch (height) {
              // Low
              case '0':
                if (scale === 'scale_fit') {
                  return 'fit1';
                } else if (scale === 'scale_ee') {
                  return 'd';
                }
                break;

              // Medium
              case '1':
                if (scale === 'scale_fit') {
                  return 'fit1';
                } else if (scale === 'scale_ee') {
                  return 'd';
                }
                break;

              // High
              case '2':
                if (scale === 'scale_fit') {
                  return 'fit2';
                } else if (scale === 'scale_ee') {
                  return 'd';
                }
                break;
            }
            break;

          // Medium Width
          case '1':
            switch (height) {
              // Low
              case '0':
                if (scale === 'scale_fit') {
                  return 'fit2';
                } else if (scale === 'scale_ee') {
                  return 'd';
                }
                break;

              // Medium
              case '1':
                if (scale === 'scale_fit') {
                  return 'fit2';
                } else if (scale === 'scale_ee') {
                  return 'd';
                }
                break;

              // High
              case '2':
                if (scale === 'scale_fit') {
                  return 'fit3';
                } else if (scale === 'scale_ee') {
                  return '2e';
                }
                break;
            }
            break;

          // Wide Width
          case '2':
            switch (height) {
              // Low
              case '0':
                if (scale === 'scale_fit') {
                  return 'fit2';
                } else if (scale === 'scale_ee') {
                  return '2e';
                }
                break;

              // Medium
              case '1':
                if (scale === 'scale_fit') {
                  return 'fit3';
                } else if (scale === 'scale_ee') {
                  return '2e';
                }
                break;

              // High
              case '2':
                if (scale === 'scale_fit') {
                  return 'fit3';
                } else if (scale === 'scale_ee') {
                  return '2e';
                }
                break;
            }
            break;

          default:
            if (scale === 'scale_fit') {
              return 'fit1';
            } else if (scale === 'scale_ee') {
              return 'd';
            }
        }
      };

      const data = {
        fit: get_length(fit, parseInt(length, 10), yth),
        scale: get_scale(scale, width, height),
      };

      this.dataObtained = data;

      const AvailableVariationsLoader = JSON.parse(
        document
          .getElementById('AvailableVariationsLoader')
          .getAttribute('data-variations'),
      );

      if (
        AvailableVariationsLoader.length.value
          .split(',')
          .includes(this.dataObtained.fit) &&
        AvailableVariationsLoader.width.value
          .split(',')
          .includes(this.dataObtained.scale)
      ) {
        const selectFit = getVariationEl(
          AvailableVariationsLoader.length,
          this.dataObtained.fit,
        );
        const selectScale = getVariationEl(
          AvailableVariationsLoader.width,
          this.dataObtained.scale,
        );

        if (selectFit && selectScale) {
          this.matchedVariations = true;
          if (selectFit.classList.contains('disabled')) {
            this.matchedVariations = false;
          }
          if (!selectFit.classList.contains('selected')) {
            selectFit.click();
          }
          if (selectScale.classList.contains('disabled')) {
            this.matchedVariations = false;
          }
          if (!selectScale.classList.contains('selected')) {
            selectScale.click();
          }
        } else {
          this.matchedVariations = false;
        }
      } else {
        this.matchedVariations = false;
      }
      this.onDataObtained = true;
    },
    handleFinal() {
      this.reccomendLength();
      this.onSubmit = true;
    },
  };
}

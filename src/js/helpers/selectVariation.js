export function selectVariation(variation, data) {
  let select;
  variation.list.forEach((item) => {
    let ele = document.querySelector(`select#${item}`);
    if (ele) {
      select = ele;
    } else {
      return;
    }
  });

  select.value = data.toLowerCase();
  // ul.querySelectorAll('li').forEach((ele) => {
  //   if (ele.getAttribute(variation.selector) == data.toLowerCase()) {
  //     console.log(ele);
  //     ele.click();
  //   }
  // });
}

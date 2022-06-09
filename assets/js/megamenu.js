const btn = document.querySelectorAll('.btn');
const closeAll = document.querySelector('#close_all_opened');
const menuBtn = document.querySelector('.menu_btn');

const changeMenuIcon = (isOpen) => {
  if (window.innerWidth <= 1023) {
    if (isOpen) {
      closeAll.style.display = 'flex';
      menuBtn.style.display = 'none';
    } else {
      closeAll.style.display = 'none';
      menuBtn.style.display = 'flex';
    }
  }
};
btn.forEach((ele) => {
  ele.addEventListener('click', (e) => {
    e.preventDefault();
    ele.nextElementSibling.classList.add('opened');
    const opened = document.querySelectorAll('.opened');
    changeMenuIcon(true);
  });
});

closeAll.addEventListener('click', () => {
  const opened = document.querySelectorAll('.opened');
  opened.forEach((ele) => ele.classList.remove('opened'));
  changeMenuIcon(false);
});

window.addEventListener('load', () => {
  const r = document.querySelector(':root');
  const nav = document.querySelector('nav');
  const menuHeight = window.innerHeight - nav.scrollHeight;
  r.style.setProperty('--menu-height', menuHeight + 'px');
  r.style.setProperty('--nav-height', nav.scrollHeight + 'px');
});

const dropDownBtn = document.querySelectorAll('.drop_down > .btn');
dropDownBtn.forEach((item) => {
  item.insertAdjacentHTML(
    'beforeend',
    `<svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
 <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
</svg>`,
  );
});

const dropDownItem = document.querySelectorAll('.drop_down > .item');
dropDownItem.forEach((item) => {
  item.insertAdjacentHTML(
    'afterbegin',
    ` <div class='flex justify-between lg:hidden'>
                    <button class="flex items-center gap-2 back_btn " >
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Back
                    </button>
                </div>`,
  );
});
const backBtn = document.querySelectorAll('.back_btn');
backBtn.forEach((item) => {
  item.addEventListener('click', () => {
    const opened = document.querySelectorAll('.opened');
    opened[opened.length - 1].classList.remove('opened');
    if (opened.length <= 1) {
      changeMenuIcon(false);
    }
    console.log('working');
  });
});

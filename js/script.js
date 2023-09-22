const swiper = new Swiper('.brand-repair__slider', {
  slidesPerView: 1.2,
  loop: true,

  enabled: true,
  breakpoints: {
    768: {
      enabled: false,
      slidesPerView: 3,
    },
  },

  pagination: {
    el: '.brand-repair__pagination',
  },
});

const btnShowMore = document.querySelector('.show-more');
const showBrands = document.querySelector('.brand-repair__tablet');
const windowWidth = window.innerWidth;

btnShowMore.addEventListener('click', () => {
  if (showBrands.classList.contains('expanded')) {
    showBrands.style.height = '172px';
    btnShowMore.textContent = 'Показать все';
    btnShowMore.classList.remove('rotate');
    showBrands.classList.remove('expanded');
  } else {
    showBrands.style.height = `${showBrands.scrollHeight}px`;
    btnShowMore.textContent = 'Скрыть все';
    btnShowMore.classList.add('rotate');
    showBrands.classList.add('expanded');
  }

  // if (windowWidth > 768) {
  //   if (showBrands.classList.contains('expanded')) {
  //     showBrands.style.height = '165px';
  //   } else {
  //     showBrands.style.height = `${showBrands.scrollHeight}px`;
  //   }
  // }
});

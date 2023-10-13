
const burger = document.querySelector('.menu__burger')
const menu = document.querySelector('.menu')
const body  = document.body

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
})

const filter = document.querySelector('.filter')
const items = document.querySelectorAll('.block__filter')

items.forEach(item => {
    item.addEventListener('click', event => {
        item.querySelector('.block-filter__dropdown').classList.toggle('active');
        item.querySelector('.block-filter__icon').classList.toggle('active');
    })
})

const popularSlider = new Swiper('.popular-slider', {
    spaceBetween: 20,
    slidesPerView: 1, 
    loop: true, 
    
    navigation: {
      nextEl: '.swiper-popular-next',
      prevEl: '.swiper-popular-prev ',
    },
    breakpoints: {
        990: {
            slidesPerView: 3,
        },
        500:{
            slidesPerView: 2,
        }
    },
 
  });
  const reviewsSlider  = new Swiper('.slider-reviews', {
    spaceBetween: 20,
    slidesPerView: 1, 
    loop: true, 
    
    navigation: {
      nextEl: '.swiper-reviews-next',
      prevEl: '.swiper-reviews-prev',
    },
  });


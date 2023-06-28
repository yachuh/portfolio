//= AOS animation =//
AOS.init()

//= toggle mobile nav menu =//
const navBtn = document.querySelector('#navMobileBtn')
const navMobileMenu = document.querySelector('#navMobileMenu')

navBtn.addEventListener('click', (e) => {
  e.preventDefault()
  navMobileMenu.classList.toggle('hidden')
})

//= Swiper =//
// Initialize swiper
const swiper = new Swiper('.skills-swiper', {
  autoplay: {
    disableOnInteraction: false,
    delay: 1000
  },
  speed: 1500,
  loop: true,
  slidesPerView: 'auto',
  // 多欄
  breakpoints: {
    360: {
      spaceBetween: 8
    },
    768: {
      spaceBetween: 8
    },
    992: {
      spaceBetween: 16
    }
  }
})

const swiperCustomer = new Swiper('.review-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

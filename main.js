import './assets/css/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

console.log('Hello world!')

//= AOS animation plugin =//
AOS.init()

//= toggle mobile nav menu =//
const navBtn = document.querySelector('#navMobileBtn')
const navMobileMenu = document.querySelector('#navMobileMenu')

navBtn.addEventListener('click', (e) => {
  e.preventDefault()
  navMobileMenu.classList.toggle('hidden')
})

'use strict'


const OffScreenMenu = document.querySelector(`.Off-screen-menu`)
console.log(OffScreenMenu)


const HeaderBurger = document.querySelector(`.Header-burger`)
console.log(HeaderBurger)

HeaderBurger.addEventListener((`click`) , () => {

    OffScreenMenu.classList.toggle(`Active`)

    
})
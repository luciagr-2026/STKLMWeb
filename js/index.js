'use strict'

const OffScreenMenu = document.querySelector(`.Off-screen-menu`)
console.log(OffScreenMenu)


const HeaderBurger = document.querySelector(`.Header-burger`)
console.log(HeaderBurger)

HeaderBurger.addEventListener((`click`) , () => {

    OffScreenMenu.classList.toggle(`Active`)

})


const OffScreenMenuSpan = document.querySelector(`.Off-screen-menu-span`)
console.log(OffScreenMenuSpan)

OffScreenMenuSpan.addEventListener((`click`) , () => {

OffScreenMenuSpan.classList.toggle(`Active`)

OffScreenMenuSpan.addEventListener((`click`) , () => {

    OffScreenMenu.classList.remove(`Active`)
})

})



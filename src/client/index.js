// styles
import './css/0-variables.css'
import './css/1-base.css'

import './css/style.css'
import './css/2-home.css'
import './css/3-menu.css'
import './css/4-hero.css'

import './css/sections/editor.css'
import './css/sections/phones.css'
import './css/sections/laptop.css'
import './css/5-footer.css'

// Images
import fav from './images/favicon-32x32.png'
import logo from './images/logo.svg'
import hMenu from './images/icon-hamburger.svg'
import closeBtn from './images/icon-close.svg'
import arrowIcon from './images/icon-arrow-dark.svg'
import editorM from './images/illustration-editor-mobile.svg'
import editorD from './images/illustration-editor-desktop.svg'
import circles from './images/bg-pattern-circles.svg'
import phones from './images/illustration-phones.svg'
import labtop from './images/illustration-laptop-mobile.svg'

// Script
import { createImagesElmInsideOtherElm, createMenuItems, openAndClose, toggleBtnStatu } from './js/script'


const menu = document.querySelector('.menu-container')
const hamburgerWrapper = document.querySelector('.hamburger-btn')
const closeWrapper = document.querySelector('.close-btn')
const humbergerMenu = document.querySelector('.nav-bar')
const navItem = document.querySelectorAll('.item')
const primaryNav = document.querySelector('.primary-nav')
const secondaryNavBtn = document.querySelector('.secondary-nav') 
const iditorImgCon = document.querySelector('.editor-image-container')
const phoneCircWrapper = document.querySelector('.phones-circle')
const phonesWrapper = document.querySelector('.phones-img')
const labtopWrapper = document.querySelector('.laptop-img-container')
const footerLogo = document.querySelector('.footer-logo')



createImagesElmInsideOtherElm('img','logo',logo, menu,'afterbegin' )
createImagesElmInsideOtherElm('img','logo',logo, footerLogo,'afterbegin' )
createImagesElmInsideOtherElm('img','hamburger-icon', hMenu, hamburgerWrapper,'afterbegin' )
createImagesElmInsideOtherElm('img','close-icon', closeBtn, closeWrapper,'afterbegin' )
navItem.forEach((elm) => {
    createImagesElmInsideOtherElm('img','arrow', arrowIcon, elm,'beforeend' )
})
createImagesElmInsideOtherElm('img','editor-img', editorM, iditorImgCon,'afterbegin' )
createImagesElmInsideOtherElm('img','editor-img-desktop', editorD, iditorImgCon,'afterbegin' )
createImagesElmInsideOtherElm('img','editor-img-desktop', circles, phoneCircWrapper,'afterbegin' )
createImagesElmInsideOtherElm('img','editor-img-desktop', phones, phonesWrapper,'afterbegin' )
createImagesElmInsideOtherElm('img','editor-img-desktop', labtop, labtopWrapper,'afterbegin' )


openAndClose(hamburgerWrapper,closeWrapper,humbergerMenu)
createMenuItems(primaryNav)
toggleBtnStatu(secondaryNavBtn)   
console.log('Webpack')



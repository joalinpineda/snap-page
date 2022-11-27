let openMenu = document.querySelector('#hamburger-menu')
let menu = document.querySelector('#menu')
let feature = document.querySelector('.feature-toggle')
let company = document.querySelector('.company-toggle')
let featureItems = document.querySelector('.features-items')
let companyItems = document.querySelector('.company-items')

openMenu.addEventListener('click', ()=> showMenu())
features.addEventListener('click', ()=>{
    featureItems.classList.toggle('toggle-disable')
    feature.classList.toggle('open-company-toggle')
})
company.addEventListener('click', ()=>{
    companyItems.classList.toggle('toggle-disable')
    company.classList.toggle('open-company-toggle')
})

function showMenu(){
    openMenu.classList.toggle('toggle-close')
    menu.classList.toggle('disable')
}
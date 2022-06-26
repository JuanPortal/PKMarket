const section = document.getElementById('section')
const console3DS = document.getElementById('console3DS')
const consoleSwitch = document.getElementById('consoleSwitch')
const imageSection = document.getElementsByClassName('image-section')

console3DS.addEventListener('click', ()=> {
    section.style.backgroundImage = 'url("/media/3DS\ Background.png")'
    imageSection[0].style.paddingBottom = '28rem'
})

consoleSwitch.addEventListener('click', ()=> {
    section.style.backgroundImage = 'url("/media/Switch\ Background.png")'
    imageSection[0].style.paddingBottom = '0'
})
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const loadText = document.querySelector('.loading-text')
const content = document.querySelector('.content')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

let load = 0

let int = setInterval(blurring, 30)

function blurring () {
    load++
    
    if(load>99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    content.style.filter = `blur(${scale(load, 0, 100, 70, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

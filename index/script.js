const button = document.querySelector('button');
const home = document.querySelector('.home')
const interval = 3000

let homeSlide = document.querySelectorAll('.home-slide')
let index = 1

const firstClone = heroSlide[0].cloneNode(true)
const lastClone = heroSlide[homeSlide.length - 1].cloneNode(true)

firstClone.id = 'first-clone'
lastClone.id = 'last-clone'

home.append(firstClone)
home.prepend(lastClone)

const slideWidth = homeSlide[index].clientWidth

home.style.transform = `translateX(${-slideWidth * index}px)`

const startSlide = () => {
    setInterval(() => {
        homeSlide = document.querySelectorAll('.home-slide')
        if(index >= homeSlide.length - 1) return;
        
        index++
        home.style.transform = `translateX(${-slideWidth * index}px)`
        home.style.transition = '2s ease-in-out'
    }, interval);
}

startSlide()

home.addEventListener('transitionend', () => {
    homeSlide = document.querySelectorAll('.home-slide')

    if (homeSlide[index].id == 'first-clone') {
        home.style.transition = 'none'
        index = 1
        home.style.transform = `translateX(${-slideWidth * index}px)`
    }
})

button.addEventListener('click', function () {
    if (window.innerWidth < 600) {
        window.scrollBy(0, 1193);
    } else {
        window.scrollBy(0, 600);
    }
})


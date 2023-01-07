
let compteur = 0
let timer, elements, slides

window.onload = () =>
{
    const diapo = document.querySelector(".diapo")
    elements = document.querySelector(".elements")
    slides = Array.from(elements.children)

    slideWidth = diapo.getBoundingClientRect().width

    let next = document.querySelector("#nav-droite")
    let prev = document.querySelector("#nav-gauche")
  
    next.addEventListener("click", slideNext)
    prev.addEventListener("click", slidePrev)



    diapo.addEventListener("mouseover", stopTimer)
    diapo.addEventListener("mouseout", startTimer)

    window.addEventListener("resize", () => {
        slideWidth = diapo.getBoundingClientRect().width
        slideNext()
    })
}


function slideNext(){
    compteur++
        if(compteur == slides.length){
            compteur = 0
        }
        let decal = -slideWidth * compteur
        elements.style.transform = `translateX(${decal}px)`
}
    
function slidePrev(){
    compteur--
        if(compteur < 0){
            compteur = slides.length - 1
        }
        let decal = -slideWidth * compteur
        elements.style.transform = `translateX(${decal}px)`
}

function stopTimer(){
    clearInterval(timer)
}
function startTimer(){
    timer = setInterval(slideNext, 9000)        
}



    
const menuHamburger = document.querySelector(".icon-menu")
const navLinks = document.querySelector(".navbar-menu")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')

})







const sideMenu  = document.querySelector(".side-menu")
const menuButton = document.querySelector(".mobile-icon")
const header = document.querySelector(".header")


function toggleMenu()
{
    const header = document.querySelector(".header")
    const overlay = document.querySelector(".overlay")
    
    menuButton.addEventListener("click", () => {
        menuButton.classList.toggle("active")
        sideMenu.classList.toggle("active")
        overlay.classList.toggle("active")
        document.body.classList.toggle("active")

        if(window.scrollY == 0){
            header.classList.toggle("active")
        }
    }) 
}

function autoCloseSideMenu()
{
    const sideMenu  = document.querySelector(".side-menu")
    const sideLinks = document.querySelectorAll(".side-link")
    const menuButton = document.querySelector(".mobile-icon")

    sideLinks.forEach(link => {
        link.addEventListener("click", () => {
            if(sideMenu.classList.contains("active")){
                sideMenu.classList.remove("active")
                menuButton.classList.remove("active")
            }
        })
    })
}

function headerTransition()
{
    window.addEventListener("scroll", () => {
        if(window.scrollY > 10){
            header.classList.add("active")
        }
        else{
            header.classList.remove("active")
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    toggleMenu()
    autoCloseSideMenu()
    headerTransition()
})
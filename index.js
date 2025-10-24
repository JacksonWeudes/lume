function toggleMenu()
{
    const sideMenu   = document.querySelector(".side-menu")
    const menuButton = document.querySelector(".mobile-icon")
    
    menuButton.addEventListener("click", () => {
        menuButton.classList.toggle("active")
        sideMenu.classList.toggle("active")
    }) 
}

function headerTransition()
{
    const header = document.querySelector(".header")

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
    headerTransition()
})
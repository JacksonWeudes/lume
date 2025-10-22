function toggleMenu()
{
    const sideMenu   = document.querySelector(".side-menu")
    const menuButton = document.querySelector(".mobile-icon")
    
    menuButton.addEventListener("click", () => {
        menuButton.classList.toggle("active")
        sideMenu.classList.toggle("active")
    }) 
}

document.addEventListener("DOMContentLoaded", () => {
    toggleMenu()
})
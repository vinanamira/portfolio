/* ===================================== toggle style switcher ===================================== */
const styleSwictherToggler = document.querySelector(".style-switcher-toggler");
styleSwictherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style - switcher on scroll
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/* ===================================== Theme Colors ===================================== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
    })
}
/* ===================================== Theme Light and Dark Mode ===================================== */
const dayNight = document.querySelector(".day-night");
const logoImg = document.querySelector("img.dark");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        logoImg.src = "images/logo-light.png";
    } else {
        logoImg.src = "images/logo-dark.png"; 
    }
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
        logoImg.src = "images/logo-light.png";
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
        logoImg.src = "images/logo-dark.png";
    }
})

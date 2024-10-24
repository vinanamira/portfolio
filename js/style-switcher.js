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

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
            localStorage.setItem("themeColor", color); // Simpan warna yang dipilih ke localStorage
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

// Cek preferensi warna saat halaman dimuat
window.addEventListener("load", () => {
    const savedColor = localStorage.getItem("themeColor");
    if (savedColor) {
        setActiveStyle(savedColor); // Terapkan warna yang disimpan
    }
});
/* ===================================== Theme Light and Dark Mode ===================================== */
const dayNight = document.querySelector(".day-night");
const logoImg = document.querySelector("img.dark");

// Fungsi untuk mengubah mode
function toggleDarkMode() {
    // Mengubah ikon dari matahari ke bulan dan sebaliknya
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    
    // Mengubah kelas body untuk mode gelap
    document.body.classList.toggle("dark");

    // Mengubah gambar logo berdasarkan mode
    if (document.body.classList.contains("dark")) {
        logoImg.src = "images/logo-light.png";
        localStorage.setItem("theme", "dark"); // Simpan preferensi ke localStorage
    } else {
        logoImg.src = "images/logo-dark.png"; 
        localStorage.setItem("theme", "light"); // Simpan preferensi ke localStorage
    }
}

// Cek preferensi saat halaman dimuat
window.addEventListener("load", () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark");
        dayNight.querySelector("i").classList.add("fa-sun");
        logoImg.src = "images/logo-light.png";
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
        logoImg.src = "images/logo-dark.png";
    }
});

// Event listener untuk tombol toggle
dayNight.addEventListener("click", toggleDarkMode);
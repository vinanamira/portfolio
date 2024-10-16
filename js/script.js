/* ================================== Typing Animation ================================== */
var typed = new Typed(".typing",{
    strings: ["","Junior Back End Developer","Database Management"],
    typeSpeed: 100,
    backSpeed: 60,
    loop:true
})
/* ================================== Aside ================================== */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++) {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(e) {
            e.preventDefault();
            for(let j=0; j<totalNavList; j++) {
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth < 1200) {
                asideSectionTogglerBtn();
            }
        })
    }

    document.querySelector('.logo-link').addEventListener('click', function(event) {
        event.preventDefault();
        showSection(this);
        updateNav(this);

    });
    
    function showSection(element) {
        const target = element.getAttribute("href").split("#")[1];
        const currentActive = document.querySelector(".section.active");
        
        if (currentActive) {
            currentActive.classList.remove("active");
            currentActive.classList.add("back-section");
        }
        
        // Hapus kelas back-section dari semua section kecuali yang aktif sebelumnya
        allSection.forEach(section => {
            if (section !== currentActive) {
                section.classList.remove("back-section");
            }
        });
        
        const targetSection = document.querySelector("#" + target);
        targetSection.classList.add("active");
        targetSection.classList.remove("back-section");
        
        setTimeout(() => {
            if (currentActive) {
                currentActive.classList.remove("back-section");
            }
        }, 1000); 
    }

    function updateNav(element)
    {
        for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function() {
        showSection(this);
        updateNav(this);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () =>
        {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn()
        {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++ )
            {
                allSection[i].classList.toggle("open");
            }
        }
let mainLinks = document.querySelectorAll(".navbar-expand-lg .navbar-nav .nav-link");

let megaMenu = document.querySelectorAll(".mega-menu ul li");



// Swap between sections 
mainLinks.forEach(link => {
    link.addEventListener("click", function () {
        let currentSection = document.querySelector(`.${this.innerHTML}`);
        mainLinks.forEach(e => {
            e.classList.remove("active")
        });
        this.classList.add("active");
        let otherSections = document.querySelectorAll(".sections > div")
        otherSections.forEach(e => {
            if (e.className != currentSection.className) {
                e.style.display = "none";
            }
        })
        currentSection.style.display = "block";
    })
})

// Swap between mega menu parts

let parts = document.querySelectorAll(".parts > div")
let activePart = document.querySelector(".mega-menu > ul li.active");
parts.forEach(e => {
    if (e.className != activePart.innerHTML) {
        e.style.display = "none";
    }
})
megaMenu.forEach(part => {
    part.addEventListener("click", function () {
        let currentPart = document.querySelector(`.${this.innerHTML}`);
        megaMenu.forEach(e => {
            e.classList.remove("active")
        });
        this.classList.add("active");
        parts.forEach(e => {
            if (e.className != currentPart.className) {
                e.style.display = "none";
            }
        })
        currentPart.style.display = "block";
    })
})
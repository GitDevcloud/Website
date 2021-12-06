const header = document.querySelector("header");
const menuItems = document.querySelectorAll(".nav-item a");
const sections = document.querySelectorAll(".page-section");
const navbar = document.querySelector("header");
const navDropdown = document.querySelector(".navbar-collapse");
const navToggler = document.querySelector(".navbar-toggler");
const menuIcon = document.querySelector(".navbar-icon");
const switcher = document.querySelector(".word-switcher");
const cardButtons = document.querySelectorAll(".card-button");
const cardChildren = document.querySelectorAll(".card-child");
const form = document.querySelector("form");
const formButton = document.querySelector(".mail-button");

// typewriter animation for main hero START
let typewriter = new Typewriter(switcher, {
    loop: false,
    cursor: "",
});

typewriter
    .typeString("MATION")
    .pauseFor(1500)
    .deleteAll()
    .typeString("MOBILE")
    .pauseFor(1500)
    .deleteAll()
    .typeString("MONEY")
    .pauseFor(1500)
    .deleteAll()
    .typeString("MYNT")
    .pauseFor(1500)
    .start();
//typewriter END

/* navigation bar onScroll animation */
let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (navDropdown.classList.contains("show")) return;
    if (prevScrollpos < currentScrollPos) {
        navbar.classList.add("nav-vanish");
    } else {
        navbar.classList.remove("nav-vanish");
    }
    prevScrollpos = currentScrollPos;
};

window.addEventListener("click", (e) => {
    // for collapsing the mobile menu
    if (
        (!e.target.closest("header") &&
            navDropdown.classList.contains("show")) ||
        e.target.classList.contains("nav-link")
    ) {
        let clickEvent = new Event("click");
        navToggler.dispatchEvent(clickEvent);
    }

    // for menu button animation
    let expanded = navToggler.getAttribute("aria-expanded");
    if (expanded == "true") {
        navToggler.classList.add("active");
        header.classList.add("active");
    } else {
        navToggler.classList.remove("active");
        header.classList.remove("active");
    }
});

//active menu item tracker
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
            section.classList.add("active");
            menuItems.forEach((a) => {
                a.classList.remove("active");
                if (a.hash.split("#")[1] == current) {
                    a.classList.add("active");
                }
            });
        } else if (window.scrollY > sectionTop + sectionHeight) {
            section.classList.remove("active");
        }
    });
});

cardButtons.forEach((cardButton, buttonIndex) => {
    cardButton.addEventListener("click", () => {
        if (!cardChildren[buttonIndex].classList.contains("active")) {
            cardChildren[buttonIndex].classList.add("active");
        } else {
            cardChildren[buttonIndex].classList.remove("active");
        }
    });
});

formButton.addEventListener("click", () => {
    const submissionMessage = document.createElement("div");
    submissionMessage.className =
        "message-parent col-lg-6 col-md-10 col-sm-12 p-md-4 p-3";
    submissionMessage.innerHTML =
        "<p class='form-message' data-aos='fade-left'>Thank you for your message!</p>";

    form.parentNode.replaceChild(submissionMessage, form);
});

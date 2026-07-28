/*==================================================
  MOBILE MENU
==================================================*/

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

/*==================================================
  CLOSE MOBILE MENU WHEN LINK IS CLICKED
==================================================*/

document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

/*==================================================
  TYPING EFFECT
==================================================*/

const typingElement = document.getElementById("typingText");
const words = [
    "Java Backend Developer",
    "Spring Boot Developer",
    "REST API Developer",
    "Problem Solver",
    "Full Stack Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    if (!deleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1700);
            return;
        }
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            deleting = false;
            wordIndex++;
            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }
    setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();

/*==================================================
  SCROLL REVEAL
==================================================*/

const revealElements = document.querySelectorAll(
    ".section, .project-card, .featured-project, .timeline-item"
);

function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;
    revealElements.forEach(element => {
        const top = element.getBoundingClientRect().top;
        if (top < trigger) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*==================================================
  ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

    const logo = document.querySelector(".logo");

    if (current === "home") {
        logo.classList.add("active");
    } else {
        logo.classList.remove("active");
    }
});


/*==================================================
  HEADER EFFECT
==================================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.style.background = "rgba(9,9,11,.90)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";
    }
    else {
        header.style.background = "rgba(9,9,11,.70)";
        header.style.boxShadow = "none";
    }
});

/*==================================================
  BACK TO TOP BUTTON
==================================================*/

const backButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backButton.classList.add("show");
    }
    else {
        backButton.classList.remove("show");
    }
});

backButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/*==================================================
  SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

/*==================================================
  OPTIONAL FOOTER YEAR
==================================================*/

const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

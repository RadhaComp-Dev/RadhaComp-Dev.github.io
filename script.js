
// =====================================
// RADHA COMPUTERS - JAVASCRIPT
// =====================================


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("active");

        const isOpen = navbar.classList.contains("active");

        menuToggle.innerHTML = isOpen
            ? '<i data-lucide="x"></i>'
            : '<i data-lucide="menu"></i>';

        if (window.lucide) {
            lucide.createIcons();
        }

    });

}


// CLOSE MENU AFTER CLICKING A LINK

if (navbar) {

    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");

            if (menuToggle) {
                menuToggle.innerHTML = '<i data-lucide="menu"></i>';

                if (window.lucide) {
                    lucide.createIcons();
                }
            }

        });

    });

}


// CLOSE MOBILE MENU WHEN WINDOW RESIZES

window.addEventListener("resize", function () {

    if (window.innerWidth > 768 && navbar) {

        navbar.classList.remove("active");

        if (menuToggle) {
            menuToggle.innerHTML = '<i data-lucide="menu"></i>';

            if (window.lucide) {
                lucide.createIcons();
            }
        }

    }

});


// UPDATE COPYRIGHT YEAR

const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// INITIALIZE ICONS

if (window.lucide) {
    lucide.createIcons();
}

// =====================================
// LET'S CHAT POPUP
// =====================================

const socialToggle = document.getElementById("social-toggle");
const socialOptions = document.getElementById("social-options");

if (socialToggle && socialOptions) {

    socialToggle.addEventListener("click", function () {

        const isOpen = socialOptions.classList.toggle("show");

        socialToggle.setAttribute("aria-expanded", isOpen);

    });

}



/* =========================================
   RADHA COMPUTERS - HERO SLIDER
========================================= */

(function () {

    function initializeHeroSlider() {

        const hero = document.querySelector(".new-hero");

        if (!hero) return;

        const slides = hero.querySelectorAll(".new-hero-slide");
        const dots = hero.querySelectorAll(".new-hero-dot");
        const prevBtn = hero.querySelector(".new-hero-prev");
        const nextBtn = hero.querySelector(".new-hero-next");
        const counter = hero.querySelector(".new-hero-current");

        if (slides.length < 1) return;

        let currentSlide = 0;
        let autoSlide;

        function showSlide(index) {

            currentSlide = (index + slides.length) % slides.length;

            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === currentSlide);
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === currentSlide);
            });

            if (counter) {
                counter.textContent =
                    String(currentSlide + 1).padStart(2, "0");
            }
        }

        function startAutoSlide() {
            clearInterval(autoSlide);

            autoSlide = setInterval(function () {
                showSlide(currentSlide + 1);
            }, 10000);
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", function () {
                showSlide(currentSlide - 1);
                startAutoSlide();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", function () {
                showSlide(currentSlide + 1);
                startAutoSlide();
            });
        }

        dots.forEach((dot, i) => {
            dot.addEventListener("click", function () {
                showSlide(i);
                startAutoSlide();
            });
        });

        showSlide(0);
        startAutoSlide();

    }

    window.addEventListener("load", function () {
    initializeHeroSlider();
});

})();

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const closeIcon = document.getElementById("close-icon");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
        closeIcon.style.display = "block";
    });

    closeIcon.addEventListener("click", function () {
        navLinks.classList.remove("show");
        closeIcon.style.display = "none";
    });

    const navItems = document.querySelectorAll('a[href^="#"]');

    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            navLinks.classList.remove("show");
            closeIcon.style.display = "none";
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        })
    })

    const btn = document.getElementById("view-projects");

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        document.getElementById("projects").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

    const scrollLink = document.getElementById("scroll");
    const heroSection = document.getElementById("hero");

    if (!scrollLink || !heroSection) return;

    window.addEventListener("scroll", function () {

        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition > heroHeight / 2) {
            scrollLink.classList.add("show");
        } else {
            scrollLink.classList.remove("show");
        }

    });

});
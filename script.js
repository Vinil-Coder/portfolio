document.addEventListener("DOMContentLoaded", function () {

    const navItems = document.querySelectorAll('a[href^="#"]');

    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
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

        console.log("scrolling...");
        
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition > heroHeight / 2) {
            scrollLink.classList.add("show");
        } else {
            scrollLink.classList.remove("show");
        }

    });

});
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

});
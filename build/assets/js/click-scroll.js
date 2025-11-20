// vanilla-js-click-scroll

const sectionArray = [1, 2, 3, 4, 5];

sectionArray.forEach((value, index) => {
    document.addEventListener("scroll", () => {
        const section = document.getElementById(`section_${value}`);
        if (!section) return;

        const offsetSection = section.offsetTop - 70;
        const docScroll = window.scrollY;

        if (docScroll + 1 >= offsetSection) {
            document.querySelectorAll(".navbar-nav .nav-item .nav-link").forEach(el => {
                el.classList.remove("active");
                el.classList.add("inactive");
            });

            const targetLink = document.querySelectorAll(".navbar-nav .nav-item .nav-link")[index];
            if (targetLink) {
                targetLink.classList.add("active");
                targetLink.classList.remove("inactive");
            }
        }
    });

    const clickElement = document.querySelectorAll(".click-scroll")[index];
    if (clickElement) {
        clickElement.addEventListener("click", (e) => {
            e.preventDefault();
            const targetSection = document.getElementById(`section_${value}`);
            if (targetSection) {
                const offsetClick = targetSection.offsetTop - 70;
                window.scrollTo({ top: offsetClick, behavior: "smooth" });
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".navbar-nav .nav-item .nav-link").forEach(el => {
        el.classList.add("inactive");
    });

    const firstLink = document.querySelector(".navbar-nav .nav-item .nav-link");
    if (firstLink) {
        firstLink.classList.add("active");
        firstLink.classList.remove("inactive");
    }
});

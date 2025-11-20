(() => {
    "use strict";

    // HERO SLIDE (requires replacing .backstretch with your own image slider logic)
    const heroImages = [
        "images/slideshow/white-wall-living-room-have-sofa-decoration-3d-rendering.jpg",
        "images/slideshow/interior-wall-mockup-with-sofa-cabinet-living-room-with-empty-white-wall-background-3d-rendering.jpg",
        "images/slideshow/wood-sideboard-living-room-interior-with-copy-space.jpg"
    ];

    let heroIndex = 0;
    const heroSlide = document.querySelector(".hero-slide");
    if (heroSlide) {
        const changeImage = () => {
            heroSlide.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
            heroIndex = (heroIndex + 1) % heroImages.length;
        };
        changeImage();
        setInterval(changeImage, 2000);
    }

    // REVIEWS CAROUSEL (replace OwlCarousel with a native carousel library or your own)
    // This would need a manual implementation or CSS scroll snap.

    // CUSTOM LINK SCROLL
    document.querySelectorAll(".smoothscroll").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const el = document.querySelector(link.getAttribute("href"));
            if (el) {
                const headerHeight = document.querySelector(".navbar")?.offsetHeight || 0;
                const offsetTop = el.offsetTop - headerHeight;
                window.scrollTo({ top: offsetTop, behavior: "smooth" });
            }
        });
    });

})();

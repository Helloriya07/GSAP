let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        gsap.to("#move", {
            x: "-200%",
            duration: 5,
            delay:0.5,
            repeat: -1,
            ease: "none"
        });
    } else {
        // Scrolling up
        gsap.to("#move", {
            x: "0%",
            duration: 5,
            delay:0.5,
            repeat: -1,
            ease: "none"
        });
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
});

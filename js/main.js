document.addEventListener("DOMContentLoaded", () => {

    /* PRELOADER */

    const preloader = document.querySelector(".preloader");

    window.addEventListener("load", () => {

        setTimeout(() => {
            preloader.classList.add("hidden");
        }, 1900);

    });


    /* CUSTOM CURSOR */

    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");

    let mouseX = 0;
    let mouseY = 0;

    let followerX = 0;
    let followerY = 0;

    document.addEventListener("mousemove", (event) => {

        mouseX = event.clientX;
        mouseY = event.clientY;

        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;

    });


    function animateCursor() {

        followerX += (mouseX - followerX) * 0.12;
        followerY += (mouseY - followerY) * 0.12;

        follower.style.left = `${followerX}px`;
        follower.style.top = `${followerY}px`;

        requestAnimationFrame(animateCursor);

    }

    animateCursor();


    /* CURSOR INTERACTION */

    const interactiveElements =
        document.querySelectorAll("a, button");

    interactiveElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {

            follower.style.width = "55px";
            follower.style.height = "55px";

        });

        element.addEventListener("mouseleave", () => {

            follower.style.width = "32px";
            follower.style.height = "32px";

        });

    });


    /* SMOOTH NAVIGATION */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetID =
                link.getAttribute("href");

            if (targetID === "#") return;

            const target =
                document.querySelector(targetID);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });


    /* PARALLAX */

    const orb =
        document.querySelector(".hero-orb");

    window.addEventListener("scroll", () => {

        const scrollY = window.scrollY;

        if (orb) {

            orb.style.transform =
                `translateY(calc(-50% + ${scrollY * 0.12}px))`;

        }

    });

});

/* =========================================================
   MUHAMMAD FATHI DURAINI BIN SAHAIMI
   ACADEMIC ARCHIVE
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       01. PRELOADER
    ====================================================== */

    const preloader = document.getElementById("preloader");
    const preloaderNumber = document.querySelector(".preloader-number");

    let progress = 0;

    const loadingInterval = setInterval(() => {

        progress += Math.floor(Math.random() * 12) + 4;

        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);

            setTimeout(() => {
                preloader.classList.add("loaded");
            }, 450);
        }

        if (preloaderNumber) {
            preloaderNumber.textContent =
                String(progress).padStart(2, "0");
        }

    }, 80);


    /* =====================================================
       02. HEADER SCROLL
    ====================================================== */

    const header = document.getElementById("site-header");

    function updateHeader() {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });

    updateHeader();


    /* =====================================================
       03. MOBILE MENU
    ====================================================== */

    const menuToggle =
        document.getElementById("menu-toggle");

    const mobileNavigation =
        document.getElementById("mobile-navigation");

    const mobileLinks =
        document.querySelectorAll(".mobile-navigation a");

    function toggleMenu() {

        const isOpen =
            mobileNavigation.classList.contains("open");

        if (isOpen) {

            mobileNavigation.classList.remove("open");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove("menu-open");

        } else {

            mobileNavigation.classList.add("open");
            menuToggle.classList.add("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );

            document.body.classList.add("menu-open");

        }

    }

    if (menuToggle) {
        menuToggle.addEventListener(
            "click",
            toggleMenu
        );
    }


    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileNavigation.classList.remove("open");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove("menu-open");

        });

    });


    /* =====================================================
       04. CUSTOM CURSOR
    ====================================================== */

    const cursorDot =
        document.getElementById("cursor-dot");

    const cursorRing =
        document.getElementById("cursor-ring");

    const supportsHover =
        window.matchMedia("(hover: hover)").matches;

    if (supportsHover && cursorDot && cursorRing) {

        let mouseX = 0;
        let mouseY = 0;

        let ringX = 0;
        let ringY = 0;

        window.addEventListener("mousemove", (event) => {

            mouseX = event.clientX;
            mouseY = event.clientY;

            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;

        });

        function animateCursor() {

            ringX += (mouseX - ringX) * 0.14;
            ringY += (mouseY - ringY) * 0.14;

            cursorRing.style.left = `${ringX}px`;
            cursorRing.style.top = `${ringY}px`;

            requestAnimationFrame(
                animateCursor
            );

        }

        animateCursor();


        const interactiveElements =
            document.querySelectorAll(
                "a, button, .knowledge-node, .archive-item"
            );

        interactiveElements.forEach(element => {

            element.addEventListener(
                "mouseenter",
                () => {
                    cursorRing.classList.add("hover");
                }
            );

            element.addEventListener(
                "mouseleave",
                () => {
                    cursorRing.classList.remove("hover");
                }
            );

        });

    }


    /* =====================================================
       05. SCROLL REVEAL
    ====================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-header, " +
            ".introduction-copy, " +
            ".archive-item, " +
            ".research-layout, " +
            ".research-placeholder, " +
            ".knowledge-heading, " +
            ".knowledge-node, " +
            ".profile-name, " +
            ".profile-details, " +
            ".closing-content"
        );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -60px 0px"
            }
        );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* =====================================================
       06. STAGGER ARCHIVE ITEMS
    ====================================================== */

    const archiveItems =
        document.querySelectorAll(
            ".archive-item"
        );

    archiveItems.forEach((item, index) => {

        item.style.transitionDelay =
            `${index * 70}ms`;

    });


    /* =====================================================
       07. KNOWLEDGE NODE PARALLAX
    ====================================================== */

    const knowledgeMap =
        document.querySelector(".knowledge-map");

    const knowledgeNodes =
        document.querySelectorAll(
            ".knowledge-node"
        );

    if (knowledgeMap && supportsHover) {

        knowledgeMap.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    knowledgeMap.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const moveX =
                    (x - centerX) / centerX;

                const moveY =
                    (y - centerY) / centerY;

                knowledgeNodes.forEach(
                    (node, index) => {

                        const strength =
                            (index + 1) * 3;

                        node.style.transform =
                            `translate(
                                ${moveX * strength}px,
                                ${moveY * strength}px
                            )`;

                    }
                );

            }
        );


        knowledgeMap.addEventListener(
            "mouseleave",
            () => {

                knowledgeNodes.forEach(node => {
                    node.style.transform = "";
                });

            }
        );

    }


    /* =====================================================
       08. HERO ORBIT PARALLAX
    ====================================================== */

    const hero =
        document.querySelector(".hero");

    const orbitOne =
        document.querySelector(".hero-orbit-one");

    const orbitTwo =
        document.querySelector(".hero-orbit-two");

    if (hero && supportsHover) {

        hero.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    hero.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const moveX =
                    (x / rect.width - 0.5);

                const moveY =
                    (y / rect.height - 0.5);

                if (orbitOne) {

                    orbitOne.style.transform =
                        `translate(
                            ${moveX * 18}px,
                            ${moveY * 12}px
                        )
                        rotate(-18deg)`;

                }

                if (orbitTwo) {

                    orbitTwo.style.transform =
                        `translate(
                            ${moveX * -12}px,
                            ${moveY * -8}px
                        )
                        rotate(-14deg)`;

                }

            }
        );

    }


    /* =====================================================
       09. ACTIVE NAVIGATION
    ====================================================== */

    const navigationLinks =
        document.querySelectorAll(
            ".main-navigation a[href^='#']"
        );

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove("active");

            const target =
                link.getAttribute("href");

            if (
                target === `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();


    /* =====================================================
       10. SMOOTH INTERNAL LINKS
    ====================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    internalLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetID =
                    link.getAttribute("href");

                if (
                    !targetID ||
                    targetID === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetID);

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


    /* =====================================================
       11. IMAGE LAZY LOADING
    ====================================================== */

    const images =
        document.querySelectorAll("img");

    images.forEach(image => {

        if (!image.hasAttribute("loading")) {
            image.setAttribute(
                "loading",
                "lazy"
            );
        }

    });


    /* =====================================================
       12. KEYBOARD ESCAPE
    ====================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                mobileNavigation.classList.contains(
                    "open"
                )
            ) {

                mobileNavigation.classList.remove(
                    "open"
                );

                menuToggle.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            }

        }
    );


    /* =====================================================
       13. PAGE READY
    ====================================================== */

    document.documentElement.classList.add(
        "page-ready"
    );

});

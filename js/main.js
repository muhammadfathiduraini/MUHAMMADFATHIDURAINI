document.addEventListener("DOMContentLoaded", () => {


    /* =========================================
       LOADER
    ========================================== */

    const loader =
        document.querySelector(".loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("loaded");

        }, 1800);

    });


    /* =========================================
       REVEAL ON SCROLL
    ========================================== */

    const revealElements =
        document.querySelectorAll(
            ".archive-heading, .archive-description, " +
            ".research-intro, .research-item, " +
            ".knowledge-copy, .knowledge-map, " +
            ".profile-heading, .profile-text, " +
            ".profile-index"
        );


    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "is-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });


    /* =========================================
       MAGNETIC ARCHIVE BUTTON
    ========================================== */

    const archiveLink =
        document.querySelector(".archive-link");


    if (archiveLink) {

        archiveLink.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    archiveLink.getBoundingClientRect();

                const x =
                    event.clientX - rect.left - rect.width / 2;

                const y =
                    event.clientY - rect.top - rect.height / 2;

                archiveLink.style.transform =
                    `translate(${x * 0.08}px, ${y * 0.08}px)`;

            }
        );


        archiveLink.addEventListener(
            "mouseleave",
            () => {

                archiveLink.style.transform =
                    "translate(0, 0)";

            }
        );

    }


    /* =========================================
       KNOWLEDGE NODES
    ========================================== */

    const nodes =
        document.querySelectorAll(".map-node");


    nodes.forEach((node) => {

        node.addEventListener(
            "mouseenter",
            () => {

                node.style.zIndex = "10";

            }
        );


        node.addEventListener(
            "mouseleave",
            () => {

                node.style.zIndex = "2";

            }
        );

    });


    /* =========================================
       NAVIGATION ACTIVE STATE
    ========================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".navigation a");


    window.addEventListener(
        "scroll",
        () => {

            let current = "";

            sections.forEach((section) => {

                const sectionTop =
                    section.offsetTop - 200;

                if (
                    window.scrollY >= sectionTop
                ) {

                    current =
                        section.getAttribute("id");

                }

            });


            navLinks.forEach((link) => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    `#${current}`
                ) {

                    link.classList.add("active");

                }

            });

        }
    );


    /* =========================================
       SMOOTH LINKS
    ========================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

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

                }
            );

        });

});

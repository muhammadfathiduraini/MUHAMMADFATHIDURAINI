@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&family=Manrope:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@400;500&display=swap');


:root {

    --paper: #f3f0e8;
    --paper-light: #faf8f2;

    --navy: #142238;
    --navy-soft: #26364d;

    --burgundy: #7a3941;
    --terracotta: #a76555;

    --grey: #77756f;
    --line: rgba(20, 34, 56, 0.18);

    --sans: "Manrope", sans-serif;
    --serif: "Playfair Display", serif;
    --mono: "DM Mono", monospace;

}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {

    background: var(--paper);
    color: var(--navy);

    font-family: var(--sans);

    overflow-x: hidden;

}


body::selection {

    background: var(--navy);
    color: var(--paper);

}


a {

    color: inherit;
    text-decoration: none;

}


button {

    font: inherit;

}


/* =========================================
   LOADER
========================================= */

.loader {

    position: fixed;
    inset: 0;

    z-index: 9999;

    background: var(--navy);
    color: var(--paper);

    display: flex;
    justify-content: center;
    align-items: center;

    transition:
        opacity 0.9s ease,
        visibility 0.9s ease;

}


.loader.loaded {

    opacity: 0;
    visibility: hidden;

}


.loader-inner {

    width: min(420px, 80vw);

}


.loader-label {

    font-family: var(--mono);
    font-size: 9px;

    letter-spacing: 0.2em;

}


.loader-line {

    height: 1px;

    background: rgba(243, 240, 232, 0.25);

    margin: 20px 0;

}


.loader-line span {

    display: block;

    width: 0;
    height: 100%;

    background: var(--paper);

    animation: loaderProgress 1.7s ease forwards;

}


.loader-number {

    font-family: var(--mono);
    font-size: 9px;

    color: rgba(243, 240, 232, 0.55);

}


@keyframes loaderProgress {

    from {
        width: 0;
    }

    to {
        width: 100%;
    }

}


/* =========================================
   HEADER
========================================= */

.site-header {

    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    padding: 25px 5vw;

    z-index: 100;

    display: flex;

    justify-content: space-between;
    align-items: center;

    mix-blend-mode: multiply;

}


.logo {

    font-family: var(--mono);

    font-size: 12px;

    letter-spacing: 0.12em;

}


.navigation {

    display: flex;

    gap: 35px;

}


.navigation a {

    font-family: var(--mono);

    font-size: 9px;

    text-transform: uppercase;

    letter-spacing: 0.12em;

    position: relative;

}


.navigation a::after {

    content: "";

    position: absolute;

    left: 0;
    bottom: -6px;

    width: 0;
    height: 1px;

    background: var(--burgundy);

    transition: width 0.35s ease;

}


.navigation a:hover::after {

    width: 100%;

}


.menu-toggle {

    display: none;

    border: 0;
    background: transparent;

}


/* =========================================
   HERO
========================================= */

.hero {

    min-height: 100vh;

    padding: 140px 5vw 35px;

    position: relative;

    display: flex;

    flex-direction: column;

    justify-content: space-between;

    overflow: hidden;

}


.hero::before {

    content: "";

    position: absolute;

    width: 50vw;
    height: 50vw;

    max-width: 700px;
    max-height: 700px;

    right: -10vw;
    top: 12vh;

    border-radius: 50%;

    border: 1px solid var(--line);

}


.hero::after {

    content: "";

    position: absolute;

    width: 35vw;
    height: 35vw;

    right: 0;
    top: 20vh;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(122, 57, 65, 0.10),
            transparent 70%
        );

}


.hero-topline {

    display: flex;

    justify-content: space-between;

    font-family: var(--mono);

    font-size: 9px;

    letter-spacing: 0.14em;

    color: var(--grey);

}


.hero-main {

    position: relative;

    z-index: 2;

    display: grid;

    grid-template-columns: 1.3fr 0.7fr;

    align-items: center;

    gap: 5vw;

}


.hero-intro {

    max-width: 1000px;

}


.small-label {

    font-family: var(--mono);

    font-size: 9px;

    letter-spacing: 0.15em;

    color: var(--burgundy);

    margin-bottom: 35px;

}


.hero h1 {

    font-size: clamp(70px, 10vw, 155px);

    line-height: 0.82;

    letter-spacing: -0.075em;

    font-weight: 500;

}


.hero h1 span {

    display: block;

    font-family: var(--serif);

    font-style: italic;

    font-weight: 400;

    color: var(--burgundy);

    margin-left: 13vw;

}


.hero-rule {

    width: 140px;

    height: 1px;

    background: var(--navy);

    margin: 45px 0 25px;

}


.hero-summary {

    max-width: 440px;

    font-size: 14px;

    line-height: 1.8;

    color: var(--grey);

}


.archive-link {

    display: inline-flex;

    align-items: center;

    gap: 30px;

    margin-top: 35px;

    padding-bottom: 10px;

    border-bottom: 1px solid var(--navy);

    font-family: var(--mono);

    font-size: 9px;

    letter-spacing: 0.15em;

    transition: gap 0.4s ease;

}


.archive-link:hover {

    gap: 55px;

}


.archive-arrow {

    font-size: 18px;

}


.hero-visual {

    height: 520px;

    display: flex;

    justify-content: center;
    align-items: center;

}


.visual-frame {

    width: 310px;
    height: 400px;

    border: 1px solid var(--line);

    position: relative;

    transform: rotate(3deg);

    transition: transform 0.7s ease;

}


.visual-frame:hover {

    transform: rotate(0deg) scale(1.02);

}


.visual-frame::before {

    content: "";

    position: absolute;

    inset: 18px;

    border: 1px solid var(--line);

}


.visual-number {

    position: absolute;

    top: 35px;
    left: 35px;

    font-family: var(--mono);

    font-size: 10px;

    color: var(--burgundy);

}


.visual-title {

    position: absolute;

    left: 35px;
    bottom: 40px;

    font-size: 30px;

    line-height: 0.95;

    letter-spacing: -0.04em;

}


.visual-circle {

    position: absolute;

    width: 130px;
    height: 130px;

    border-radius: 50%;

    border: 1px solid var(--burgundy);

    right: 35px;
    top: 100px;

}


.hero-bottom {

    position: relative;
    z-index: 2;

    display: flex;

    justify-content: space-between;

    font-family: var(--mono);

    font-size: 8px;

    letter-spacing: 0.15em;

    color: var(--grey);

}


/* =========================================
   GENERAL
========================================= */

section:not(.hero) {

    padding: 150px 5vw;

}


.section-index {

    font-family: var(--mono);

    font-size: 10px;

    color: var(--burgundy);

}


.section-label {

    margin-top: 15px;

    font-family: var(--mono);

    font-size: 9px;

    letter-spacing: 0.16em;

    color: var(--grey);

}


/* =========================================
   ARCHIVE
========================================= */

.archive-section {

    min-height: 850px;

    background: var(--navy);

    color: var(--paper);

    display: grid;

    grid-template-columns: 80px 1fr 1fr;

    grid-template-rows: auto 1fr auto;

    column-gap: 5vw;

}


.archive-section .section-label {

    color: rgba(243, 240, 232, 0.5);

}


.archive-heading {

    grid-column: 2 / 4;

    align-self: center;

    max-width: 950px;

}


.archive-heading h2 {

    font-size: clamp(60px, 8vw, 125px);

    line-height: 0.9;

    letter-spacing: -0.07em;

    font-weight: 400;

}


.archive-heading em {

    font-family: var(--serif);

    color: #d39b8b;

}


.archive-description {

    grid-column: 2;

    align-self: end;

    max-width: 480px;

}


.archive-description p {

    font-size: 13px;

    line-height: 1.9;

    color: rgba(243, 240, 232, 0.65);

    margin-bottom: 20px;

}


.archive-statement {

    grid-column: 3;

    align-self: end;

    display: flex;

    flex-direction: column;

    gap: 12px;

    font-family: var(--mono);

    font-size: 9px;

    letter-spacing: 0.12em;

    color: rgba(243, 240, 232, 0.45);

}


/* =========================================
   RESEARCH
========================================= */

.research-section {

    background: var(--paper-light);

}


.research-intro {

    display: grid;

    grid-template-columns: 1fr 0.6fr;

    gap: 8vw;

    margin-top: 80px;

    margin-bottom: 100px;

}


.research-intro h2 {

    font-size: clamp(70px, 10vw, 150px);

    line-height: 0.82;

    letter-spacing: -0.075em;

    font-weight: 500;

}


.research-intro h2 em {

    font-family: var(--serif);

    color: var(--burgundy);

    font-weight: 400;

}


.research-intro p {

    align-self: end;

    max-width: 380px;

    font-size: 13px;

    line-height: 1.9;

    color: var(--grey);

}


.research-list {

    border-top: 1px solid var(--line);

}


.research-item {

    display: grid;

    grid-template-columns: 100px 1fr 60px;

    gap: 30px;

    align-items: center;

    padding: 38px 0;

    border-bottom: 1px solid var(--line);

    transition:
        padding 0.4s ease,
        background 0.4s ease;

}


.research-item:hover {

    padding-left: 25px;
    padding-right: 25px;

    background: var(--paper);

}


.research-number {

    font-family: var(--mono);

    font-size: 10px;

    color: var(--burgundy);

}


.research-type {

    font-family: var(--mono);

    font-size: 8px;

    letter-spacing: 0.14em;

    color: var(--grey);

}


.research-info h3 {

    margin: 9px 0;

    font-size: 27px;

    font-weight: 500;

    letter-spacing: -0.03em;

}


.research-info p {

    font-size: 12px;

    color: var(--grey);

}


.research-action {

    font-size: 25px;

    transition: transform 0.4s ease;

}


.research-item:hover .research-action {

    transform: translateX(8px);

}


/* =========================================
   KNOWLEDGE
========================================= */

.knowledge-section {

    background: #e7e1d5;

}


.knowledge-grid {

    margin-top: 100px;

    display: grid;

    grid-template-columns: 0.8fr 1.2fr;

    min-height: 650px;

}


.knowledge-copy {

    align-self: center;

    max-width: 500px;

}


.knowledge-copy h2 {

    font-size: clamp(65px, 8vw, 120px);

    line-height: 0.85;

    letter-spacing: -0.07em;

    font-weight: 500;

}


.knowledge-copy h2 em {

    font-family: var(--serif);

    color: var(--burgundy);

    font-weight: 400;

}


.knowledge-copy p {

    margin-top: 35px;

    max-width: 400px;

    color: var(--grey);

    line-height: 1.8;

    font-size: 13px;

}


.knowledge-button {

    display: inline-flex;

    align-items: center;

    gap: 25px;

    margin-top: 35px;

    padding: 14px 18px;

    border: 1px solid var(--navy);

    font-family: var(--mono);

    font-size: 8px;

    letter-spacing: 0.13em;

    transition:
        background 0.3s ease,
        color 0.3s ease;

}


.knowledge-button:hover {

    background: var(--navy);

    color: var(--paper);

}


.knowledge-map {

    position: relative;

    min-height: 600px;

}


.map-node {

    position: absolute;

    display: flex;

    justify-content: center;
    align-items: center;

    text-align: center;

    border-radius: 50%;

    border: 1px solid var(--navy);

    font-family: var(--mono);

    font-size: 8px;

    letter-spacing: 0.08em;

    background: rgba(243, 240, 232, 0.25);

    z-index: 2;

    transition:
        transform 0.5s ease,
        background 0.5s ease;

}


.map-node:hover {

    transform: scale(1.08);

    background: var(--paper);

}


.central {

    width: 190px;
    height: 190px;

    left: 45%;
    top: 43%;

    transform: translate(-50%, -50%);

}


.node-a {

    width: 85px;
    height: 85px;

    left: 12%;
    top: 15%;

}


.node-b {

    width: 125px;
    height: 125px;

    right: 4%;
    top: 16%;

}


.node-c {

    width: 75px;
    height: 75px;

    left: 10%;
    bottom: 15%;

}


.node-d {

    width: 120px;
    height: 120px;

    right: 12%;
    bottom: 10%;

}


.map-line {

    position: absolute;

    height: 1px;

    background: rgba(20, 34, 56, 0.3);

    transform-origin: left center;

}


.line-a {

    width: 250px;

    left: 19%;
    top: 30%;

    transform: rotate(24deg);

}


.line-b {

    width: 220px;

    left: 45%;
    top: 35%;

    transform: rotate(-20deg);

}


.line-c {

    width: 260px;

    left: 17%;
    top: 67%;

    transform: rotate(-25deg);

}


.line-d {

    width: 240px;

    left: 46%;
    top: 66%;

    transform: rotate(23deg);

}


/* =========================================
   PROFILE
========================================= */

.profile-section {

    background: var(--paper-light);

}


.profile-layout {

    display: grid;

    grid-template-columns: 1fr 0.7fr;

    gap: 10vw;

    margin-top: 100px;

}


.profile-heading p {

    font-family: var(--mono);

    font-size: 9px;

    color: var(--burgundy);

    letter-spacing: 0.14em;

    margin-bottom: 25px;

}


.profile-heading h2 {

    font-size: clamp(65px, 8vw, 120px);

    line-height: 0.84;

    letter-spacing: -0.07em;

    font-weight: 500;

}


.profile-heading em {

    font-family: var(--serif);

    color: var(--burgundy);

    font-weight: 400;

}


.profile-text {

    align-self: end;

}


.profile-text p {

    font-size: 14px;

    line-height: 1.9;

    color: var(--grey);

}


.profile-link {

    display: inline-flex;

    gap: 25px;

    margin-top: 35px;

    padding-bottom: 9px;

    border-bottom: 1px solid var(--navy);

    font-family: var(--mono);

    font-size: 8px;

    letter-spacing: 0.14em;

}


.profile-index {

    margin-top: 130px;

    border-top: 1px solid var(--line);

}


.profile-index div {

    display: grid;

    grid-template-columns: 80px 1fr;

    padding: 20px 0;

    border-bottom: 1px solid var(--line);

    font-family: var(--mono);

    font-size: 9px;

    letter-spacing: 0.13em;

}


.profile-index span {

    color: var(--burgundy);

}


/* =========================================
   CLOSING
========================================= */

.closing-section {

    min-height: 80vh;

    background: var(--burgundy);

    color: var(--paper);

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    text-align: center;

}


.closing-mark {

    font-family: var(--mono);

    font-size: 10px;

    letter-spacing: 0.2em;

    margin-bottom: 50px;

}


.closing-section h2 {

    font-size: clamp(60px, 10vw, 150px);

    line-height: 0.85;

    letter-spacing: -0.08em;

    font-weight: 500;

}


.closing-section h2 em {

    font-family: var(--serif);

    font-weight: 400;

}


.closing-section p {

    max-width: 450px;

    margin-top: 40px;

    font-size: 13px;

    line-height: 1.8;

    color: rgba(243, 240, 232, 0.7);

}


/* =========================================
   FOOTER
========================================= */

.site-footer {

    background: var(--navy);

    color: var(--paper);

    padding: 80px 5vw 30px;

}


.footer-top {

    display: flex;

    justify-content: space-between;

    gap: 40px;

}


.footer-name {

    font-size: clamp(40px, 6vw, 90px);

    line-height: 0.85;

    letter-spacing: -0.065em;

}


.footer-navigation {

    display: flex;

    flex-direction: column;

    gap: 12px;

}


.footer-navigation a {

    font-family: var(--mono);

    font-size: 9px;

    color: rgba(243, 240, 232, 0.6);

    letter-spacing: 0.1em;

}


.footer-bottom {

    margin-top: 100px;

    padding-top: 20px;

    border-top: 1px solid rgba(243, 240, 232, 0.18);

    display: flex;

    justify-content: space-between;

    font-family: var(--mono);

    font-size: 8px;

    letter-spacing: 0.14em;

    color: rgba(243, 240, 232, 0.45);

}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 850px) {


    .site-header {

        padding: 20px 22px;

    }


    .navigation {

        display: none;

    }


    .menu-toggle {

        display: flex;

        flex-direction: column;

        gap: 5px;

    }


    .menu-toggle span {

        display: block;

        width: 25px;
        height: 1px;

        background: var(--navy);

    }


    .hero {

        padding: 120px 22px 30px;

    }


    .hero-topline span:last-child {

        display: none;

    }


    .hero-main {

        grid-template-columns: 1fr;

    }


    .hero h1 {

        font-size: clamp(58px, 16vw, 100px);

    }


    .hero h1 span {

        margin-left: 18vw;

    }


    .hero-visual {

        display: none;

    }


    section:not(.hero) {

        padding: 100px 22px;

    }


    .archive-section {

        display: block;

        min-height: auto;

    }


    .archive-heading {

        margin-top: 80px;

    }


    .archive-description {

        margin-top: 80px;

    }


    .archive-statement {

        margin-top: 60px;

    }


    .research-intro {

        grid-template-columns: 1fr;

        margin-top: 70px;

    }


    .research-item {

        grid-template-columns: 45px 1fr 30px;

        gap: 15px;

    }


    .research-item:hover {

        padding-left: 10px;
        padding-right: 10px;

    }


    .research-info h3 {

        font-size: 20px;

    }


    .knowledge-grid {

        grid-template-columns: 1fr;

    }


    .knowledge-map {

        margin-top: 80px;

        min-height: 500px;

    }


    .profile-layout {

        grid-template-columns: 1fr;

        margin-top: 80px;

    }


    .profile-text {

        margin-top: 40px;

    }


    .profile-index {

        margin-top: 80px;

    }


    .footer-top {

        flex-direction: column;

    }


    .footer-navigation {

        margin-top: 50px;

    }


    .footer-bottom {

        flex-direction: column;

        gap: 12px;

    }

}

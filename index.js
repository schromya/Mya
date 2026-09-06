import {buildHomePage} from "./pages/home.js"
import {buildResumePage} from "./pages/resume.js"
import {setupGame} from "./gameLogic.js"
import { loadSVG, clearURL } from "./utils.js";



document.addEventListener("DOMContentLoaded", () => {


    //////////////////////// Setup page on first load ////////////////////////
    // Navigate if link has #resumeXXX and load HTML
    if (window.location.hash.toLowerCase().includes("resume")) {
        buildResumePage("body");
        // Scroll to section
        requestAnimationFrame(() => {
            document.getElementById(window.location.hash.slice(1))?.scrollIntoView({block:"start"});
        });
    } else {
        buildHomePage("body");
    }


    // Start game
    setupGame();

    loadSVG("emailSVG", "./assets/icons/email.svg");
    loadSVG("githubSVG", "./assets/icons/github.svg");
    loadSVG("linkedinSVG", "./assets/icons/linkedin.svg");


    //////////////////////// Setup nav listeners ////////////////////////
    const homeNavBtn = document.getElementById('homeNav');
    const resumeNavBtn = document.getElementById('resumeNav');
    
    resumeNavBtn.addEventListener('click', () => {
        buildResumePage("body");
        clearURL();
    });

    homeNavBtn.addEventListener('click', () => {
        buildHomePage("body");
        clearURL();
    });

    
});




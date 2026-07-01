import {buildHomePage} from "./pages/home.js"
import {buildResumePage} from "./pages/resume.js"
import {setupGame} from "./gameLogic.js"
import { loadSVG } from "./utils.js";



document.addEventListener("DOMContentLoaded", () => {


    //////////////////////// Setup page on first load ////////////////////////
    // Write HTML
    buildHomePage("body");


    // Start game
    setupGame();

    loadSVG("emailSVG", "./static/icons/email.svg")


    //////////////////////// Setup nav listeners ////////////////////////
    const homeNavBtn = document.getElementById('homeNav');
    const resumeNavBtn = document.getElementById('resumeNav');
    
    resumeNavBtn.addEventListener('click', () => {
        buildResumePage("body");
    });

    homeNavBtn.addEventListener('click', () => {
        buildHomePage("body");
    });
    
    
});


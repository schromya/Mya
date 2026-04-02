import {buildHomePage} from "./pages/home.js"
import {buildResumePage} from "./pages/resume.js"
import {experienceData, projectData, educationData, awardData} from "./data.js"
import {populateData,populateSkillsTable}  from "./dataInjest.js"
import {setupGame} from "./gameLogic.js"




document.addEventListener("DOMContentLoaded", () => {




    //////////////////////// Setup page on first load ////////////////////////
    // Write HTML
    buildHomePage("body");

    // Populate data
    populateData(experienceData, "experience");
    populateData(projectData, "projects");
    populateData(educationData, "education");
    populateData(awardData, "awards");
    populateSkillsTable(  [experienceData["experience"], projectData["projects"]],
                        "skillsTable");

    // Start game
    setupGame();


    //////////////////////// Setup nav listeners ////////////////////////

    // buildResumePage("body");
    
});
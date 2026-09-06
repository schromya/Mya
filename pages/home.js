import {experienceData, projectData, educationData, awardData} from "../data.js"
import {populateData,populateSkillsTable}  from "../dataInjest.js"

/**
 * Builds the home page.
 * @param {string} bodyId DOM ID of body to be overwritten with homepage
 *      HTML
 */
export function buildHomePage(bodyId) {

    buildBody(bodyId);
    populateData(experienceData, "experience");
    populateData(projectData, "projects");
    populateData(educationData, "education");
    populateData(awardData, "awards");
    populateSkillsTable(  [experienceData["experience"], projectData["projects"]],
                        "skillsTable");



}


/**
 * Builds the body of the home page.
 * @param {string} bodyId DOM ID of body to be overwritten with homepage
 *      HTML
 */
function buildBody(bodyId) {
    
    let body = document.getElementById(bodyId);
    body.innerHTML = ""; // Clear existing data
    
    body.innerHTML = /*html*/ `

        <div class='text-white content-scroll static-height'>
            <!------------------------------------- ABOUT ME -------------------------------------->
            <div class="  m-2 min-static-height">

            <div class="speech-bubble speech-bubble-triangle">
                <div class="pixel-card">
                    <div class="text-2xl text-bold font-pixel"> Hey there!</div>

                    <div class="text-lg ">
                        Welcome to Mya's personal website, where you can hop around, just like me, 
                        your friendly webpage frog!
                        Mya is a <b>robotics engineer</b> who is currently working on 
                        <span class="text-yellow"><b>embedded robot software at 
                        Trossen Robotics</b></span>. Check out her experience below.
                        Before you go, be sure to play a game with me at the bottom of the page.
                    </div>
                </div>
            </div>


                <div class=" content-right">
                    <img src="assets/FrogTalk.png" class="pb-2">
                </div>
            </div>


  


            <!-------------------------------------- PORTFOLIO ------------------------------------>
            <div class="pixel-card text-md ">
                <!-------------------------------------- NAV -------------------------------------->
                <div class=" content-center content-stick-top pt-2 pb-1">

                    <a href="#experienceSection" class="text-white font-pixel">Experience</a> •
                    <a href="#projectsSection" class="text-white font-pixel">Projects</a> •
                    <a href="#educationSection" class="text-white font-pixel">Education</a> •
                    <a href="#awardsSection" class="text-white font-pixel">Awards</a>
                </div>
                <br><br>

                
                <!------------------------------------ CONTENT ------------------------------------>

                <!------------------------------------- GRAPHS ------------------------------------>
                <span class=" text-2xl text-bold font-pixel pt-4 pl-2 " id="overviewSection"> Overview </span>

                <div class=" content-flex pl-4 pb-5">

                    <div class="bg-white  mt-2 border-rounded-sm">
                        <table class="text-gray" id="skillsTable"></table>

                        <!--Axis-->
                        <div class="content-center pb-1">
                            <span class="text-gray pb-1">Project Count</span>
                        </div>
                    </div>
                </div>

                <div class=" pl-2 pr-2">
                    <!-------------------------------- EXPERIENCE --------------------------------->
                    <span class=" text-2xl text-bold font-pixel pt-5" id="experienceSection"> 
                        Experience 
                    </span>
                    <ul id="experience" class="text-sm p-0"></ul>

                    <!---------------------------------- PROJECTS --------------------------------->
                    <span class=" text-2xl text-bold font-pixel pt-5" id="projectsSection"> 
                        Projects & Leadership 
                    </span>
                    <ul id="projects" class="text-sm p-0"></ul>

                    <!---------------------------------- EDUCATION -------------------------------->
                    <span class="text-2xl text-bold font-pixel pt-5" id="educationSection"> Education </span>
                    <ul id="education" class="text-sm p-0"></ul>

                    <!-------------------------------- ACHIEVEMENTS ------------------------------->
                    <span class="text-2xl text-bold font-pixel pt-5" id="awardsSection"> 
                        Awards & Competitions
                    </span>
                    <ul id="awards" class="text-sm p-0"></ul>

                </div>
            </div>


        </div>
    `
}
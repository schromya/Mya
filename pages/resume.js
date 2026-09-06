import {experienceData, projectData, educationData, awardData} from "../data.js"
import {populateData,populateSkillsTable}  from "../dataInjest.js"

/**
 * Build the resume page
 * @param {string} bodyId DOM ID of body to be overwritten with homepage
 *      HTML
 */
export function buildResumePage(bodyId) {

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

        <!-------------------------------------- PORTFOLIO ------------------------------------>
        <div class="pixel-card text-md">
            <!-------------------------------------- NAV -------------------------------------->
            <div class=" content-center content-stick-top pt-2 pb-1">

                <a href="#resumeExperience" class="text-white font-pixel">Experience</a> •
                <a href="#resumeProject" class="text-white font-pixel">Projects</a> •
                <a href="#resumeEducation" class="text-white font-pixel">Education</a> •
                <a href="#resumeAwards" class="text-white font-pixel">Awards</a>
            </div>
            <br><br>

            
            <!------------------------------------ CONTENT ------------------------------------>

            <!------------------------------------- GRAPHS ------------------------------------>
            <span class=" text-2xl text-bold font-pixel pt-4 pl-2 " id="resumeExperience"> Overview </span>

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
                <span class=" text-2xl text-bold font-pixel pt-5" id="resumeProject"> 
                    Experience 
                </span>
                <ul id="experience" class="text-sm p-0"></ul>

                <!---------------------------------- PROJECTS --------------------------------->
                <span class=" text-2xl text-bold font-pixel pt-5" id="projectsSection"> 
                    Projects & Leadership 
                </span>
                <ul id="projects" class="text-sm p-0"></ul>

                <!---------------------------------- EDUCATION -------------------------------->
                <span class="text-2xl text-bold font-pixel pt-5" id="resumeEducation"> Education </span>
                <ul id="education" class="text-sm p-0"></ul>

                <!-------------------------------- ACHIEVEMENTS ------------------------------->
                <span class="text-2xl text-bold font-pixel pt-5" id="resumeAwards"> 
                    Awards & Competitions
                </span>
                <ul id="awards" class="text-sm p-0"></ul>

            </div>
        </div>


    </div>
    `
}
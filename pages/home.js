

/**
 * Builds the home page.
 * @param {string} bodyId DOM ID of body to be overwritten with homepage
 *      HTML
 */
export function buildHomePage(bodyId) {

    buildBody(bodyId);


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
                <img src="assets/game/FrogTalk.png" class="pb-2">
            </div>
        </div>
    </div>
    `
}
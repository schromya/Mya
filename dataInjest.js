
populateData(educationData, "education")
populateData(experienceData, "experience")
populateData(projectData, "projects")
populateData(awardData, "awards")

// Data is json, ID has to be ul component ID and first json key
function populateData(data, ID) {
    let element = document.getElementById(ID)

    // TODO rename single to better name when I have more braincells
    for (let single of data[ID]) {

        let skillsHTML = ""
        for (skill of single["skills"]) {
            skillsHTML += 
                `
                <span class="rounded-md bg-yellow p-05 mr-1">
                    ${skill}
                </span>
                `
        }

        let descriptionHTML = ""
        if (single["descriptions"] && single["descriptions"].length > 0) {
            descriptionHTML = 
            `
            <span class="pt-2">
                • ${single["descriptions"].join('<br> • ')}
            </span>
            `
        }


        let item = document.createElement('div')

        item.innerHTML = 
            `
            <div class="content-spread">
                <span> <b>${single["title"]}</b> </span>
                <span>${single["date"]}</span>
            </div>

            <div class="content-spread text-italic">
                <span>${single["org"]} </span>
            </div>

            <div class="content-spread pl-2">
                ${descriptionHTML}
            </div>

            <div class="pt-1 pl-2 pb-4">
                ${skillsHTML}
            </div>
            `
        element.appendChild(item)

    }
}
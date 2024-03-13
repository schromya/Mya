
populateData(experienceData, "experience")
populateData(projectData, "projects")
populateData(educationData, "education")
populateData(awardData, "awards")

populateTable(  [experienceData["experience"], projectData["projects"], educationData["education"], awardData["awards"]],
                ["Experience", "Projects", "Education", "Awards"],
                "timeTable")
populateSkillsTable(  [experienceData["experience"], projectData["projects"]],
                    "skillsTable")

// Data is json, ID has to be ul component ID and first json key
function populateData(data, ID) {
    let element = document.getElementById(ID)

    // TODO rename single to better name when I have more braincells
    for (let single of data[ID]) {

        let skillsHTML = ""
        for (skill of single["skills"]) {
            skillsHTML += 
                `
                <span class="border-rounded-md bg-yellow p-05 mr-1 mt-1">
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

            <div class ="pl-2">

            </div>

            <div class="content-flex pt-1 pl-2 pb-4">
                <a href="" target="_blank"> <img src="static/Link.png" class="img-sm pr-2 pt-1"></a>
                <a href="" target="_blank"> <img src="static/GithubLogoWhite.png" class="img-sm pr-2 pt-1"></a>
                ${skillsHTML}
            </div>


            `
        element.appendChild(item)

    }
}


function populateTable(dataList, dataLabels, ID) {
    let table = document.getElementById(ID)

    const YEARS = [2021, 2022, 2023, 2024]

    // Style colors ( Number colors need to be >= number dataList elements) (need bg and text css)
    const COLORS = ["green", "pink", "light-pink", "teal"]

    let tableElements = [] // Rows of Columns of elements

    // Create data
    for (let i = 0; i < YEARS.length; i++) {
        tableElements.push([])

        tableElements[i].push(
            `
            <td>
                ${YEARS[i].toString()}
            </td>
            `
        )

        for (let j = 0; j < dataList.length; j++ ) {
            for (experience of dataList[j]) {
                
                /* Parses start and end year. Handles following formats:
                    Aug 2021 - May 2024
                    Aug 2021
                    Aug 2021 - present
                */

                let parts = experience["date"].split(" ")
                let yearStart = parseInt(parts[1], 10)


                let yearEnd
                if (parts.length == 2) {
                    yearEnd = yearStart
                }else if (parts.length == 4) {
                    let currentDate = new Date()
                    let currentYear = currentDate.getFullYear()
                    yearEnd = currentYear
                } else {
                    yearEnd = parseInt(parts[4], 10)
                }

                if (YEARS[i] >= yearStart && YEARS[i] <= yearEnd) {
                    tableElements[i].push(
                        `
                        <td class="bg-${COLORS[j]} border-rounded-xs h-20 w-20">
                            <div class="tooltip-wrap">
                                <span class="text-${COLORS[j]}">.</span>
                                <div class="tooltip-content text-center">
                                    ${experience["title"]}
                                </div>
                            </div>
                        </td>
                        `
                    )
                }
            }
        }
    }

    // TODO: combine these into one

    // Display data in graph
    for (let i = 0; i < tableElements.length; i++) {
        let row = document.createElement('tr')
        for (let j = 0; j < tableElements[i].length; j++) {
            row.innerHTML += tableElements[i][j]
        }
        table.appendChild(row);
    }


    // // Make Key Table
    // let keyTable = document.getElementById(keyID)
    // for (let i = 0; i < dataLabels.length; i++ ) {
    //     let row = document.createElement('tr')

    //     row.innerHTML +=
    //     `
    //     <td class="bg-${COLORS[i]}">
    //         <span class="text-md">${dataLabels[i].toString()}</span>
            
    //     </td>
    //     `

    //     keyTable.appendChild(row);
    // }


}


function populateSkillsTable(dataList, ID) {
    let table = document.getElementById(ID)

    const SKILLS = ["Python", "C/C++", "Javascript", "HTML/CSS", "Rust"]

    // Style colors ( Number colors need to be >= number dataList elements) (need bg and text css)
    const COLOR = "gray"

    let tableElements = [] // Rows of Columns of elements

    // Create data
    for (let i = 0; i < SKILLS.length; i++) {
        tableElements.push([])

        tableElements[i].push(
            `
            <td>
                ${SKILLS[i]}
            </td>
            `
        )

        for (let j = 0; j < dataList.length; j++ ) {
            for (experience of dataList[j]) {


                for (skill of experience["skills"]) {
                    if (skill === SKILLS[i]) {
                        tableElements[i].push(
                            `
                            <td class="bg-${COLOR} border-rounded-xs h-20 w-20">
                                <div class="tooltip-wrap ">
                                    <span class="text-${COLOR}">.</span>
                                    <div class="tooltip-content text-center">
                                        ${experience["title"]}
                                    </div>
                                </div>
                            </td>
                            `
                        )
                    }
                }
            }
        }
    }

    // TODO: combine these into one

    // Display data in graph
    for (let i = 0; i < tableElements.length; i++) {
        let row = document.createElement('tr')
        for (let j = 0; j < tableElements[i].length; j++) {
            row.innerHTML += tableElements[i][j]
        }
        table.appendChild(row);
    }

}


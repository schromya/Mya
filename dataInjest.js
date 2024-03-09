const data = {
    "experience": [
        {
            "title": "Data Processing Developer",
            "company": "",
            "date": "Sep 2023 - Oct 2023",
            "location": "Anchorage, AK",
            "skills": ["Python"],
            "descriptions": [
                "Created a data processing pipeline in Python (which detected gaps, qualified and discarded data, and filled gaps using interpolation) to prepare data for an ML model which allowed the client company to forecast environmental conditions before they were to occur."
            ]
        },
        {
            "title": "Automation Intern",
            "company": "Hilcorp Energy Company",
            "date": "May 2023 - Aug 2023",
            "location": "Prudhoe Bay, AK",
            "skills": ["SQLplus", "Ladder Logic", "Python"],
            "descriptions": [
                "Configured and programmed Programmable Logic Controllers (PLCs), focusing on Allen Bradley ControlLogix Systems.",
                "Wrote python programs to automate tasks that ranged from excel data manipulation to controller protocol. Completed a project to reverse engineer portions of the Common Industrial Protocol (CIP) to get data from hundreds of devices in the field to extend their warranty.",
                "Worked with the Supervisory Control and Data Acquisition (SCADA) system to write SQLplus scripts and configure the Human Machine Interface (HMI).",
                "Utilized Dragos to maintain Operational Technology (OT) and Industrial Control System (ICS) cyber security."
            ]
        },

    ]
};

populateData(data, "experience")

// Data is json, ID has to be ul component ID and first json key
function populateData(data, ID) {
    let element = document.getElementById(ID)


    // TODO rename single to better name when I have more braincells
    for (let single of data[ID]) {
        let item = document.createElement('div')

        item.innerHTML = 
            `
            <div class="content-spread text-bold">
                <span>${single["title"]}</span>
                <span>${single["date"]}</span>
            </div>

            <div class="content-spread text-italic pl-2">
                <span>${single["company"]} (${single["location"]}) </span>
                <span>${single["skills"].join(', ')}</span>
            </div>
            <br>

            <div class="content-spread pl-2">
                <span>• ${single["descriptions"].join('<br> • ')}</span>
            </div>
            <br>
            `
        element.appendChild(item)

    }
}
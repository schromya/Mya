const educationData = {
    "education": [
        {
            "title": "B.S. in Computer Science and Computer Systems Engineering",
            "org": "University of Alaska Anchorage (UAA)",
            "date": "Aug 2021 - May 2024",
            "location": "Anchorage, AK",
            "skills": ["GPA: 4.0"],
            "descriptions": []
            
        },

        {
            "title": "Industrial Control Systems Cybersecurity Certificate",
            "org": "U.S. Department of Homeland Security",
            "date": "Aug 2023",
            "location": "Anchorage, AK",
            "skills": [],
            "descriptions": []
        },
        {
            "title": "Cloud Practitioner Certificate",
            "org": "Amazon Web Services",
            "date": "Aug 2022",
            "location": "Seattle, WA",
            "skills": [],
            "descriptions": []
        },

    ]
};


const experienceData = {
    "experience": [
        {
            "title": "Automation Developer",
            "org": "UAA Environment and Natural Resource Institute",
            "date": "Dec 2023 - Present",
            "location": "Anchorage, AK",
            "skills": ["Python", "PyQT5", "PostgreSQL"],
            "descriptions": [
                "Create a Python program to automate imaging of tree cores that interfaces with AmCam microscope SDK and an Arduino connected to a motor. The program has a GUI created using PyQT5."
            ],
            "link": "https://uaa-robo.github.io/tree-ring",
            "gitLink": " https://github.com/UAA-Robo/tree-ring"
        },
        {
            "title": "Data Processing Developer",
            "org": "",
            "date": "Sep 2023 - Oct 2023",
            "location": "Anchorage, AK",
            "skills": ["Python"],
            "descriptions": [
                "Created a data processing pipeline in Python (which detected gaps, qualified and discarded data, and filled gaps using interpolation) to prepare data for an ML model which allowed the client company to forecast environmental conditions before they were to occur."
            ]
        },
        {
            "title": "Data Science Student Research Assistant",
            "org": "Alaska Critical Minerals Hydrogeochemistry Lab",
            "date": "May 2023 - Aug 2023",
            "location": "Anchorage, AK",
            "skills": ["Python", "Plotly", "PostgreSQL"],
            "descriptions": [
                "Wrote python programs to ingest stream-flow data into a cloud PostgresSQL database.",
                "Created a web application to display the data with Plotly Dash.",
                "Integrated ChatGPT to incorporate natural-language data querying."
            ]
        },
        {
            "title": "Automation Intern",
            "org": "Hilcorp Energy Company",
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
        {
            "title": "Solutions Architect Intern",
            "org": "Amazon Web Services",
            "date": "May 2022 - Aug 2022",
            "location": "Seattle, WA",
            "skills": ["TypeScript", "AWS Cloud Development Kit"],
            "descriptions": [
                "Architected, implemented, and presented solutions on the cloud that aligned with business priorities.",
                "Created a Wordpress installation on Amazon Elastic Container Service orchestrated by AWS Fargate with Amazon Aurora and Amazon Elastic File System. Implemented Infrastructure as Code and CI/CD with the AWS CDK.",
                "Worked with the Supervisory Control and Data Acquisition (SCADA) system to write SQLplus scripts and configure the Human Machine Interface (HMI).",
                "Prioritized Operational Excellence, Cost Optimization, and Reliability."
            ]
        },

    ]
};

const projectData = {
    "projects": [
        {
            "title": "Frog Game Programmer",
            "org": "",
            "date": "Feb 2024 - Mar 2024",
            "location": "Anchorage, AK",
            "skills": ["Rust"],
            "descriptions": [
                "Programmed a command-line ASCII Frog Game in Rust as part of a Network and Security Project."
            ],
            "gitLink": "https://github.com/schromya/FroggySecurity",
            "image": "static/RustDemo.gif"
        },
        {
            "title": "quayside.app Developer",
            "org": "",
            "date": "Jul 2023 - Present",
            "location": "Anchorage, AK",
            "skills": ["HTML/CSS", "Javascript", "Python", "Django"],
            "descriptions": [
                "Work as a full-stack developer on quayside.app which is project management tool designed to use natural-language- processing to answer the question ”What’s next?”. This tool is built on Django with Javascript and Tailwind CSS, backed by Google Cloud Provider and MongoDB.",
                "Visit quayside.app to see it."
            ],
            "link": "http://quayside.app/",
            "gitLink": "https://github.com/quayside-app/quayside",
            "image": "static/quayside.png"
        },
        {
            "title": "UAA Robotics President",
            "org": "UAA College of Engineering",
            "date": "Aug 2022 - Present",
            "location": "Anchorage, AK",
            "skills": ["C/C++", "Python", "HTML/CSS"],
            "descriptions": [
                "Design and build robots to compete in the VEX U competition. Program vision sensors and motors for the robots in C++ using the VEX API. Train a YOLO ML Model to localize game elements. Model mechanisms (including 3D printable parts) in Autodesk Fusion 360.",
                "In Spring 2023, we won the VEX U Judges Award at Tigertown Showdown in Clemson, SC, won the VEX U Girl Powered Challenge, and Competed in the VEX U World Championship in Dallas, TX (a first for any Alaskan team).",
                "Increased club membership by almost 5 times that of the previous season. Implemented a task-base structure to manage the team and prioritize documentation.",
                "Crafted the front end of our website using HTML, and Tailwind CSS."
            ],
            "link": "https://www.uaarobotics.com/",
            "gitLink": "https://github.com/UAA-Robo",
            "image": "static/robo.png"
        },
        {
            "title": "UAA Society of Women Engineers President",
            "org": "UAA College of Engineering",
            "date": "Aug 2022 - Jul 2023",
            "location": "Anchorage, AK",
            "skills": [],
            "descriptions": [
                "Initiated “Stem Skill Sessions” to teach the UAA community practical skills. The first session in the Fall 2022 semester covered Soldering, which 40+ UAA students signed up for. The next sessions included 3D printing and App programming.",
                "Organized Q/A sessions with STEM professionals and the networking event, Women in Engineering Night.",
                "Increased club membership by almost 5 times that of the previous season. Implemented a task-base structure to manage the team and prioritize documentation.",
                "Connected members with STEM related volunteer opportunities (including UAA STEM Day)."
            ]
        },
    ]
};


const awardData = {
    "awards": [
        {
            "title": "Top Competitor in the IEEExtreme 24 hour Programming Competition",
            "org": "IEEE",
            "date": "Dec 2023",
            "location": "Anchorage, AK",
            "skills": [],
            "descriptions": [
                "Competed as part of team CrispyCATastrophe, placing 12th in the Western US region and within the top 30% of the world ranking (out of 4,222 teams)."
            ]
        },
        {
            "title": "Seawolf Student Leader Awardee",
            "org": "UAA Seawolf Award Committee and the Vice Chancellor for Student Affairs",
            "date": "Dec 2022",
            "location": "Anchorage, AK",
            "skills": [],
            "descriptions": [
                "Received The Seawolf Student Leader Award, which recognizes student leaders who, through their leadership, involvement, and com- mitment made significant contributions to campus life. Students are recognized for leadership contributions that go above and beyond the norm, while sustaining quality academic performance."
            ]
        },
        {
            "title": "Winner of the Raytheon Augmented Reality Team Hackathon Competition",
            "org": "Raytheon Technologies",
            "date": "Jul 2022",
            "location": "Seattle, WA",
            "skills": [],
            "descriptions": [
                "Developed an augmented reality app using the Unity SDK to identify objects and replace them with a digital 2D image. Creatively crafted a winning video to showcase the project."
            ]
        },

        {
            "title": "Top Competitor in the National Cyber League",
            "org": "National Cyber League",
            "date": "Nov 2021",
            "location": "Anchorage, AK",
            "skills": [],
            "descriptions": [
                "Placed within the top 14% during the Individual Competition (ranked 851st out of 6475 competitors) and placed within the top 2% during the Team Competition (ranked 49th out of 3910 teams)."
            ]
        },
        {
            "title": "Winner of the Raytheon Skittle Sorter Team Hackathon Competition",
            "org": "Raytheon Technologies",
            "date": "Jun 2021",
            "location": "Tampa, FL",
            "skills": [],
            "descriptions": [
                "Developed MicroPython code and engineered mechanisms to sort M&M’s by their RGB color value using Lego pieces and motors."
            ]
        },

    ]
};
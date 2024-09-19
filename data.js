const educationData = {
    "education": [
        {
            "title": "M.S. in Computer Science",
            "org": "University of Wisconsin Madison (UW-Madison)",
            "date": "Aug 2024 - Present",
            "location": "Madison, WI",
            "skills": [],
            "descriptions": []
            
        },
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
            "title": "Human-Robot Interaction Researcher",
            "org": "UW-Madison People & Robots Lab",
            "date": "Aug 2024 - Present",
            "location": "Madison, WI",
            "skills": ["ROS", "C/C++", "Python"],
            "descriptions": [
                "Program a 6-DOF Franka Emika Panda Robotic Arm to implement visualization techniques and Inverse Kinematics for pick-and-place grasping tasks.",
                "Plan for the HAND ERC, a project that will research dextrous robot manipulation starting November."
            ],
            "link": "https://hand-erc.org/",
        },
        {
            "title": "IT Data & Analytics Intern",
            "org": "ConcoPhillips",
            "date": "May 2024 - Jul 2024",
            "location": "Anchorage, AK",
            "skills": ["Python", "SQL", "Aspentech SQLplus","Perl"],
            "descriptions": [
                "Migrated legacy Perl and AspenTech SQLplus code to Python as part of our Snowflake data modernization initiative. Resulted in a 20x reduction in code volume and more maintainable code.",
                "Developed SQL scripts to aggregate over 104 GB worth of data to enable reservoir forecasting and Closed-Loop Reservoir Management (CLRM).",
                "Merged 3 sources of Well Header information into 1 using a conforming dimension model and trust factor ranking. This integration eliminated tedious, menial tasks and freed up human resources."
            ],
        },
        {
            "title": "Automation Developer",
            "org": "UAA Environment and Natural Resource Institute",
            "date": "Dec 2023 - May 2023",
            "location": "Anchorage, AK",
            "skills": ["Python", "PyQT5", "PostgreSQL"],
            "descriptions": [
                "Created a Python program to automate imaging of tree cores that interfaces with AmCam microscope SDK and an Arduino connected to a motor. The program's GUI was created using PyQT5."
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
        {
            "title": "Plasma Physics Researcher",
            "org": "UAA Plasma Physics Laboratory",
            "date": "Sep 2021 - Apr 2022",
            "location": "Anchorage, AK",
            "skills": ["TechX VSim"],
            "descriptions": [
                "Researched behavior of quasi-neutral to non-neutral plasma confined within a Multipole Plasma Trap (MPT) as part of the Alaska Space Grant Program Early Career Undergraduate Research Apprenticeship.",
                "Won Best-in-Show poster: Schroder, M., Hicks, N. (2022, April 8). Simulated Energy Analyzer Measurements of a Charged Particle Beam Under Adiabatic and Non-adiabatic Reflections from a Multipole Plasma Trap Field [Poster presentation]. Alaska Space Grant Symposium, Juneau, AK, United States."
            ],

            "image": "static/Plasma.png",
            "link": "https://drive.google.com/file/d/1WKuBSalsdkImyzIBPYUX13K42VPht4wV/view?usp=sharing"
        },

    ]
};

const projectData = {
    "projects": [
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
            "date": "Aug 2022 - May 2024",
            "location": "Anchorage, AK",
            "skills": ["C/C++", "Python", "HTML/CSS"],
            "descriptions": [
                "Designed and built robots to compete in the VEX U competition. Programmed vision sensors and motors for the robots in C++ using the VEX API. Trained a YOLO ML Model to localize game elements. Model mechanisms (including 3D printable parts) in Autodesk Fusion 360.",
                "In Spring 2023, we won the VEX U Judges Award at Tigertown Showdown in Clemson, SC, won the VEX U Girl Powered Challenge, and Competed in the VEX U World Championship in Dallas, TX (a first for any Alaskan team).",
                "Increased club membership by almost 5 times that of the previous season. Implemented a task-base structure to manage the team and prioritize documentation.",
                "Crafted the front end of our website using HTML, and Tailwind CSS.",
                "Since Fall 2022, we outreached to over 500 youth and 200 guardians through Soldering, 3D-printing, and RC-Car workshops, and through local community events like UAA STEM Day."
            ],
            "link": "https://www.uaarobotics.com/",
            "gitLink": "https://uaa-robo.github.io/UAA-Robotics-Website",
            "image": "static/Robo.png"
        },
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
            "title": "Computer Networks Researcher",
            "org": "UAA Department of Computer Science and Engineering",
            "date": "Sep 2023 - Dec 2023",
            "location": "Anchorage, AK",
            "skills": ["Python"],
            "descriptions": [
                "Researched Low Earth Orbiting Inter-Satellite Link (ISL) static routing typologies.",
                "Simulated Sparse, +Grid, and Extended +Grid ISL typologies in python."
            ],
            "gitLink": "https://github.com/schromya/LEO",
            "image": "static/NetworksDemo.gif"
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
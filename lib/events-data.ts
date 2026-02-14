// Events data for BODHI (Technical) and DRISHYA (Arts) pages

// Department-based structure
export const departments = [
    {
        id: "ai-ds",
        name: "AI & DS",
        abbr: "AI & DS",
        slug: "ai-ds",
        events: [
            {
                name: "CODERIFT",
                category: "GAME ZONE",
                dept: "AI & DS",
                description: "A next-gen tech mystery hunt challenging teams to decode patterns, interpret hidden systems, and uncover layered clues.",
                image: "/images/events/coderift.png",
                date: "Feb 28",
                time: "10:00 AM",
                teamSize: "2-4 Members",
                coordinators: [
                    { name: "Ansaj", phone: "9895155001" },
                    { name: "Athul", phone: "9645028366" }
                ]
            },
            {
                name: "FRAMEDROP",
                category: "GAME ZONE",
                dept: "AI & DS",
                description: "A high-intensity, time-based team challenge blending rapid mini-games with competitive PS5 and PC gameplay.",
                image: "/images/events/framedrop.jpeg",
                coordinators: [
                    { name: "Adithyan K", phone: "9746368321" },
                    { name: "Sidharth S", phone: "8547219502" }
                ]
            }
        ]
    },
    {
        id: "computer-science",
        name: "Computer Science",
        abbr: "CSE",
        slug: "computer-science",
        events: [
            {
                name: "CODE AND CHAOS",
                category: "HACKATHON",
                dept: "CSE",
                description: "A 14 hour overnight hackathon based on the theme of Sustainable development. Build functional and scalable solutions for socially relevant problems.",
                image: "/images/events/codeandchaos.png",
                coordinators: [
                    { name: "Benedict Chacko Mathew", phone: "6282031325" },
                    { name: "Kripa Sajo", phone: "8714031195" }
                ],
                prize: 15000,
                fee: 400,
                teamSize: "2-4 Members",
                rules: [
                    "Teams should bring their own laptops and hardware kits.",
                    "Internet connectivity and power sockets will be provided.",
                    "The hackathon duration is 14 hours overnight.",
                    "Project must be built from scratch during the event."
                ]
            },
            {
                name: "TECH ARENA",
                category: "TECHNICAL",
                dept: "CSE",
                description: "A three level technical competition consisting file decryption, technical quizzes, and a final startup pitch.",
                image: "/images/events/techarena.jpeg",
                coordinators: [
                    { name: "Sarah Swetha Thomas", phone: "8714793842" },
                    { name: "Eldho Aby", phone: "8281469701" }
                ]
            },
            {
                name: "STRANGER THINGS",
                category: "GAME",
                dept: "CSE",
                description: "A theme based treasure hunt event where participants solve puzzles, follow clues and survive multiple elimination rounds.",
                image: "/images/events/strangerthings.jpeg",
                coordinators: [
                    { name: "Deon Johny", phone: "9188083702" },
                    { name: "Keerthana K Anil", phone: "7306749927" }
                ]
            },
            {
                name: "QUIRK QUEST",
                category: "TECHNICAL",
                dept: "CSE",
                description: "A creative tech inspired competition involving puzzle challenges, prompt making, and a final craft and quiz fusion round.",
                image: "/images/events/quirkquest.jpeg",
                coordinators: [
                    { name: "Neethu Cheriyan", phone: "9188654452" },
                    { name: "Brijil Thengumthottathil", phone: "9895107690" }
                ]
            }
        ]
    },
    {
        id: "computer-science-design",
        name: "Computer Science and Design",
        abbr: "CSD",
        slug: "computer-science-design",
        events: [
            {
                name: "FUNFINITY",
                category: "GAMES",
                dept: "CSD",
                description: "One-stop destination for unlimited fun. A vibrant space filled with games, challenges, and endless excitement.",
                image: "/images/events/fun.png",
                coordinators: [
                    { name: "Lewin Johnson", phone: "9656843500" },
                    { name: "Job T Inchanattu", phone: "9745340304" }
                ]
            },
            {
                name: "AI VisionX",
                category: "WORKSHOP",
                dept: "CSD",
                description: "Step into the world of AI-generated visuals with AI VisionX. Learn how to craft reels, stories, and cinematic videos using powerful GenAI tools.",
                image: "/images/events/vision.png",
                coordinators: [
                    { name: "Alwin Lal", phone: "9744531108" },
                    { name: "Kevin Joseph", phone: "9074611663" }
                ]
            }
        ]
    },
    {
        id: "information-technology",
        name: "Information Technology",
        abbr: "IT",
        slug: "information-technology",
        events: [
            {
                name: "PENETRATION TESTING BOOTCAMP",
                category: "WORKSHOP",
                dept: "IT",
                description: "Full-day experience learning to think like attackers. Recon → Exploitation → Reporting with live demos and CTF.",
                image: "/images/events/penetration.png",
                coordinators: [
                    { name: "Abhijit Shaji", phone: "9526494491" },
                    { name: "Nivin K Sunil", phone: "8714930113" }
                ]
            },
            {
                name: "DRONEX: From Toy to Tactical",
                category: "WORKSHOP",
                dept: "IT",
                description: "Hands-on workshop introducing drone technology fundamentals, real-world uses, safety, and live flight demos.",
                image: "/images/events/drone.png",
                coordinators: [
                    { name: "Joyal Sojan", phone: "6282657146" },
                    { name: "Anusha Saji", phone: "8547935816" }
                ]
            }
        ]
    },
    {
        id: "eee",
        name: "EEE",
        abbr: "EEE",
        slug: "eee",
        events: [
            {
                name: "HACKTRONICS",
                category: "HACKATHON",
                dept: "EEE",
                description: "A 12-hour hardware-based hackathon where teams design and build innovative hardware–software solutions to real-world problems.",
                image: "/images/events/eeehack.jpeg",
                coordinators: [
                    { name: "Abraham", phone: "8547436923" },
                    { name: "Ashker", phone: "9946436741" }
                ]
            },
            {
                name: "REAL STEEL",
                category: "TECHNICAL",
                dept: "EEE",
                description: "High-intensity Robo War competition where teams battle custom-built robots in an enclosed arena.",
                image: "/images/events/realsteel.png",
                coordinators: [
                    { name: "Akshai", phone: "9048201463" },
                    { name: "Arshad", phone: "9656132272" }
                ],
                prize: 25000,
                fee: 1000,
                teamSize: "Max 5 Members",
                rules: [
                    "Robots must comply with the 30kg weight category specifications.",
                    "Wireless control is mandatory; tethered control is strictly prohibited.",
                    "Standard arena safety protocols must be followed during weapon testing.",
                    "Double elimination bracket system will be followed."
                ]
            }
        ]
    },
    {
        id: "electronics-communication",
        name: "Electronics Communication",
        abbr: "ECE",
        slug: "electronics-communication",
        events: [
            {
                name: "3S BASH",
                category: "GAME",
                dept: "ECE",
                description: "Exciting mini-football tournament featuring teams of three. Fast, dynamic, and action-packed.",
                image: "/images/events/football.png",
                coordinators: [
                    { name: "Hisham Ebrahim", phone: "9633582362" },
                    { name: "Dheeraj S.M", phone: "8078070248" }
                ]
            },
            {
                name: "TECH TRAVERSE",
                category: "TECHNICAL",
                dept: "ECE",
                description: "The Project Expo 2026. A stage to showcase innovative and creative engineering solutions, breaking down silos between departments.",
                image: "/images/events/project.png",
                coordinators: [
                    { name: "Bazil Abee", phone: "7736851614" },
                    { name: "Ryan Ajil", phone: "9946252194" }
                ]
            }
        ]
    },
    {
        id: "civil",
        name: "Civil",
        abbr: "CIVIL",
        slug: "civil",
        events: [
            {
                name: "Bridge Building Competition",
                category: "MECH & MATTER ARENA",
                dept: "CIVIL",
                description: "Design and build a model bridge using materials like popsicle sticks within a fixed time.",
                image: "/images/events/bridge.png",
                coordinators: [
                    { name: "VINAYAK MANOHARAN", phone: "974638658" },
                    { name: "DELLA MARIYA GEORGE", phone: "9496740039" }
                ]
            },
            {
                name: "Concrete Cube Making Competition",
                category: "MECH & MATTER ARENA",
                dept: "CIVIL",
                description: "Prepare and cast concrete cubes using provided materials; winners decided based on compressive strength.",
                image: "/images/events/cube.png",
                coordinators: [
                    { name: "Mathews Thomas", phone: "7510567627" },
                    { name: "Aswin P Nair", phone: "6238701144" }
                ]
            }
        ]
    },
    {
        id: "mechanical",
        name: "Mechanical",
        abbr: "MECH",
        slug: "mechanical",
        events: [
            {
                name: "CAD MASTERS",
                category: "WORKSHOP",
                dept: "MECH",
                description: "3D modeling and design competition.",
                image: "/images/events/cad.png",
                coordinators: [
                    { name: "Ashika Sathish", phone: "6238356942" },
                    { name: "Jerin Shaji", phone: "9544061389" }
                ]
            },
            {
                name: "ECU Tuning Workshop",
                category: "WORKSHOP",
                dept: "MECH",
                description: "Hands-on workshop on ECU tuning and vehicle performance optimization.",
                image: "/images/events/ecu.png",
                coordinators: [
                    { name: "Sreehari P S", phone: "9061821037" },
                    { name: "Jerin Shaji", phone: "9544061389" }
                ]
            }
        ]
    },
    {
        id: "robotics-club",
        name: "Robotics Club",
        abbr: "ROBOTICS",
        slug: "robotics-club",
        events: [
            {
                name: "Linefollower robot competition",
                category: "TECHNICAL",
                dept: "ROBOTICS",
                description: "As of now add description and image",
                image: "/images/events/line.png",
                date: "Feb 27",
                time: "10:00 AM",
                teamSize: "2-4 Members",
                coordinators: [
                    { name: "Coordinator Name", phone: "Phone Number" },
                    { name: "Coordinator Name", phone: "Phone Number" }
                ]
            }
        ]
    }
]

// Category-based zones (for alternate view)
export const eventZones = [
    {
        id: "hackathon",
        title: "HACKATHON",
        tagline: "Build. Break. Innovate.",
        icon: "",
        events: [
            {
                name: "CODE AND CHAOS",
                category: "HACKATHON",
                dept: "CSE",
                description: "A 14 hour overnight hackathon based on the theme of Sustainable development. Build functional and scalable solutions for socially relevant problems.",
                image: "/images/events/codeandchaos.png",
                coordinators: [
                    { name: "Benedict Chacko Mathew", phone: "6282031325" },
                    { name: "Kripa Sajo", phone: "8714031195" }
                ],
                prize: 15000,
                fee: 400,
                teamSize: "2-4 Members",
                rules: [
                    "Teams should bring their own laptops and hardware kits.",
                    "Internet connectivity and power sockets will be provided.",
                    "The hackathon duration is 14 hours overnight.",
                    "Project must be built from scratch during the event."
                ]
            },
            {
                name: "HACKTRONICS",
                category: "HACKATHON",
                dept: "EEE",
                description: "A 12-hour hardware-based hackathon where teams design and build innovative hardware–software solutions to real-world problems.",
                image: "/images/events/eeehack.jpeg",
                coordinators: [
                    { name: "Abraham", phone: "8547436923" },
                    { name: "Ashker", phone: "9946436741" }
                ]
            }
        ]
    },
    {
        id: "technical",
        title: "TECHNICAL",
        tagline: "Logic. Skill. Precision.",
        icon: "",
        events: [
            {
                name: "TECH ARENA",
                category: "TECHNICAL",
                dept: "CSE",
                description: "A three level technical competition consisting file decryption, technical quizzes, and a final startup pitch.",
                image: "/images/events/techarena.jpeg",
                coordinators: [
                    { name: "Sarah Swetha Thomas", phone: "8714793842" },
                    { name: "Eldho Aby", phone: "8281469701" }
                ]
            },
            {
                name: "QUIRK QUEST",
                category: "TECHNICAL",
                dept: "CSE",
                description: "A creative tech inspired competition involving puzzle challenges, prompt making, and a final craft and quiz fusion round.",
                image: "/images/events/quirkquest.jpeg",
                coordinators: [
                    { name: "Neethu Cheriyan", phone: "9188654452" },
                    { name: "Brijil Thengumthottathil", phone: "9895107690" }
                ]
            },
            {
                name: "TECH TRAVERSE",
                category: "TECHNICAL",
                dept: "ECE",
                description: "The Project Expo 2026. A stage to showcase innovative and creative engineering solutions, breaking down silos between departments.",
                image: "/images/events/project.png",
                coordinators: [
                    { name: "Bazil Abee", phone: "7736851614" },
                    { name: "Ryan Ajil", phone: "9946252194" }
                ]
            },
            {
                name: "REAL STEEL",
                category: "TECHNICAL",
                dept: "EEE",
                description: "High-intensity Robo War competition where teams battle custom-built robots in an enclosed arena.",
                image: "/images/events/realsteel.png",
                coordinators: [
                    { name: "Akshai", phone: "9048201463" },
                    { name: "Arshad", phone: "9656132272" }
                ],
                prize: 25000,
                fee: 1000,
                teamSize: "Max 5 Members",
                rules: [
                    "Robots must comply with the 30kg weight category specifications.",
                    "Wireless control is mandatory; tethered control is strictly prohibited.",
                    "Standard arena safety protocols must be followed during weapon testing.",
                    "Double elimination bracket system will be followed."
                ]
            },
            {
                name: "Linefollower robot competition",
                category: "TECHNICAL",
                dept: "ROBOTICS",
                description: "As of now add description and image",
                image: "/images/events/placeholder.png",
                date: "Feb 27",
                time: "10:00 AM",
                teamSize: "2-4 Members",
                coordinators: [
                    { name: "Coordinator Name", phone: "Phone Number" },
                    { name: "Coordinator Name", phone: "Phone Number" }
                ]
            }
        ]
    },
    {
        id: "game-zone",
        title: "GAME ZONE",
        tagline: "Play fast. Play smart. Play to win.",
        icon: "",
        events: [
            {
                name: "CODERIFT",
                category: "GAME ZONE",
                dept: "AI & DS",
                description: "A next-gen tech mystery hunt challenging teams to decode patterns, interpret hidden systems, and uncover layered clues.",
                image: "/images/events/coderift.png",
                coordinators: [
                    { name: "Ansaj", phone: "9895155001" },
                    { name: "Athul", phone: "9645028366" }
                ]
            },
            {
                name: "FRAMEDROP",
                category: "GAME ZONE",
                dept: "AI & DS",
                description: "A high-intensity, time-based team challenge blending rapid mini-games with competitive PS5 and PC gameplay.",
                image: "/images/events/framedrop.jpeg",
                coordinators: [
                    { name: "Adithyan K", phone: "9746368321" },
                    { name: "Sidharth S", phone: "8547219502" }
                ]
            },
            {
                name: "STRANGER THINGS",
                category: "GAME",
                dept: "CSE",
                description: "A theme based treasure hunt event where participants solve puzzles, follow clues and survive multiple elimination rounds.",
                image: "/images/events/strangerthings.jpeg",
                coordinators: [
                    { name: "Deon Johny", phone: "9188083702" },
                    { name: "Keerthana K Anil", phone: "7306749927" }
                ]
            },
            {
                name: "3S BASH",
                category: "GAME",
                dept: "ECE",
                description: "Exciting mini-football tournament featuring teams of three. Fast, dynamic, and action-packed.",
                image: "/images/events/football.png",
                coordinators: [
                    { name: "Hisham Ebrahim", phone: "9633582362" },
                    { name: "Dheeraj S.M", phone: "8078070248" }
                ]
            },
            {
                name: "FUNFINITY",
                category: "GAMES",
                dept: "CSD",
                description: "One-stop destination for unlimited fun. A vibrant space filled with games, challenges, and endless excitement.",
                image: "/images/events/fun.png",
                coordinators: [
                    { name: "Lewin Johnson", phone: "9656843500" },
                    { name: "Job T Inchanattu", phone: "9745340304" }
                ]
            }
        ]
    },
    {
        id: "workshop",
        title: "WORKSHOP",
        tagline: "Hands-on. Real-world. No theory-only.",
        icon: "",
        events: [
            {
                name: "PENETRATION TESTING BOOTCAMP",
                category: "WORKSHOP",
                dept: "IT",
                description: "Full-day experience learning to think like attackers. Recon → Exploitation → Reporting with live demos and CTF.",
                image: "/images/events/penetration.png",
                coordinators: [
                    { name: "Abhijit Shaji", phone: "9526494491" },
                    { name: "Nivin K Sunil", phone: "8714930113" }
                ]
            },
            {
                name: "DRONEX: From Toy to Tactical",
                category: "WORKSHOP",
                dept: "IT",
                description: "Hands-on workshop introducing drone technology fundamentals, real-world uses, safety, and live flight demos.",
                image: "/images/events/drone.png",
                coordinators: [
                    { name: "Joyal Sojan", phone: "6282657146" },
                    { name: "Anusha Saji", phone: "8547935816" }
                ]
            },
            {
                name: "The Creator's Hub",
                category: "WORKSHOP",
                dept: "CSD",
                description: "Hands-on workshop focused on graphic design and video editing to master visual creativity.",
                image: "/images/events/fun.png",
                coordinators: [
                    { name: "Alwin Lal", phone: "9744531108" },
                    { name: "Kevin Joseph", phone: "9074611663" }
                ]
            },
            {
                name: "CAD MASTERS",
                category: "WORKSHOP",
                dept: "MECH",
                description: "3D modeling and design competition.",
                image: "/images/events/cad.png",
                coordinators: [
                    { name: "Ashika Sathish", phone: "6238356942" },
                    { name: "Jerin Shaji", phone: "9544061389" }
                ]
            },
            {
                name: "ECU Tuning Workshop",
                category: "WORKSHOP",
                dept: "MECH",
                description: "Hands-on workshop on ECU tuning and vehicle performance optimization.",
                image: "/images/events/ecu.png",
                coordinators: [
                    { name: "Sreehari P S", phone: "9061821037" },
                    { name: "Jerin Shaji", phone: "9544061389" }
                ]
            },
            {
                name: "AI VisionX",
                category: "WORKSHOP",
                dept: "CSD",
                description: "Step into the world of AI-generated visuals with AI VisionX. Learn how to craft reels, stories, and cinematic videos using powerful GenAI tools.",
                image: "/images/events/vision.png",
                coordinators: [
                    { name: "Alwin Lal", phone: "9744531108" },
                    { name: "Kevin Joseph", phone: "9074611663" }
                ]
            }
        ]
    },
    {
        id: "mech-matter-arena",
        title: "MECH & MATTER ARENA",
        tagline: "Steel, circuits, concrete, and combat.",
        icon: "",
        events: [
            {
                name: "Bridge Building Competition",
                category: "MECH & MATTER ARENA",
                dept: "CIVIL",
                description: "Design and build a model bridge using materials like popsicle sticks within a fixed time.",
                image: "/images/events/bridge.png",
                coordinators: [
                    { name: "VINAYAK MANOHARAN", phone: "974638658" },
                    { name: "DELLA MARIYA GEORGE", phone: "9496740039" }
                ]
            },
            {
                name: "Concrete Cube Making Competition",
                category: "MECH & MATTER ARENA",
                dept: "CIVIL",
                description: "Prepare and cast concrete cubes using provided materials; winners decided based on compressive strength.",
                image: "/images/events/cube.png",
                coordinators: [
                    { name: "Mathews Thomas", phone: "7510567627" },
                    { name: "Aswin P Nair", phone: "6238701144" }
                ]
            }
        ]
    }
]

// Legacy support for technical events (keep for backward compatibility)
export const technicalEvents: any = {}

export const artsEvents = [
    // Day 1 - Feb 27
    { name: "Classical Dance", description: "Showcase your classical dance skills - Bharatanatyam, Kathak, and more", registrationUrl: "#", date: "2026-02-27", time: "10:00 AM", location: "Main Auditorium" },
    { name: "Western Dance", description: "Contemporary, hip-hop, and freestyle dance competition", registrationUrl: "#", date: "2026-02-27", time: "02:00 PM", location: "Open Air Theatre" },
    { name: "Group Dance", description: "Team dance performance with creative choreography", registrationUrl: "#", date: "2026-02-27", time: "05:00 PM", location: "Main Auditorium" },
    { name: "Solo Singing", description: "Showcase your vocal talent - any genre welcome", registrationUrl: "#", date: "2026-02-27", time: "11:00 AM", location: "Seminar Hall 1" },
    { name: "Band Performance", description: "Battle of the bands - rock, jazz, fusion", registrationUrl: "#", date: "2026-02-27", time: "06:00 PM", location: "Main Stage" },
    { name: "Instrumental", description: "Solo instrumental performance competition", registrationUrl: "#", date: "2026-02-27", time: "01:00 PM", location: "Music Room" },

    // Day 2 - Feb 28
    { name: "Drama", description: "Theatrical performance and stage play", registrationUrl: "#", date: "2026-02-28", time: "10:00 AM", location: "Main Auditorium" },
    { name: "Mime", description: "Express without words - mime and acting", registrationUrl: "#", date: "2026-02-28", time: "12:00 PM", location: "Seminar Hall 2" },
    { name: "Stand-up Comedy", description: "Make the audience laugh with your wit", registrationUrl: "#", date: "2026-02-28", time: "03:00 PM", location: "Open Air Theatre" },
    { name: "Painting", description: "On-the-spot painting competition", registrationUrl: "#", date: "2026-02-28", time: "09:00 AM", location: "Art Gallery" },
    { name: "Photography", description: "Capture moments - theme-based photography", registrationUrl: "#", date: "2026-02-28", time: "All Day", location: "Campus Wide" },
    { name: "Fashion Show", description: "Walk the ramp with style and creativity", registrationUrl: "#", date: "2026-02-28", time: "07:00 PM", location: "Main Stage" },
]

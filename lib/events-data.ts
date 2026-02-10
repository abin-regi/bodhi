// Events data for BODHI (Technical) and DRISHYA (Arts) pages

// New Event Zones Structure (Replaces Departments)
export const eventZones = [
    {
        id: "innovation-forge",
        title: "INNOVATION FORGE",
        tagline: "Where ideas are built, broken, and reborn.",
        icon: "",
        events: [
            {
                name: "CODE AND CHAOS",
                category: "HACKATHON",
                dept: "CSE",
                description: "A 14 hour overnight hackathon based on the theme of Sustainable development. Build functional and scalable solutions for socially relevant problems.",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=600",
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
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=600",
                coordinators: [
                    { name: "Abraham", phone: "8547436923" },
                    { name: "Ashker", phone: "9946436741" }
                ]
            },
            {
                name: "TECH TRAVERSE",
                category: "EXPO",
                dept: "MECH",
                description: "The Project Expo 2026. A stage to showcase innovative and creative engineering solutions, breaking down silos between departments.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=600",
                coordinators: [
                    { name: "Bazil Abee", phone: "7736851614" },
                    { name: "Ryan Ajil", phone: "9946252194" }
                ]
            }
        ]
    },
    {
        id: "core-engineering-league",
        title: "CORE ENGINEERING LEAGUE",
        tagline: "Pure skill. Pure logic. No shortcuts.",
        icon: "",
        events: [
            {
                name: "TECH ARENA",
                category: "COMPETITION",
                dept: "ECE",
                description: "A three level technical competition consisting file decryption, technical quizzes, and a final startup pitch.",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=600",
                coordinators: [
                    { name: "Sarah Swetha Thomas", phone: "8714793842" },
                    { name: "Eldho Aby", phone: "8281469701" }
                ]
            },
            {
                name: "QUIRK QUEST",
                category: "COMPETITION",
                dept: "EEE",
                description: "A creative tech inspired competition involving puzzle challenges, prompt making, and a final craft and quiz fusion round.",
                image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800&h=600",
                coordinators: [
                    { name: "Neethu Cheriyan", phone: "9188654452" },
                    { name: "Brijil Thengumthottathil", phone: "9895107690" }
                ]
            },
            {
                name: "CODERIFT",
                category: "GAME",
                dept: "CSE",
                description: "A next-gen tech mystery hunt challenging teams to decode patterns, interpret hidden systems, and uncover layered clues.",
                image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800&h=600",
                coordinators: [
                    { name: "Ansaj", phone: "9895155001" },
                    { name: "Athul", phone: "9645028366" }
                ]
            },
            {
                name: "STRANGER THINGS",
                category: "TREASURE HUNT",
                dept: "GENERAL",
                description: "A theme based treasure hunt event where participants solve puzzles, follow clues and survive multiple elimination rounds.",
                image: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?auto=format&fit=crop&q=80&w=800&h=600",
                coordinators: [
                    { name: "Deon Johny", phone: "9188083702" },
                    { name: "Keerthana K Anil", phone: "7306749927" }
                ]
            }
        ]
    },
    {
        id: "digital-velocity",
        title: "DIGITAL COLISEUM & VELOCITY GROUNDS",
        tagline: "Play fast. Play smart. Play to win.",
        icon: "",
        events: [
            {
                name: "FRAMEDROP",
                category: "GAMING",
                dept: "CSE",
                description: "A high-intensity, time-based team challenge blending rapid mini-games with competitive PS5 and PC gameplay.",
                image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800&h=600",
                coordinators: [
                    { name: "Adithyan K", phone: "9746368321" }, // Updated with placeholder/likely data
                    { name: "Sidharth S", phone: "8547219502" }
                ]
            },
            {
                name: "FUNFINITY",
                category: "GAMES",
                dept: "GENERAL",
                description: "One-stop destination for unlimited fun. A vibrant space filled with games, challenges, and endless excitement.",
                image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800&h=600",
                coordinators: [
                    { name: "Lewin Johnson", phone: "9656843500" },
                    { name: "Job T Inchanattu", phone: "9745340304" }
                ]
            },
            {
                name: "3S BASH",
                category: "SPORTS",
                dept: "GENERAL",
                description: "Exciting mini-football tournament featuring teams of three. Fast, dynamic, and action-packed.",
                image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800&h=600",
                coordinators: [
                    { name: "Hisham Ebrahim", phone: "9633582362" },
                    { name: "Dheeraj S.M", phone: "8078070248" }
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
                name: "REAL STEEL",
                category: "ROBO WAR",
                dept: "MECH",
                description: "High-intensity Robo War competition where teams battle custom-built robots in an enclosed arena.",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=600",
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
                name: "Bridge Building Competition",
                category: "COMPETITION",
                dept: "CIVIL",
                description: "Design and build a model bridge using materials like popsicle sticks within a fixed time.",
                image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80&w=800&h=600",
                coordinators: [
                    { name: "VINAYAK MANOHARAN", phone: "974638658" },
                    { name: "DELLA MARIYA GEORGE", phone: "9496740039" }
                ]
            },
            {
                name: "Concrete Cube Making Competition",
                category: "COMPETITION",
                dept: "CIVIL",
                description: "Prepare and cast concrete cubes using provided materials; winners decided based on compressive strength.",
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800&h=600",
                coordinators: [
                    { name: "Mathews Thomas", phone: "7510567627" },
                    { name: "Aswin P Nair", phone: "6238701144" }
                ]
            },
            {
                name: "CAD MASTERS",
                category: "COMPETITION",
                dept: "MECH",
                description: "3D modeling and design competition.",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600",
                coordinators: [
                    { name: "Ashika Sathish", phone: "6238356942" },
                    { name: "Jerin Shaji", phone: "9544061389" }
                ]
            }
        ]
    },
    {
        id: "pro-labs",
        title: "PRO LABS",
        tagline: "Hands-on. Real-world. No theory-only.",
        icon: "",
        events: [
            {
                name: "PENETRATION TESTING BOOTCAMP",
                category: "WORKSHOP",
                dept: "CSE",
                description: "Full-day experience learning to think like attackers. Recon → Exploitation → Reporting with live demos and CTF.",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=600",
                coordinators: [
                    { name: "Abhijit Shaji", phone: "9526494491" },
                    { name: "Nivin K Sunil", phone: "8714930113" }
                ]
            },
            {
                name: "DRONEX: From Toy to Tactical",
                category: "WORKSHOP",
                dept: "ECE",
                description: "Hands-on workshop introducing drone technology fundamentals, real-world uses, safety, and live flight demos.",
                image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800&h=600",
                coordinators: [
                    { name: "Joyal Sojan", phone: "6282657146" },
                    { name: "Anusha Saji", phone: "8547935816" }
                ]
            },
            {
                name: "ECU Tuning Workshop",
                category: "WORKSHOP",
                dept: "MECH",
                description: "Hands-on workshop on ECU tuning and vehicle performance optimization.",
                image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800&h=600",
                coordinators: [
                    { name: "Sreehari P S", phone: "9061821037" },
                    { name: "Jerin Shaji", phone: "9544061389" }
                ]
            },
            {
                name: "The Creator’s Hub",
                category: "WORKSHOP",
                dept: "GENERAL",
                description: "Hands-on workshop focused on graphic design and video editing to master visual creativity.",
                image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800&h=600",
                coordinators: [
                    { name: "Alwin Lal", phone: "9744531108" },
                    { name: "Kevin Joseph", phone: "9074611663" }
                ]
            }
        ]
    }
]

// Legacy exports to prevent build errors until refactor is complete
export const departments: any[] = []
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

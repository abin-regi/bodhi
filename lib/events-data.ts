// Events data for BODHI (Technical) and DRISHYA (Arts) pages

export const departments = [
    { name: "Computer Science & Engineering", slug: "cse", abbr: "CSE" },
    { name: "Computer Science & Design", slug: "csd", abbr: "CSD" },
    { name: "Electrical & Electronics Engineering", slug: "eee", abbr: "EEE" },
    { name: "Electronics & Communication Engineering", slug: "ece", abbr: "ECE" },
    { name: "Mechanical Engineering", slug: "mech", abbr: "MECH" },
    { name: "Civil Engineering", slug: "civil", abbr: "CIVIL" },
    { name: "Artificial Intelligence & Data Science", slug: "aids", abbr: "AI&DS" },
]

export type Department = (typeof departments)[number]

// Technical events by department
export const technicalEvents: Record<string, { name: string; description: string; registrationUrl: string }[]> = {
    cse: [
        { name: "Code Sprint", description: "Competitive programming challenge to test your algorithmic skills", registrationUrl: "#" },
        { name: "Hackathon", description: "24-hour coding marathon to build innovative solutions", registrationUrl: "#" },
        { name: "Web Dev Challenge", description: "Design and develop a responsive website in limited time", registrationUrl: "#" },
        { name: "Debug It", description: "Find and fix bugs in the given codebase", registrationUrl: "#" },
    ],
    csd: [
        { name: "UI/UX Design", description: "Create intuitive and beautiful user interfaces", registrationUrl: "#" },
        { name: "Figma Showdown", description: "Design prototypes for real-world applications", registrationUrl: "#" },
        { name: "Creative Coding", description: "Art meets code - create generative art", registrationUrl: "#" },
        { name: "App Design", description: "Design a mobile app from scratch", registrationUrl: "#" },
    ],
    eee: [
        { name: "Circuit Master", description: "Design and simulate complex circuits", registrationUrl: "#" },
        { name: "Power Systems Quiz", description: "Test your knowledge of power systems", registrationUrl: "#" },
        { name: "Arduino Challenge", description: "Build projects using Arduino microcontrollers", registrationUrl: "#" },
        { name: "Electro Maze", description: "Navigate through electrical puzzles", registrationUrl: "#" },
    ],
    ece: [
        { name: "Signal Processing", description: "Analyze and process digital signals", registrationUrl: "#" },
        { name: "IoT Innovation", description: "Build connected devices and systems", registrationUrl: "#" },
        { name: "VLSI Design", description: "Design integrated circuits", registrationUrl: "#" },
        { name: "Embedded Systems", description: "Program microcontrollers for real-world applications", registrationUrl: "#" },
    ],
    mech: [
        { name: "CAD Modeling", description: "3D modeling and design competition", registrationUrl: "#" },
        { name: "Robo Race", description: "Build and race autonomous robots", registrationUrl: "#" },
        { name: "Aero Design", description: "Design aerodynamic models", registrationUrl: "#" },
        { name: "Thermal Analysis", description: "Solve heat transfer problems", registrationUrl: "#" },
    ],
    civil: [
        { name: "Bridge Building", description: "Design and construct model bridges", registrationUrl: "#" },
        { name: "Surveying Contest", description: "Land surveying and mapping competition", registrationUrl: "#" },
        { name: "Concrete Mix", description: "Design optimal concrete mixtures", registrationUrl: "#" },
        { name: "Urban Planning", description: "Plan sustainable city layouts", registrationUrl: "#" },
    ],
    aids: [
        { name: "ML Challenge", description: "Build machine learning models for real datasets", registrationUrl: "#" },
        { name: "Data Viz", description: "Create compelling data visualizations", registrationUrl: "#" },
        { name: "AI Quiz", description: "Test your AI and ML knowledge", registrationUrl: "#" },
        { name: "Kaggle Competition", description: "Compete in data science challenges", registrationUrl: "#" },
    ],
}

// Arts events for DRISHYA
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

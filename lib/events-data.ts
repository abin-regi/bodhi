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
    { name: "Classical Dance", description: "Showcase your classical dance skills - Bharatanatyam, Kathak, and more", registrationUrl: "#" },
    { name: "Western Dance", description: "Contemporary, hip-hop, and freestyle dance competition", registrationUrl: "#" },
    { name: "Group Dance", description: "Team dance performance with creative choreography", registrationUrl: "#" },
    { name: "Solo Singing", description: "Showcase your vocal talent - any genre welcome", registrationUrl: "#" },
    { name: "Band Performance", description: "Battle of the bands - rock, jazz, fusion", registrationUrl: "#" },
    { name: "Instrumental", description: "Solo instrumental performance competition", registrationUrl: "#" },
    { name: "Drama", description: "Theatrical performance and stage play", registrationUrl: "#" },
    { name: "Mime", description: "Express without words - mime and acting", registrationUrl: "#" },
    { name: "Stand-up Comedy", description: "Make the audience laugh with your wit", registrationUrl: "#" },
    { name: "Painting", description: "On-the-spot painting competition", registrationUrl: "#" },
    { name: "Photography", description: "Capture moments - theme-based photography", registrationUrl: "#" },
    { name: "Fashion Show", description: "Walk the ramp with style and creativity", registrationUrl: "#" },
]

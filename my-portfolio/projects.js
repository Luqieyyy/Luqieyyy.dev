/**
 * PROJECTS DATA
 * Edit data ni untuk update projects
 * 
 * Fields:
 * - title: Project name
 * - description: Short description
 * - longDescription: Detailed description
 * - category: Type of project
 * - tech: Array of technologies used
 * - features: Array of key features
 * - link: Live project URL (optional)
 * - github: GitHub repo URL (optional)
 * - images: Array of project images
 */

const projects = [
    {   
        id: 0,
        slug: 'project-one',
        title: 'HUSSEINRENT',
        description: 'HusseinRent is a dedicated rental platform designed specifically for UTHM students to find rooms, houses, and hostels around Parit Raja with ease. The system simplifies the entire rental process by allowing students to browse verified listings, check real-time availability, compare prices, and contact owners directly. For owners, HusseinRent provides a convenient dashboard to manage properties, update vacancy status, and reach a larger student audience.',
        longDescription: 'Built with a modern interface and fast search features, HusseinRent aims to solve common issues such as outdated rental information, scattered listings across social media, and difficulty verifying property details. By centralizing all rental options into one platform, HusseinRent improves transparency, accessibility, and convenience for both students and landlords.',
        category: 'Full-Stack Development',
        tech: ['Tailwind CSS', 'Supabase', 'GoogleMaps API', 'Next.js'],
        features: [
            'Property Listing Directory',
            'Real-Time Availability',
            'Smart Search & Filters',
            'Interactive Map View',
            'Property Detail Page',
            'Direct Contact'
        ],
        year: '2025',
        client: 'Kolej Kediaman Luar Kampus UTHM',
        link: 'https://husseinrent.vercel.app',
        github: 'https://github.com/Luqieyyy/Husseinrent',
        images: [
            "/project-1-1.jpg",
            "/project-1-2.jpg",
            "/project-1-3.jpg",
            "/project-1-4.jpg",
            "/project-1-5.jpg",
        ],
    },
    {
        id: 1,
        slug: 'project-two',
        title: 'IoT RFID Livestock System',
        description: 'IoT-enabled RFID system for livestock farming management',
        longDescription: 'An innovative IoT solution for livestock identification and management using RFID technology with PN532 and ESP32. Enables automatic tracking, health monitoring, and data analytics for farm management.',
        category: 'IoT & Embedded Systems',
        tech: ['ESP32', 'PN532 RFID', 'Next.js', 'Firebase', 'Flutter', "RFID", "IoT"],
        features: [
            'RFID-based livestock identification',
            'Real-time tracking and monitoring',
            'Health data analytics',
            'Automated feeding schedule',
            'Cloud-based data storage',
            'Mobile app integration'
        ],
        year: '2025',
        client: 'Research Project - UTHM',
        link: '',
        github: 'https://github.com/Luqieyyy/rfid-livestock-monitoring-system',
        images: [
            "/project-2-1.jpg",
            "/project-2-2.jpg",
            "/project-2-3.jpg",
            "/project-2-4.jpg",
            "/project-2-5.jpg",
        ],
        
    },
    {
        id: 2,              
        slug: 'project-three',
        title: 'Taska-Attendance-System-integrated-with-NFC',
        description: 'The Taska Attendance System Integrated with NFC is an automated child check-in and check-out solution that leverages Near Field Communication (NFC) technology to streamline attendance tracking in childcare centres (taska). Each child is assigned a unique NFC tag or card, which parents or guardians simply tap on an NFC reader when dropping off or picking up their child. This instantaneous tap interaction eliminates the need for manual signatures or cumbersome registration forms.',
        longDescription: '',
        category: 'IoT ',
        tech: ['NFC', 'Embedded Systems', 'IoT', 'JavaFX', 'MySQL', 'Arduino UNO R3'],
        features: [
            'Creative short-form video content',
            'Viral marketing strategies',
            'Audience engagement optimization',
            'Performance analytics tracking',
            'Brand storytelling',
            'Launch campaign coordination'
        ],
        year: '2024',
        client: 'Taska BEE Caliph',
        link: '',
        github: 'https://github.com/Luqieyyy/Taska-Attendance-System-integrated-with-NFC',
        images: [
            "/project-3-1.jpg",
            "/project-3-2.jpg",
            "/project-3-3.jpg",
            "/project-3-4.jpg",
            "/project-3-5.jpg",
        ],
    },
];

export default projects;
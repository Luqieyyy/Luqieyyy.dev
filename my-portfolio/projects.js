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
        title: 'HusseinRent',
        tagline: 'Rental platform for UTHM students to find verified rooms, houses, and hostels around Parit Raja.',
        description: 'A modern student-focused rental platform for UTHM students to find verified rooms, houses, and hostels around Parit Raja. Reduces rental scam risks through structured listings, role-based access, and real-time availability tracking.',
        longDescription: 'HusseinRent supports multiple roles including students, landlords, and administrators. Students can browse trusted listings, compare prices, estimate distance to campus, and communicate efficiently with landlords. The platform was built with strong emphasis on usability, data security, and scalability — using Supabase for authentication, Row-Level Security, and storage, combined with Google Maps API for proximity-based discovery.',
        category: 'Full-Stack Development',
        tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Google Maps API', 'Vercel'],
        features: [
            'Property Listing Directory',
            'Real-Time Availability',
            'Smart Search & Filters',
            'Interactive Map View with POIs',
            'Admin approval workflow for landlords',
            'Direct Contact with Landlords'
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
        title: 'FarmSense – RFID Livestock Monitoring',
        tagline: 'End-to-end IoT system for livestock tracking, health monitoring, and farm management using RFID and ESP32.',
        description: 'An end-to-end IoT and cloud-based livestock management ecosystem using RFID identification, ESP32 microcontrollers, and Firebase. Enables automated animal tracking, health monitoring, and digital farm record management.',
        longDescription: 'FarmSense bridges hardware and cloud through real-time data synchronization between embedded devices and a centralized dashboard. The system uses PN532 RFID modules with ESP32 for livestock identification at field level, Firebase for cloud storage, and a Next.js dashboard for monitoring. A Flutter mobile app enables farm managers to receive alerts and view health analytics remotely. Focused on scalability, reliability, and field deployment feasibility.',
        category: 'IoT & Embedded Systems',
        tech: ['ESP32', 'PN532 RFID', 'Next.js', 'Firebase', 'Flutter', 'IoT'],
        features: [
            'RFID-based livestock identification',
            'Real-time tracking and monitoring',
            'Health data analytics dashboard',
            'Cloud-based data storage via Firebase',
            'Mobile app for remote management',
            'Marketplace view for available livestock'
        ],
        year: '2025',
        client: 'Research Project – Universiti Tun Hussein Onn Malaysia',
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
        title: 'Taska NFC Attendance System',
        tagline: 'Automated child check-in/check-out for childcare centres using NFC cards and Arduino.',
        description: 'An IoT-based attendance management system for childcare centres using NFC technology. Parents tap NFC cards to check in/out their child — eliminating manual forms and enabling real-time centralized tracking.',
        longDescription: 'Built for Taska BEE Caliph, this system integrates Arduino UNO R3 with PN532 NFC modules to record attendance automatically. A JavaFX desktop application handles the UI and data management, while MySQL provides secure local storage. The system reduces manual errors, speeds up check-in flows, and gives administrators a clean interface for daily attendance reports.',
        category: 'IoT & Embedded Systems',
        tech: ['Java', 'JavaFX', 'MySQL', 'Arduino UNO R3', 'PN532 NFC', 'IoT'],
        features: [
            'NFC-based child check-in/check-out',
            'Real-time attendance recording',
            'JavaFX desktop application',
            'Secure local storage with MySQL',
            'Automated check-in/out process',
            'Reduced manual errors and improved accuracy'
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
    {
        id: 3,
        slug: 'project-four',
        title: 'SmartRouteX',
        tagline: 'AI-powered micro-parcel delivery optimization platform for urban SMEs with Hub & Zone architecture.',
        description: 'An AI-powered logistics optimization platform designed to help urban SMEs manage micro-parcel deliveries more efficiently. Integrates Hub & Zone architecture with intelligent route optimization to reduce delivery time, operational cost, and rider workload imbalance.',
        longDescription: 'SmartRouteX focuses on real-time data visibility, structured parcel management, and scalable enterprise design suitable for growing logistics operations. The backend is built with FastAPI for high-performance API processing, PostgreSQL for relational data management, and Next.js for the admin dashboard. The AI-assisted route optimization logic dynamically assigns deliveries based on zone density and rider availability.',
        category: 'Full-Stack Development',
        tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'Python', 'AI/ML'],
        features: [
            'Hub & Zone architecture for parcel management',
            'AI-assisted route optimization logic',
            'Rider tracking & assignment workflow',
            'Parcel CRUD and real-time status updates',
            'Admin dashboard with delivery analytics',
            'Scalable design for SME logistics operations'
        ],
        year: '2026',
        client: 'Personal Project',
        link: '',
        github: '',
        images: [
            "/project-4-1.jpg",
            "/project-4-2.jpg",
            "/project-4-3.jpg",
            "/project-4-4.jpg",
            "/project-4-5.jpg",
        ],
    },
    {
        id: 4,
        slug: 'project-five',
        title: 'Cloud-Based Restaurant POS & IoT Attendance',
        tagline: 'Production-deployed POS system for a local restaurant with real-time orders, role-based access, and IoT staff attendance.',
        description: 'A production-ready cloud-based Point of Sale system for a local restaurant, featuring real-time order management, role-based access, sales analytics, and an integrated IoT staff attendance system using ESP32 and Firebase.',
        longDescription: 'This system is actively deployed and used daily in restaurant operations. Built with Flutter for the mobile interface and Firebase Firestore for real-time sync, it supports four roles: admin, waiter, kitchen, and receptionist. The kitchen display system divides orders into three sections (soup, drinks, main dishes) so staff can track and complete each item. The IoT attendance module uses ESP32 with Firebase RTDB to automate staff check-in/check-out with centralized cloud updates.',
        category: 'Full-Stack & IoT',
        tech: ['Flutter', 'Firebase', 'Firestore', 'Firebase RTDB', 'ESP32', 'Next.js'],
        features: [
            'Role-based access (admin, waiter, kitchen, receptionist)',
            'Real-time order management with Firestore',
            'Kitchen display system with section-based view',
            'Payment tracking (Cash & QR)',
            'Sales analytics dashboard',
            'IoT staff attendance via ESP32 & Firebase RTDB'
        ],
        year: '2025',
        client: 'Freelance – Local Restaurant',
        link: '',
        github: '',
        images: [
            {
                src: "/project-5-1.jpg",
                caption: "Admin Dashboard – Sales Analytics",
                description: "Admin dashboard providing real-time sales insights including total revenue, orders, active tables, and average ticket size. Features payment split (Cash/QR), sales trends, and top-selling items to support better business decisions."            },
            {
                src: "/project-5-2.jpg",
                caption: "Kitchen Display System",
                description: "Kitchen Display System (KDS) that organizes incoming orders by table and category. Allows kitchen staff to track preparation status, monitor elapsed time, and mark items as completed in real-time."            },
            {
                src: "/project-5-3.jpg",
                caption: "Table Map & Cashier App (Flutter)",
                description: "Flutter-based cashier and table management app with a color-coded table map. Enables staff to assign orders to tables, view active tickets, manage payments (Cash/QR), and streamline order flow between front desk and kitchen."            },
            {
                src: "/project-5-4.jpg",
                caption: "ESP32 RFID Attendance System",
                description: "IoT-based staff attendance system using ESP32 and RFID. Employees check in and out using RFID cards, with real-time data synced to Firebase. Includes automated time tracking, duplicate scan handling, and shift-based attendance monitoring."            },
            {
                src: "/project-5-5.jpg",
                caption: "Bluetooth Printer Integration",
                description: "Integrated Bluetooth thermal printer for instant receipt generation. Automatically prints itemized bills directly from the system after payment confirmation, improving checkout speed and accuracy."            },
        ],
    },
    {
        id: 5,
        slug: 'project-six',
        title: 'Real-Time Face Emotion Detection (CNN)',
        tagline: 'Real-time facial emotion recognition from live webcam using CNN, TensorFlow, and OpenCV.',
        description: 'A real-time facial emotion recognition system using Convolutional Neural Networks built with TensorFlow/Keras and OpenCV. Detects faces from live webcam input and classifies emotions into 7 categories.',
        longDescription: 'The system implements deep learning model training, image preprocessing, and a real-time inference pipeline using Python. It classifies emotions into Angry, Sad, Fear, Surprise, Neutral, and Disgust from live video feeds. Focused on improving model accuracy and optimizing performance for real-time constraints. Built for training and research purposes.',
        category: 'AI & Machine Learning',
        tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'CNN'],
        features: [
            'Real-time webcam-based emotion detection',
            'CNN model trained on facial expression dataset',
            'Classifies 7 emotion categories',
            'Image preprocessing pipeline',
            'Real-time inference optimization',
            'Deep learning model training workflow'
        ],
        year: '2025',
        client: 'Personal Research Project',
        link: '',
        github: '',
        video: '/project-6.mp4',
        images: [
            "/project-6-1.jpg",
            "/project-6-2.jpg",
            "/project-6-3.jpg",
        ],
    },
    {
        id: 6,
        slug: 'project-seven',
        title: 'MabarQueue',
        tagline: 'Real-time queue system for streamers playing live with viewers — no more Excel, all synced via Firebase.',
        description: 'A real-time queue management system for streamers who play games with their viewers. Viewers join the queue automatically, the streamer manages sessions without manual Excel tracking, and a live preview shows who is next — all synced in real-time.',
        longDescription: 'MabarQueue was born from a personal need — managing viewer queues during live game sessions was messy and unorganized. Built with Next.js and Firebase Firestore for real-time updates, the system integrates with Sociabuzz webhooks to automatically validate queue entries based on viewer support activity. Currently serving around 50 active users managing mabar sessions. The UI keeps it simple: viewer joins queue automatically, streamer sees live preview of the next person up, and all updates happen in real-time without page refresh.',
        category: 'Full-Stack Development',
        tech: ['Next.js', 'Firebase', 'Firestore', 'Sociabuzz Webhook', 'JavaScript'],
        features: [
            'Automatic viewer queue via Sociabuzz webhook',
            'Real-time queue updates with Firestore',
            'Live preview of upcoming queue order',
            'Streamer session management dashboard',
            'No manual Excel tracking required',
            'Supports ~50 active concurrent users'
        ],
        year: '2025',
        client: 'Personal Project',
        link: '',
        github: '',
        images: [
            "/project-7-1.jpg",
            "/project-7-2.jpg",
            "/project-7-3.jpg",
            "/project-7-4.jpg",
            "/project-7-5.jpg",
        ],
    },
    {
        id: 7,
        slug: 'project-eight',
        title: 'Smart Duck Coop IoT Monitoring',
        tagline: 'ESP32-based IoT system to monitor a duck coop remotely — motion detection, camera trigger, and Telegram alerts.',
        description: 'An IoT system for remote duck coop monitoring using ESP32. Detects motion outside the coop, captures images via ESP32-CAM, triggers a flash deterrent against wildlife intruders, and monitors internal environmental conditions — all accessible remotely.',
        longDescription: 'The system combines multiple sensors integrated with ESP32: a PIR motion sensor detects movement outside the coop and triggers the ESP32-CAM to capture a snapshot; a flash light deterrent activates for ~15 seconds to scare off wildlife. Inside the coop, a DHT sensor monitors temperature and humidity, while an MQ137 sensor tracks ammonia levels to ensure safe air quality for the ducks. All data is synced to the cloud and can be monitored remotely. The project involved real-world challenges like sensor noise, ESP32 device communication issues, and network configuration — demonstrating production-level IoT debugging and deployment.',
        category: 'IoT & Embedded Systems',
        tech: ['ESP32', 'ESP32-CAM', 'PIR Sensor', 'DHT Sensor', 'MQ137', 'Firebase', 'Telegram Bot'],
        features: [
            'PIR motion detection outside the coop',
            'ESP32-CAM auto-capture on motion trigger',
            'Flash light deterrent (15s) against intruders',
            'Temperature & humidity monitoring (DHT)',
            'Ammonia level monitoring (MQ137)',
            'Remote monitoring via Telegram bot'
        ],
        year: '2025',
        client: 'Personal IoT Research',
        link: '',
        github: '',
        images: [
            "/project-8-1.jpg",
            "/project-8-2.jpg",
            "/project-8-3.jpg",
            "/project-8-4.jpg",
            "/project-8-5.jpg",
        ],
    },
];

export default projects;

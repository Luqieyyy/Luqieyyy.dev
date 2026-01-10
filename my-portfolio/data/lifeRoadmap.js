/**
 * LIFE ROADMAP DATA
 * Edit data ni untuk update roadmap hidup kau
 * 
 * Fields:
 * - year: Tahun atau masa
 * - title: Tajuk milestone
 * - description: Cerita pasal milestone tu
 * - icon: Emoji untuk represent milestone
 * - image: Path ke gambar (optional) - letak dalam /public folder
 */

const lifeRoadmap = [
    {
        year: 'Jul 2022',
        title: 'Matriculation College',
        description: 'Malacca Matriculation College - Physical Sciences. Active student in Physical Science stream, represented practicum in KAKOM Football Tournament.',
        icon: '🎓',
        image: '/roadmap/matriculation.jpg' // Letak gambar dalam /public/roadmap/
    },
    {
        year: 'Oct 2023',
        title: 'University Journey Begins',
        description: 'Started Computer Science degree at Universiti Tun Hussein Onn Malaysia (UTHM). Diving deep into programming and software development.',
        icon: '🏫',
        image: '/roadmap/uthm.jpg'
    },
    {
        year: 'Aug 2024',
        title: 'First Job Experience',
        description: 'Part-Time Delivery Associate at Ninja Van Malaysia. Learned logistics operations and fast-paced work environment.',
        icon: '🏍️',
        image: '/roadmap/ninjavan.jpg'
    },
    {
        year: 'Dec 2024',
        title: 'Content Creator',
        description: 'Freelance Content Creator for MAMEE-Double Decker. Spearheaded digital content execution for Daebak Ramyeon Launch Campaign on TikTok.',
        icon: '🎬',
        image: '/roadmap/mamee.jpg'
    },
    {
        year: 'Feb 2025',
        title: 'IT Technician',
        description: 'IT Technician at Haynik, Johor Bahru. Gained hands-on experience in technical support and PC setup.',
        icon: '🔧',
        image: '/roadmap/haynik.jpg'
    },
    {
        year: 'Aug 2025',
        title: 'POS System Developer',
        description: 'Developed complete Point-of-Sale system for restaurant. Covering order management, KDS, cashier interface, and admin dashboard.',
        icon: '💻',
        image: '/roadmap/pos.jpg'
    },
    {
        year: 'Oct 2025',
        title: 'Research Assistant',
        description: 'Research Assistant at UTHM. Contributing to IoT-enabled RFID Livestock Farming System using PN532 and ESP32.',
        icon: '🔬',
        image: '/roadmap/research.jpg'
    },
    {
        year: 'Present',
        title: 'Building The Future',
        description: 'Full-Stack Developer | AI Enthusiast | Problem Solver. Creating innovative solutions and learning cutting-edge technologies.',
        icon: '🚀',
        image: '/roadmap/future.jpg'
    }
];

export default lifeRoadmap;

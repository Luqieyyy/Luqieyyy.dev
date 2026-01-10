/**
 * SKILLS DATA
 * Edit data ni untuk update skills kau
 * 
 * Fields:
 * - icon: Emoji (fallback jika takde image)
 * - image: Path ke icon/image (optional) - letak dalam /public/skills/
 * - title: Nama skill area
 * - description: Detail pasal skill tu
 */

const skills = [
    {
        icon: '🎨',
        image: '/skills/frontend-icon.png',
        title: 'Frontend Development',
        description: 'Creating beautiful, responsive interfaces with React, Next.js, and modern CSS'
    },
    {
        icon: '⚙️',
        image: '/skills/backend-icon.png',
        title: 'Backend Development',
        description: 'Building robust APIs and services with Node.js, Python, and databases'
    },
    {
        icon: '📱',
        image: '/skills/mobile-icon.png',
        title: 'Mobile Development',
        description: 'Developing cross-platform mobile apps with React Native and Flutter'
    },
    {
        icon: '🎯',
        image: '/skills/uiux-icon.png',
        title: 'UI/UX Design',
        description: 'Designing user-centered experiences with Figma and modern design principles'
    }
];

export default skills;

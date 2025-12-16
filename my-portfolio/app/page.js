'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import projects from '@/projects';
import Navbar from '@/components/Navbar';

gsap.registerPlugin(ScrollTrigger);

// Life Roadmap Data
const lifeRoadmap = [
    {
        year: '2003',
        title: 'The Beginning',
        description: 'Born in Malaysia. The journey begins.',
        icon: '👶'
    },
    {
        year: '2015',
        title: 'First Code',
        description: 'Wrote my first line of code. Fell in love with programming.',
        icon: '💻'
    },
    {
        year: '2018',
        title: 'High School',
        description: 'Explored web development and built my first website.',
        icon: '🎓'
    },
    {
        year: '2021',
        title: 'University',
        description: 'Started degree in Computer Science. Learning never stops.',
        icon: '🏫'
    },
    {
        year: '2023',
        title: 'First Project',
        description: 'Launched my first real-world project. Dream becoming reality.',
        icon: '🚀'
    },
    {
        year: 'Now',
        title: 'Building Dreams',
        description: 'Creating amazing digital experiences. The adventure continues...',
        icon: '✨'
    }
];

export default function Home() {
    const mainRef = useRef(null);
    const navbarRef = useRef(null);
    const horizontalRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero text animation with stagger
            const heroTl = gsap.timeline();
            
            heroTl.from('.hero-greeting', {
                opacity: 0,
                y: -30,
                duration: 0.8,
                ease: 'power3.out',
            })
            .from('.hero-title', {
                opacity: 0,
                y: 100,
                duration: 1.2,
                ease: 'power4.out',
            }, '-=0.4')
            .from('.hero-subtitle', {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out',
            }, '-=0.6')
            .from('.hero-cta', {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power2.out',
            }, '-=0.4')
            .from('.scroll-indicator', {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: 'power2.out',
            }, '-=0.2');

            // Scroll indicator bounce animation
            gsap.to('.scroll-indicator', {
                y: 10,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'
            });

            // About intro section animation
            gsap.from('.about-intro-text', {
                opacity: 0,
                y: 80,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.about-intro',
                    start: 'top 70%',
                    toggleActions: 'play none none none',
                }
            });

            // Horizontal scroll for life roadmap
            const horizontalSection = document.querySelector('.horizontal-scroll-container');
            const horizontalContent = document.querySelector('.horizontal-scroll-content');
            
            if (horizontalSection && horizontalContent) {
                const scrollWidth = horizontalContent.scrollWidth - window.innerWidth;
                
                gsap.to(horizontalContent, {
                    x: -scrollWidth,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: horizontalSection,
                        start: 'top top',
                        end: () => `+=${scrollWidth}`,
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                    }
                });

                // Animate each roadmap item as it comes into view
                gsap.utils.toArray('.roadmap-item').forEach((item, i) => {
                    gsap.from(item, {
                        opacity: 0,
                        scale: 0.8,
                        y: 50,
                        duration: 0.5,
                        scrollTrigger: {
                            trigger: item,
                            containerAnimation: gsap.to(horizontalContent, { x: -scrollWidth }),
                            start: 'left 80%',
                            toggleActions: 'play none none reverse',
                        }
                    });
                });
            }

            // Skills section - slide from left and right
            gsap.from('.skill-left', {
                x: -200,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.skills-section',
                    start: 'top 70%',
                    toggleActions: 'play none none none',
                }
            });

            gsap.from('.skill-right', {
                x: 200,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.skills-section',
                    start: 'top 70%',
                    toggleActions: 'play none none none',
                }
            });

            // Project cards with alternating slide animation
            gsap.utils.toArray('.project-card').forEach((card, i) => {
                const direction = i % 2 === 0 ? -100 : 100;
                gsap.from(card, {
                    opacity: 0,
                    x: direction,
                    rotation: i % 2 === 0 ? -5 : 5,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                });
            });

            // Navbar scroll effect
            ScrollTrigger.create({
                trigger: '.hero-section',
                start: 'bottom top',
                end: 'bottom top',
                onEnter: () => navbarRef.current?.classList.add('is-scrolled'),
                onLeaveBack: () => navbarRef.current?.classList.remove('is-scrolled'),
            });

            // Parallax effect for hero background
            gsap.to('.hero-bg-gradient', {
                yPercent: 50,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-section',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                }
            });

        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="landing-page">
            {/* Navbar */}
            <div ref={navbarRef} className="navbar-container">
                <Navbar />
            </div>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg-gradient"></div>
                <div className="hero-content">
                    <span className="hero-greeting">Assalamualaikum, I'm</span>
                    <h1 className="hero-title">LuqieyyyDev</h1>
                    <p className="hero-subtitle">
                        Muhammad Luqman Bin Bahrin<br />
                        <span className="typing-text">Software Developer • Creative Thinker • Problem Solver</span>
                    </p>
                    <div className="hero-cta link">
                        <span>&#8594;</span>
                        <Link href="/projects">View My Work</Link>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <span>Scroll Down</span>
                    <div className="scroll-arrow">↓</div>
                </div>
            </section>

            {/* About Intro Section */}
            <section className="about-intro">
                <div className="about-intro-text">
                    <h2>My Story</h2>
                    <p>
                        Every developer has a journey. Mine started with curiosity and evolved into passion.
                        Let me take you through the chapters of my life...
                    </p>
                </div>
            </section>

            {/* Horizontal Scroll - Life Roadmap */}
            <section className="horizontal-scroll-container" ref={horizontalRef}>
                <div className="horizontal-scroll-content">
                    <div className="roadmap-intro">
                        <h2>Life Roadmap</h2>
                        <p>Scroll to explore my journey →</p>
                    </div>
                    {lifeRoadmap.map((item, index) => (
                        <div key={index} className="roadmap-item">
                            <div className="roadmap-icon">{item.icon}</div>
                            <div className="roadmap-year">{item.year}</div>
                            <h3 className="roadmap-title">{item.title}</h3>
                            <p className="roadmap-desc">{item.description}</p>
                            <div className="roadmap-line"></div>
                        </div>
                    ))}
                    <div className="roadmap-end">
                        <h2>To Be Continued...</h2>
                        <p>The best is yet to come 🚀</p>
                    </div>
                </div>
            </section>

            {/* Skills Section with slide animations */}
            <section className="skills-section">
                <h2 className="section-title">What I Do</h2>
                <div className="skills-grid">
                    <div className="skill-card skill-left">
                        <div className="skill-icon">🎨</div>
                        <h3>Frontend Development</h3>
                        <p>Creating beautiful, responsive interfaces with React, Next.js, and modern CSS</p>
                    </div>
                    <div className="skill-card skill-right">
                        <div className="skill-icon">⚙️</div>
                        <h3>Backend Development</h3>
                        <p>Building robust APIs and services with Node.js, Python, and databases</p>
                    </div>
                    <div className="skill-card skill-left">
                        <div className="skill-icon">📱</div>
                        <h3>Mobile Development</h3>
                        <p>Developing cross-platform mobile apps with React Native and Flutter</p>
                    </div>
                    <div className="skill-card skill-right">
                        <div className="skill-icon">🎯</div>
                        <h3>UI/UX Design</h3>
                        <p>Designing user-centered experiences with Figma and modern design principles</p>
                    </div>
                </div>
            </section>

            {/* Projects Preview Section */}
            <section className="projects-preview">
                <h2 className="section-title">Featured Work</h2>
                <div className="project-grid">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.slug}`}
                            className="project-card"
                        >
                            <div className="project-card-image">
                                <img src={project.images[0]} alt={project.title} />
                            </div>
                            <div className="project-card-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="link">
                                    <span>View Project</span>
                                    <span>&#8594;</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="contact-cta">
                <h2>Let's Work Together</h2>
                <p>Have a project in mind? Let's create something amazing.</p>
                <Link href="/contact" className="cta-button">
                    <span>Get In Touch</span>
                    <span className="cta-arrow">→</span>
                </Link>
            </section>
        </div>
    );
}
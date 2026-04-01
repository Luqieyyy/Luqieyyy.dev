'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const ROLES = ['Full-Stack Developer', 'AI/ML Engineer', 'IoT Enthusiast'];

export default function HeroSection() {
    const [activeRole, setActiveRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveRole(prev => (prev + 1) % ROLES.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-bg-gradient"></div>
            <div className="hero-content">

                <span className="hero-greeting">Hello, I'm</span>

                <h1 className="hero-title">
                    LuqieyyyDev<span className="hero-cursor">|</span>
                </h1>

                <div className="hero-roles">
                    {ROLES.map((role, i) => (
                        <div
                            key={role}
                            className={`hero-role ${i === activeRole ? 'is-active' : 'is-blurred'}`}
                        >
                                {i === activeRole && <div className="focus-frame" />}
                            <span className="role-text">{role}</span>
                        </div>
                    ))}
                </div>

                <p className="hero-subtitle">
                    Muhammad Luqman Bin Bahrin
                </p>
                <span className="typing-text">
                    Aspiring Software Engineer | Full-Stack &amp; Mobile Developer | Passion in Flutter, Firebase, IoT &amp; AI-Driven Solutions
                </span>

                <Link href="/projects" className="hero-cta">
                    <span>View My Work</span>
                    <span className="hero-cta-arrow">→</span>
                </Link>
            </div>

            <div className="scroll-indicator">
                <span>Scroll Down</span>
                <div className="scroll-arrow">↓</div>
            </div>
        </section>
    );
}

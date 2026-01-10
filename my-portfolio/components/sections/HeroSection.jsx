/**
 * HERO SECTION
 * First section yang user nampak
 * 
 * Edit ni untuk:
 * - Tukar greeting
 * - Tukar nama/title
 * - Tukar subtitle/role
 * - Tukar photo (ganti luqman.jpg dalam public folder)
 */

'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-bg-gradient"></div>
            <div className="hero-content">
                {/* Profile Photo */}
                <div className="hero-image-container">
                    <Image 
                        src="/luqman.jpg" 
                        alt="Muhammad Luqman Bin Bahrin"
                        width={200}
                        height={200}
                        className="hero-image"
                        priority
                    />
                </div>

                <span className="hero-greeting">Hello, I'm</span>
                <h1 className="hero-title">LuqieyyyDev</h1>
                <p className="hero-subtitle">
                    Muhammad Luqman Bin Bahrin<br />
                    <span className="typing-text">Software Developer • Final Year Student • Problem Solver </span>
                </p>
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

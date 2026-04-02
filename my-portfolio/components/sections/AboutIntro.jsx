/**
 * ABOUT ME SECTION
 * Two-column layout — text left, photo right
 *
 * Letak gambar kau dalam /public/luqman.jpg
 * Tukar bio text bawah ikut kau punya cerita
 */

'use client';
import Image from 'next/image';

export default function AboutIntro() {
    return (
        <section id="about" className="about-intro">
            <div className="about-intro-inner">

                {/* Left — Text */}
                <div className="about-intro-text">
                    <h2 className="about-heading">
                        <span className="about-icon">⚡</span> About Me
                    </h2>

                    <p>
                        Hey! I'm <strong>Muhammad Luqman</strong>, a Software Engineering student at UTHM Malaysia
                        who builds real-world systems — not just academic prototypes.
                    </p>

                    <p>
                        I started with curiosity about how things work on screens, and that grew into
                        building full-stack web apps, mobile apps with{' '}
                        <span className="about-highlight">Flutter & Firebase</span>, and IoT systems
                        using <span className="about-highlight">ESP32</span>. I handle everything
                        independently — from system design to deployment.
                    </p>

                    <p>
                        Currently focused on shipping production-ready systems — a{' '}
                        <span className="about-highlight">cloud-based POS</span> for a local restaurant,
                        an <span className="about-highlight">RFID livestock monitoring system</span>{' '}
                        for UTHM research, and an{' '}
                        <span className="about-highlight">AI-powered delivery platform</span>.
                        I'm passionate about building things that solve real problems.
                    </p>

                    <p>
                        When I'm not coding, I'm watching football, playing games, or figuring out
                        the next system to build. 🚀
                    </p>
                </div>

                {/* Right — Photo */}
                <div className="about-photo-wrapper">
                    <div className="about-photo-dots" />
                    <div className="about-photo-circle">
                        <Image
                            src="/luqman.jpg"
                            alt="Muhammad Luqman"
                            fill
                            sizes="(max-width: 768px) 260px, 340px"
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

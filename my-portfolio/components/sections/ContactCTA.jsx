/**
 * CONTACT CTA SECTION
 * "Keep In Touch" dengan LinkedIn, Email, Resume buttons
 *
 * Update links ikut kau punya:
 * - LinkedIn: tukar href ke profile kau
 * - Email: tukar mailto address
 * - Resume: letak /resume.pdf dalam public folder
 */

'use client';

export default function ContactCTA() {
    return (
        <section className="contact-cta">
            <h2 className="contact-cta-title">Keep In Touch.</h2>
            <p className="contact-cta-sub">
                I'm currently open for freelance projects & collaborations.<br />
                Feel free to get in touch and talk more about your ideas.
            </p>
            <div className="contact-cta-buttons">
                <a
                    href="https://www.linkedin.com/in/muhammad-luqman-bin-bahrin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-social-btn"
                >
                    <span className="cta-social-icon">in</span>
                    LinkedIn
                </a>
                <a
                    href="mailto:luqmanbahrin2004@gmail.com"
                    className="cta-social-btn"
                >
                    <span className="cta-social-icon">✉</span>
                    Email
                </a>
                <a
                    href="https://github.com/Luqieyyy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-social-btn"
                >
                    <span className="cta-social-icon">⌥</span>
                    GitHub
                </a>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-social-btn"
                >
                    <span className="cta-social-icon">📄</span>
                    Resume
                </a>
            </div>
        </section>
    );
}

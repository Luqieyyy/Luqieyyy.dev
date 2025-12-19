/**
 * CONTACT CTA SECTION
 * Call-to-action section untuk contact
 * 
 * Edit ni untuk tukar text atau link
 */

'use client';
import Link from 'next/link';

export default function ContactCTA() {
    return (
        <section className="contact-cta">
            <h2>Let's Work Together</h2>
            <p>Have a project in mind? Let's create something amazing.</p>
            <Link href="/contact" className="cta-button">
                <span>Get In Touch</span>
                <span className="cta-arrow">→</span>
            </Link>
        </section>
    );
}

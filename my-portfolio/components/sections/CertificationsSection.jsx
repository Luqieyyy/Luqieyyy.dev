/**
 * CERTIFICATIONS SECTION
 * Display all certifications and achievements
 * 
 * Data ada dalam: /data/certifications.js
 * Logos: Letak dalam /public/certifications/ folder
 */

'use client';
import certifications from '@/data/certifications';
import Image from 'next/image';

export default function CertificationsSection() {
    return (
        <section className="certifications-section">
            <h2 className="section-title">Licenses & Certifications</h2>
            <div className="certifications-grid">
                {certifications.map((cert, index) => (
                    <div key={index} className="cert-card" data-color={cert.color}>
                        <div className="cert-logo-container" style={{ backgroundColor: `${cert.color}20` }}>
                            {cert.logo ? (
                                <Image 
                                    src={cert.logo} 
                                    alt={`${cert.issuer} logo`}
                                    width={60}
                                    height={60}
                                    className="cert-logo"
                                    style={{ objectFit: 'contain' }}
                                />
                            ) : (
                                <span style={{ color: cert.color }}>{cert.icon}</span>
                            )}
                        </div>
                        <div className="cert-content">
                            <h3 className="cert-title">{cert.title}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                            <span className="cert-date">{cert.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

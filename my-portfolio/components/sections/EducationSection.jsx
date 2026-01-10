/**
 * EDUCATION SECTION
 * Display educational background
 * 
 * Logos: Letak logo dalam /public/education/ folder
 * - uthm-logo.png
 * - matrik-logo.png
 */

'use client';
import Image from 'next/image';

const education = [
    {
        school: 'Universiti Tun Hussein Onn Malaysia',
        degree: 'Bachelor of Computer Science',
        period: 'Oct 2023 - Feb 2027',
        location: 'Johor, Malaysia',
        highlights: ['Software Engineering', 'AI & Machine Learning', 'Full-Stack Development'],
        logo: '/education/uthm-logo.png',
        icon: '🏛️',
        color: '#1e3a8a'
    },
    {
        school: 'Malacca Matriculation College',
        degree: 'Matriculation (Science Stream)',
        period: 'Jul 2022 - May 2023',
        location: 'Malacca, Malaysia',
        highlights: ['Physical Sciences', 'KAKOM Football Tournament Representative', 'Class PAL Leader'],
        logo: '/education/matrik-logo.png',
        icon: '🎓',
        color: '#7c3aed'
    }
];

export default function EducationSection() {
    return (
        <section className="education-section">
            <h2 className="section-title">Education</h2>
            <div className="education-timeline">
                {education.map((edu, index) => (
                    <div key={index} className="education-card">
                        <div className="edu-logo-container" style={{ backgroundColor: `${edu.color}10` }}>
                            {edu.logo ? (
                                <Image 
                                    src={edu.logo} 
                                    alt={`${edu.school} logo`}
                                    width={100}
                                    height={100}
                                    className="edu-logo"
                                />
                            ) : (
                                <span style={{ fontSize: '3rem' }}>{edu.icon}</span>
                            )}
                        </div>
                        <div className="edu-content">
                            <h3 className="edu-school">{edu.school}</h3>
                            <h4 className="edu-degree">{edu.degree}</h4>
                            <div className="edu-meta">
                                <span className="edu-period">{edu.period}</span>
                                <span className="edu-location">📍 {edu.location}</span>
                            </div>
                            <ul className="edu-highlights">
                                {edu.highlights.map((highlight, i) => (
                                    <li key={i}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

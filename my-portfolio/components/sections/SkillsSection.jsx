/**
 * SKILLS SECTION
 * Section untuk display skills dengan slide animation
 * 
 * Data skills ada dalam: /data/skills.js
 * Edit data tu untuk update skills
 */

'use client';
import skills from '@/data/skills';

export default function SkillsSection() {
    return (
        <section className="skills-section">
            <h2 className="section-title">What I Do</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => {
                    // Alternating left/right animation classes
                    const animationClass = index % 2 === 0 ? 'skill-left' : 'skill-right';
                    
                    return (
                        <div key={index} className={`skill-card ${animationClass}`}>
                            <div className="skill-icon">{skill.icon}</div>
                            <h3>{skill.title}</h3>
                            <p>{skill.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

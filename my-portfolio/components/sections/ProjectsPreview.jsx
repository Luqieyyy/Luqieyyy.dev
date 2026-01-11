/**
 * PROJECTS PREVIEW SECTION
 * Section untuk display featured projects
 * 
 * Data projects ada dalam: /projects.js (root folder)
 * Edit data tu untuk update projects
 */

'use client';
import Link from 'next/link';
import projects from '@/projects';

export default function ProjectsPreview() {
    return (
        <section className="projects-preview">
            <h2 className="section-title">My Project</h2>
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
    );
}

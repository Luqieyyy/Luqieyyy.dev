'use client';
import Link from 'next/link';
import Image from 'next/image';
import projects from "@/projects";
import { useState } from 'react';

export default function Projects(){
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="projects-page">
            {/* Header Section */}
            <div className="projects-header">
                <Link href="/" className="back-to-home">
                    <span>←</span>
                    <span>Back to Home</span>
                </Link>
                <h1 className="projects-page-title">Featured Projects</h1>
                <p className="projects-page-subtitle">
                    Explore my latest work in full-stack development, IoT systems, and innovative solutions
                </p>
            </div>

            {/* Projects Grid */}
            <div className="projects-grid-container">
                {projects.map((project, index) => (
                    <Link 
                        key={project.id} 
                        href={`/projects/${project.slug}`}
                        className="project-grid-card"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Project Image */}
                        <div className="project-grid-image">
                            {project.images && project.images[0] && (
                                <Image 
                                    src={project.images[0]} 
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            )}
                            <div className="project-overlay">
                                <span className="view-project">View Project →</span>
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="project-grid-content">
                            <div className="project-grid-header">
                                <span className="project-grid-number">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="project-grid-category">
                                    {project.category}
                                </span>
                            </div>
                            
                            <h2 className="project-grid-title">{project.title}</h2>
                            <p className="project-grid-description">
                                {project.description.substring(0, 120)}...
                            </p>

                            {/* Tech Stack */}
                            {project.tech && project.tech.length > 0 && (
                                <div className="project-grid-tech">
                                    {project.tech.slice(0, 4).map((tech, i) => (
                                        <span key={i} className="tech-badge">{tech}</span>
                                    ))}
                                    {project.tech.length > 4 && (
                                        <span className="tech-badge more">+{project.tech.length - 4}</span>
                                    )}
                                </div>
                            )}

                            {/* Project Meta */}
                            <div className="project-grid-meta">
                                <span className="meta-year">{project.year}</span>
                                {project.client && (
                                    <>
                                        <span className="meta-dot">•</span>
                                        <span className="meta-client">{project.client}</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}   
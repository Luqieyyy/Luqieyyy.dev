'use client';
import Link from "next/link"
import { useEffect, useRef } from "react";
// 1. Import GSAP and ScrollTrigger
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register the plugin globally (important for Next.js app directory)
gsap.registerPlugin(ScrollTrigger);

export default function ProjectClient({ project, nextProject, prevProject }) {
    // 2. Use a ref to target the main container for GSAP context
    const mainRef = useRef(null);

    useEffect(() => {
        // 3. Create a GSAP Context to manage and clean up animations
        const ctx = gsap.context(() => {
            
            // --- A. Project Title/Description Animation ---
            // Animate the main content to fade in and slide up slightly
            gsap.from(".project-hero, h1, p", {
                opacity: 0,
                y: 50,
                duration: 1.2,
                stagger: 0.2, // Stagger the elements (hero, h1, p)
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".project-page",
                    start: "top 80%", // Start animation when the top of the page is 80% down the viewport
                    toggleActions: "play none none none"
                }
            });

            // --- B. Project Images Animation (Image Zoom Effect) ---
            // Loop through each image container
            gsap.utils.toArray(".project-img").forEach((container, i) => {
                const img = container.querySelector('img');

                // Animate the image itself (e.g., scale up a bit)
                gsap.fromTo(img, 
                    { scale: 1.05 }, // Start slightly scaled up
                    { 
                        scale: 1, // End at normal scale
                        ease: "none",
                        scrollTrigger: {
                            trigger: container,
                            start: "top bottom", // Start when the top of the image container enters the bottom of the viewport
                            end: "bottom top", // End when the bottom of the image container exits the top of the viewport
                            scrub: true, // Smoothly link the animation to the scroll position
                            //markers: true, // Uncomment for debugging
                        }
                    }
                );
                
                // Animate the container/image to fade in
                gsap.from(container, {
                    opacity: 0,
                    y: 100,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                });
            });

            // --- C. Next Project Footer Animation (Revealing Title) ---
            // Create a timeline for the footer reveal sequence
            const footerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".project-footer",
                    start: "top 85%", // Start when the footer enters the view
                    end: "bottom bottom",
                    // pin: true, // Optional: pin the footer briefly
                    toggleActions: "play none none none"
                }
            });

            footerTl.from(".project-footer h1", {
                y: 100,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }).from(".project-footer-copy p", {
                opacity: 0,
                duration: 0.5,
                ease: "power1.out"
            }, "-=0.4"); // Start the copy text slightly before the title animation finishes

        }, mainRef); // Pass the mainRef to the GSAP Context

        // 4. Existing Scroll Progress Bar Logic (Kept for function, though GSAP could also do this)
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            const progressBar = document.querySelector('.project-page-scroll-progress-bar');
            if (progressBar) {
                // Use a quick GSAP set or a simple width update for non-GSAP progress bar
                progressBar.style.width = `${scrollPercent}%`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup function for both GSAP context and scroll listener
        return () => {
            ctx.revert(); // GSAP cleanup
            window.removeEventListener('scroll', handleScroll);
        };
    }, [project]);

return (
        <div className="project-page" ref={mainRef}>
            {/* Fixed Navigation Bar */}
            <div className="project-nav">
                <Link href="/projects" className="link back-link">
                    <span>←</span>
                    <span>All Projects</span>
                </Link>

                <div className="project-page-scroll-progress"> 
                    <p>{project.title}</p>
                    <div className="project-page-scroll-progress-bar"></div>
                </div>

                <Link href={`/projects/${nextProject.slug}`} className="link next-link">
                    <span>Next</span>
                    <span>→</span>
                </Link>
            </div>
            
            {/* Hero Section */}
            <div className="project-hero-section">
                <div className="project-hero-content">
                    <span className="project-category">{project.category}</span>
                    <h1 className="project-hero-title">{project.title}</h1>
                    <p className="project-hero-description">{project.longDescription || project.description}</p>
                    
                    {/* Project Meta Info */}
                    <div className="project-meta">
                        {project.year && (
                            <div className="meta-item">
                                <span className="meta-label">Year</span>
                                <span className="meta-value">{project.year}</span>
                            </div>
                        )}
                        {project.client && (
                            <div className="meta-item">
                                <span className="meta-label">Client</span>
                                <span className="meta-value">{project.client}</span>
                            </div>
                        )}
                        {project.category && (
                            <div className="meta-item">
                                <span className="meta-label">Category</span>
                                <span className="meta-value">{project.category}</span>
                            </div>
                        )}
                    </div>

                    {/* Tech Stack */}
                    {project.tech && project.tech.length > 0 && (
                        <div className="project-tech-stack">
                            <h3>Technologies Used</h3>
                            <div className="tech-tags">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="project-actions">
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn primary">
                                <span>View Live</span>
                                <span>↗</span>
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn secondary">
                                <span>GitHub</span>
                                <span>→</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Key Features Section */}
            {project.features && project.features.length > 0 && (
                <div className="project-features-section">
                    <h2>Key Features</h2>
                    <div className="features-grid">
                        {project.features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <span className="feature-number">{String(index + 1).padStart(2, '0')}</span>
                                <p>{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Project Images Gallery */}
            <div className="project-images-section">
                <h2>Project Gallery</h2>
                <div className="project-images"> 
                    {project.images.map((image, index) => (
                        <div className="project-img" key={index}> 
                            <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Next Project Footer */}
            <div className="project-footer">
                <div className="project-footer-content">
                    <p className="footer-label">Next Project</p>
                    <Link href={`/projects/${nextProject.slug}`} className="footer-next-project">
                        <h2>{nextProject.title}</h2>
                        <p>{nextProject.description}</p>
                        <span className="footer-arrow">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

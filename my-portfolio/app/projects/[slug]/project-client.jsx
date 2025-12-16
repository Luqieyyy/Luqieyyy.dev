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
        <div className="project-page" ref={mainRef}> {/* Attach the ref here */}
            {/* ... Existing Project Navigation ... */}
            <div className="project-nav">
                <div className= "link">
                    <span>&#8592;</span>
                    <Link href= {`/projects/${prevProject.slug}`}>{prevProject.title}</Link>
                </div>

                <div className= "project-page-scroll-progress"> 
                    <p>{project.title}</p>
                    <div className="project-page-scroll-progress-bar"></div>
                </div>

                <div className="link">
                    <Link href= {`/projects/${nextProject.slug}`}>Next</Link>
                    <span>&#8594;&nbsp;</span>
                </div>
            </div>
            
            <div className = "project-hero"></div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            
            {/* The wrapper div for images helps GSAP target them */}
            <div className = "project-images"> 
                {project.images.map((image, index) => (
                    // Give the image container a class for GSAP targeting
                    <div className = "project-img" key={index}> 
                        <img src={image} alt="" />
                    </div>
                ))}
            </div>

            <div className = "project-footer">
                <div className= "project-footer-copy">
                    <p>Next Project</p>
                    {/* Wrap h1 in a Link for better UX, or just keep it as h1 */}
                    <Link href= {`/projects/${nextProject.slug}`}>
                        <h1>{nextProject.title}</h1>
                    </Link>
                </div>
                {/* Removed the progress bars from footer as they seem unused/redundant */}
            </div>
        </div>
    );
}

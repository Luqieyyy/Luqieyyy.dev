/**
 * GSAP ANIMATIONS SETUP
 * Semua animation setup ada dalam file ni
 * 
 * Kau boleh adjust:
 * - duration: Berapa lama animation (dalam seconds)
 * - ease: Jenis easing (power1, power2, power3, power4, elastic, etc)
 * - delay: Bila nak start animation
 * - stagger: Gap between multiple items animation
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Setup Hero Animations
 */
export function setupHeroAnimations() {
    const heroTl = gsap.timeline();
    
    heroTl.from('.hero-image-container', {
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: 'back.out(1.7)',
    })
    .from('.hero-greeting', {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power3.out',
    }, '-=0.4')
    .from('.hero-title', {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: 'power4.out',
    }, '-=0.4')
    .from('.hero-subtitle', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
    }, '-=0.6')
    .from('.hero-cta', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
    }, '-=0.4')
    .from('.scroll-indicator', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
    }, '-=0.2');

    // Scroll indicator bounce
    gsap.to('.scroll-indicator', {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
}

/**
 * Setup About Intro Animation
 */
export function setupAboutIntroAnimation() {
    gsap.from('.about-intro-text', {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-intro',
            start: 'top 70%',
            toggleActions: 'play none none none',
        }
    });
}

/**
 * Setup Horizontal Scroll (Life Roadmap)
 */
export function setupHorizontalScroll() {
    const horizontalSection = document.querySelector('.horizontal-scroll-container');
    const horizontalContent = document.querySelector('.horizontal-scroll-content');
    
    if (horizontalSection && horizontalContent) {
        const scrollWidth = horizontalContent.scrollWidth - window.innerWidth;
        
        // Main horizontal scroll animation
        gsap.to(horizontalContent, {
            x: -scrollWidth,
            ease: 'none',
            scrollTrigger: {
                trigger: horizontalSection,
                start: 'top top',
                end: () => `+=${scrollWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        });

        // Animate each roadmap item
        gsap.utils.toArray('.roadmap-item').forEach((item) => {
            gsap.from(item, {
                opacity: 0,
                scale: 0.8,
                y: 50,
                duration: 0.5,
                scrollTrigger: {
                    trigger: item,
                    containerAnimation: gsap.to(horizontalContent, { x: -scrollWidth }),
                    start: 'left 80%',
                    toggleActions: 'play none none reverse',
                }
            });
        });
    }
}

/**
 * Setup Skills Section Animations
 */
export function setupSkillsAnimations() {
    // Slide from left
    gsap.from('.skill-left', {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.skills-section',
            start: 'top 70%',
            toggleActions: 'play none none none',
        }
    });

    // Slide from right
    gsap.from('.skill-right', {
        x: 200,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.skills-section',
            start: 'top 70%',
            toggleActions: 'play none none none',
        }
    });
}

/**
 * Setup Project Cards Animations
 */
export function setupProjectCardsAnimations() {
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        const direction = i % 2 === 0 ? -100 : 100;
        gsap.from(card, {
            opacity: 0,
            x: direction,
            rotation: i % 2 === 0 ? -5 : 5,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        });
    });
}

/**
 * Setup Navbar Scroll Effect
 */
export function setupNavbarScrollEffect(navbarRef) {
    ScrollTrigger.create({
        trigger: '.hero-section',
        start: 'bottom top',
        end: 'bottom top',
        onEnter: () => navbarRef.current?.classList.add('is-scrolled'),
        onLeaveBack: () => navbarRef.current?.classList.remove('is-scrolled'),
    });
}

/**
 * Setup Hero Background Parallax
 */
export function setupHeroParallax() {
    gsap.to('.hero-bg-gradient', {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
        }
    });
}

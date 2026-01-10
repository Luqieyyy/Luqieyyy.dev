/**
 * HOME PAGE (LANDING PAGE)
 * Main page dengan semua sections
 * 
 * Sections ada dalam: /components/sections/
 * Animations setup dalam: /utils/animations.js
 * Data dalam: /data/
 * 
 * Untuk edit content, pergi ke file components masing-masing
 */

'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Import Components
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutIntro from '@/components/sections/AboutIntro';
import LifeRoadmap from '@/components/sections/LifeRoadmap';
import EducationSection from '@/components/sections/EducationSection';
import SkillsSection from '@/components/sections/SkillsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ProjectsPreview from '@/components/sections/ProjectsPreview';
import ContactCTA from '@/components/sections/ContactCTA';

// Import Animation Functions
import {
    setupHeroAnimations,
    setupAboutIntroAnimation,
    setupHorizontalScroll,
    setupSkillsAnimations,
    setupProjectCardsAnimations,
    setupNavbarScrollEffect,
    setupHeroParallax
} from '@/utils/animations';

export default function Home() {
    const mainRef = useRef(null);
    const navbarRef = useRef(null);

    useEffect(() => {
        // GSAP Context untuk automatic cleanup
        const ctx = gsap.context(() => {
            // Setup semua animations
            setupHeroAnimations();
            setupAboutIntroAnimation();
            setupHorizontalScroll();
            setupSkillsAnimations();
            setupProjectCardsAnimations();
            setupNavbarScrollEffect(navbarRef);
            setupHeroParallax();
        }, mainRef);

        // Cleanup bila component unmount
        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="landing-page">
            {/* Navbar */}
            <div ref={navbarRef} className="navbar-container">
                <Navbar />
            </div>

            {/* All Sections */}
            <HeroSection />
            <AboutIntro />
            <LifeRoadmap />
            <EducationSection />
            <SkillsSection />
            <CertificationsSection />
            <ProjectsPreview />
            <ContactCTA />
        </div>
    );
}
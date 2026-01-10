'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar({navClass}){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
    <nav className={`main-navbar ${navClass || ''}`}>
        <div className="nav-container">
            {/* Logo or Brand Name */}
            <Link href="/" className="nav-logo">
                LuqieyyyDev
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
                className="mobile-menu-button" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
            </button>

            {/* Navigation Links */}
            <div className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
                <Link href="/projects" className="link" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                <Link href="/about" className="link" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link href="/contact" className="link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
        </div>
    </nav>
    );
}

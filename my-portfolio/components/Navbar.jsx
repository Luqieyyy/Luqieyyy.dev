'use client';
import Link from 'next/link';

export default function Navbar({navClass}){
    return(
    <nav className={`main-navbar ${navClass || ''}`}>
        <div className="nav-container">
            {/* Logo or Brand Name */}
            <Link href="/" className="nav-logo">
                LuqieyyyDev
            </Link>
            {/* Navigation Links */}
            <div className="nav-links">
                <Link href="/projects" className="link">Projects</Link>
                <Link href="/about" className="link">About</Link>
                <Link href="/contact" className="link">Contact</Link>
            </div>
        </div>
    </nav>
    );
}

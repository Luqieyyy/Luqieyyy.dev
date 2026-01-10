/**
 * LIFE ROADMAP SECTION (HORIZONTAL SCROLL)
 * Section dengan horizontal scroll effect
 * 
 * Data roadmap ada dalam: /data/lifeRoadmap.js
 * Edit data tu untuk update roadmap
 * Images: Letak gambar dalam /public/roadmap/ folder
 */

'use client';
import lifeRoadmap from '@/data/lifeRoadmap';
import Image from 'next/image';

export default function LifeRoadmap() {
    return (
        <section className="horizontal-scroll-container">
            <div className="horizontal-scroll-content">
                <div className="roadmap-intro">
                    <h2>Life Roadmap</h2>
                    <p>Scroll to explore my journey →</p>
                </div>
                
                {lifeRoadmap.map((item, index) => (
                    <div key={index} className="roadmap-item">
                        {/* Image or Icon */}
                        <div className="roadmap-visual">
                            {item.image ? (
                                <div className="roadmap-image">
                                    <Image 
                                        src={item.image} 
                                        alt={item.title}
                                        fill
                                        sizes="400px"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            ) : (
                                <div className="roadmap-icon">{item.icon}</div>
                            )}
                        </div>
                        
                        <div className="roadmap-year">{item.year}</div>
                        <h3 className="roadmap-title">{item.title}</h3>
                        <p className="roadmap-desc">{item.description}</p>
                        <div className="roadmap-line"></div>
                    </div>
                ))}
                
                <div className="roadmap-end">
                    <h2>To Be Continued...</h2>
                    <p>The best is yet to come 🚀</p>
                </div>
            </div>
        </section>
    );
}

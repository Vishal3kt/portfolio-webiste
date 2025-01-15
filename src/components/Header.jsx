import React, { useState, useEffect } from 'react';
import "./Header.scss";

const Header = () => {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const handleScroll = () => {
            let currentSection = 'about';
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 2) {
                    currentSection = section.getAttribute('id');
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id='Header' className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div className='wrapper'>
                <div className="name-wrapper">
                    <h1 className="name text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                        Vishal Mokashi
                    </h1>
                    <h2 className="designation mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Front End Developer</h2>
                    <p className="sort-info mt-4 max-w-xs leading-normal">I build accessible, pixel-perfect digital experiences for the web.</p>
                </div>
                <nav className="middle-section nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        {['about', 'skills', 'experience', 'projects'].map((section) => (
                            <a href={`#${section}`} key={section}>
                                <li className={`group flex items-center py-3 ${activeSection === section ? 'active' : ''}`}>
                                    <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                                    <hr />
                                </li>
                            </a>
                        ))}
                    </ul>
                </nav>
            </div>
            <ul className="Icons-ul ml-1 mt-8 flex items-center bg-slate-600">
                <li className="mr-5 shrink-0 text-xs">
                    <a href='https://github.com/VishalNM7676' className="block hover:text-slate-200" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                        <span className="sr-only"><i className="ri-github-fill"></i></span>
                    </a>
                </li>
                <li className="mr-5 shrink-0 text-xs">
                    <a href='https://www.linkedin.com/in/vishal-mokashi-a58b2523a/' className="block hover:text-slate-200" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                        <span className="sr-only"><i className="ri-linkedin-box-fill"></i></span>
                    </a>
                </li>
                <li className="mr-5 shrink-0 text-xs">
                    <a href='https://www.behance.net/vishalmokashi' className="block hover:text-slate-200" target="_blank" rel="noreferrer noopener" title="Behance">
                        <span className="sr-only"><i className="ri-behance-line"></i></span>
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Header;

import React from 'react';
import './Skills.scss';

const Skills = () => {
    return (
        <section id="skills" className="skills-section" aria-label="Skills">
            <div className="sticky-header">
                <h2 className="header-title">Skills</h2>
            </div>
            <div>
                <ol className="group-list">
                    <li className="skills-item">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="background-overlay"></div>
                            <header className="skills-header">
                                <div className="skill-icon rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 bg-gray-300 flex items-center justify-center">
                                    <i className="ri-code-s-slash-line text-4xl text-gray-500"></i>
                                </div>
                            </header>
                            <div className="skills-details">
                                <h3 className="skills-title">
                                    <span>Frontend Development</span>
                                </h3>
                                <p className="skills-description">
                                    Proficient in building responsive and user-friendly interfaces using React, Angular, HTML, CSS, SCSS, Bootstrap, Material UI, Tailwind CSS, Figma and other UI library's.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="skills-item">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="background-overlay"></div>
                            <header className="skills-header">
                                <div className="skill-icon rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 bg-gray-300 flex items-center justify-center">
                                    <i className="ri-database-2-line text-4xl text-gray-500"></i>
                                </div>
                            </header>
                            <div className="skills-details">
                                <h3 className="skills-title">
                                    <span>Backend Knowledge</span>
                                </h3>
                                <p className="skills-description">
                                    Familiar with REST APIs, Node.js, Express, and working with databases like MongoDB and Firebase.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="skills-item">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="background-overlay"></div>
                            <header className="skills-header">
                                <div className="skill-icon rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 bg-gray-300 flex items-center justify-center">
                                    <i className="ri-git-branch-line text-4xl text-gray-500"></i>
                                </div>
                            </header>
                            <div className="skills-details">
                                <h3 className="skills-title">
                                    <span>Version Control</span>
                                </h3>
                                <p className="skills-description">
                                    Experienced in using Git, GitHub, and GitLab for version control and team collaboration.
                                </p>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    );
};

export default Skills;

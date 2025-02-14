import React from 'react';
import './Project.scss';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';
import project4 from '../assets/project-4.png';
import project5 from '../assets/project-5.png';
import project6 from '../assets/project-6.png';

const Project = () => {
    return (
        <section id="projects" className="project-section" aria-label="project-section">
            <div className="sticky-header">
                <h2 className="header-title">Projects</h2>
            </div>
            <div>
                <ol className="group-list">
                    <li className="project-item">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="background-overlay"></div>
                            <header className="project-header" aria-label="2024 to Present">
                                <div className="project-image aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 bg-gray-300 flex items-center justify-center">
                                    <img className='img' src={project3} alt="project-1" />
                                </div>
                            </header>
                            <div className="project-details">
                                <h3 className="project-title">
                                    <div>
                                        <a href='https://expense-tracker-vishal3kts-projects.vercel.app/login' className="project-link" target="_blank" rel="noreferrer noopener" >
                                            <span className="link-overlay"></span>
                                            <span>
                                                Expense-Tracker made with Angular {""}
                                                <span className="company-name">
                                                    <i className="ri-arrow-right-up-long-line"></i>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </h3>
                                <p className="project-description">
                                    Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="project-item">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="background-overlay"></div>
                            <header className="project-header" aria-label="2024 to Present">
                                <div className="project-image aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 bg-gray-300 flex items-center justify-center">
                                    <img className='img' src={project2} alt="project-1" />
                                </div>
                            </header>
                            <div className="project-details">
                                <h3 className="project-title">
                                    <div>
                                        <a href='https://react-commandline.vercel.app/' className="project-link" target="_blank" rel="noreferrer noopener" >
                                            <span className="link-overlay"></span>
                                            <span>
                                                Command Line using React.JS {""}
                                                <span className="company-name">
                                                    <i className="ri-arrow-right-up-long-line"></i>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </h3>
                                <p className="project-description">
                                    Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="project-item">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="background-overlay"></div>
                            <header className="project-header" aria-label="2024 to Present">
                                <div className="project-image aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 bg-gray-300 flex items-center justify-center">
                                    <img className='img' src={project1} alt="project-1" />
                                </div>
                            </header>
                            <div className="project-details">
                                <h3 className="project-title">
                                    <div>
                                        <a href='https://code-pwa.vercel.app/' className="project-link" target="_blank" rel="noreferrer noopener" >
                                            <span className="link-overlay"></span>
                                            <span>
                                                Command Line using Angular {""}
                                                <span className="company-name">
                                                    <i className="ri-arrow-right-up-long-line"></i>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </h3>
                                <p className="project-description">
                                    Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="project-item">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="background-overlay"></div>
                            <header className="project-header" aria-label="2024 to Present">
                                <div className="project-image aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 bg-gray-300 flex items-center justify-center">
                                    <img className='img' src={project4} alt="project-1" />
                                </div>
                            </header>
                            <div className="project-details">
                                <h3 className="project-title">
                                    <div>
                                        <a href='https://expense-tracker-12345.netlify.app/' className="project-link" target="_blank" rel="noreferrer noopener" >
                                            <span className="link-overlay"></span>
                                            <span>
                                                Mobile-App (Expense-Tracker made with React.JS)  {""}
                                                <span className="company-name">
                                                    <i className="ri-arrow-right-up-long-line"></i>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </h3>
                                <p className="project-description">
                                    Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="project-item">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="background-overlay"></div>
                            <header className="project-header" aria-label="2024 to Present">
                                <div className="project-image aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 bg-gray-300 flex items-center justify-center">
                                    <img className='img' src={project5} alt="project-1" />
                                </div>
                            </header>
                            <div className="project-details">
                                <h3 className="project-title">
                                    <div>
                                        <a href='https://simons-game-1.netlify.app/' className="project-link" target="_blank" rel="noreferrer noopener" >
                                            <span className="link-overlay"></span>
                                            <span>
                                                Simon Game using Vanilla-JS {""}
                                                <span className="company-name">
                                                    <i className="ri-arrow-right-up-long-line"></i>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </h3>
                                <p className="project-description">
                                    Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="project-item">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="background-overlay"></div>
                            <header className="project-header" aria-label="2024 to Present">
                                <div className="project-image aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 bg-gray-300 flex items-center justify-center">
                                    <img className='img' src={project6} alt="project-1" />
                                </div>
                            </header>
                            <div className="project-details">
                                <h3 className="project-title">
                                    <div>
                                        <a href='https://recipe-prod.netlify.app/recipes' className="project-link" target="_blank" rel="noreferrer noopener" >
                                            <span className="link-overlay"></span>
                                            <span>
                                                Recipe Book App using Angular {""}
                                                <span className="company-name">
                                                    <i className="ri-arrow-right-up-long-line"></i>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </h3>
                                <p className="project-description">
                                    Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.
                                </p>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    );
};

export default Project;

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
                                    A comprehensive expense management application built with Angular, allowing users to track their spending, categorize expenses, and generate detailed financial reports. The app features a user-friendly interface, seamless backend integration, and is fully mobile-responsive for on-the-go financial management.
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
                                        <a href='https://command-line-react.vercel.app/' className="project-link" target="_blank" rel="noreferrer noopener" >
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
                                    A developer-friendly web-based command line interface built with React.js, designed to simplify development workflows. The application stores a wide range of commands, including Angular CLI (ng new, ng build), React, Node.js, Git, and CDN integrations. With just one click, users can copy any command to their clipboard, making it easy to execute common tasks without memorizing syntax. The app is fully mobile-responsive, ensuring seamless usability across all devices.
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
                                        <a href='https://angular-store-app-xi.vercel.app/' className="project-link" target="_blank" rel="noreferrer noopener" >
                                            <span className="link-overlay"></span>
                                            <span>
                                                E-commerce Application using Angular {""}
                                                <span className="company-name">
                                                    <i className="ri-arrow-right-up-long-line"></i>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </h3>
                                <p className="project-description">
                                    A fully functional e-commerce platform built with Angular, offering features like product listings, shopping cart management, and secure checkout processes. The application is optimized for performance and is mobile-responsive, providing a seamless shopping experience on both desktop and mobile devices.
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
                                        <a href='https://command-line-angular.vercel.app/' className="project-link" target="_blank" rel="noreferrer noopener" >
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
                                    An interactive command-line tool developed with Angular, tailored to streamline development tasks. It provides a curated list of essential commands for frameworks like Angular (ng serve, npm install), React, Node.js, and Git. Developers can quickly copy commands to their clipboard with a single click, saving time and reducing errors. The application is fully mobile-responsive, making it a convenient and accessible tool for developers on the go.
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
                                        <a href='https://expense-tracker-mobile-app.vercel.app/' className="project-link" target="_blank" rel="noreferrer noopener" >
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
                                    A mobile-friendly expense tracker developed with React.js, designed to help users manage their finances on the go. The app includes features like expense categorization, budget tracking, and visual analytics, and is fully mobile-responsive for a consistent experience on any device.
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
                                    A classic Simon game implemented using vanilla JavaScript, offering a fun and interactive way to test memory and concentration. The game features colorful visuals, sound effects, and increasing levels of difficulty. It is fully mobile-responsive, ensuring an engaging experience on both desktop and mobile devices.
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

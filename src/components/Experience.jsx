import React from 'react'
import "./Experience.scss"

const Experience = () => {
    return (
        <section id="experience" className="experience-section" aria-label="Work experience">
            <div className="sticky-header">
                <h2 className="header-title">Experience</h2>
            </div>
            <div>
                <ol className="group-list">
                    <li className="experience-item">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="background-overlay"></div>
                            <header className="experience-header" aria-label="2024 to Present">APRIL 2023 — Present</header>
                            <div className="experience-details">
                                <h3 className="experience-title">
                                    <div>
                                        <a href="https://www.3ktechnologies.com/" className="experience-link" target="_blank" rel="noreferrer noopener" aria-label="Frontend Engineer">
                                            <span className="link-overlay"></span>
                                            <span>
                                                Frontend Developer - {""}
                                                <span className="company-name">
                                                    3KTechnologies <i className="ri-arrow-right-up-long-line"></i>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </h3>
                                <p className="experience-description">
                                    As a front-end developer, I implemented business logic and developed dynamic, responsive UI components using JavaScript, React, Angular, HTML, SCSS, and PrimeNG. I ensured smooth data flow by efficiently managing state and integrating front-end components with back-end systems, improving feature accuracy and data synchronization.
                                    <br />
                                    I built optimized, cross-platform UI layouts with Material UI and TypeScript, enhancing load times and performance. My focus on high-quality code included thorough testing and debugging, reducing production bugs. I collaborated within agile teams, contributing to faster project timelines while maintaining responsive and performant user experiences.
                                </p>
                                <ul className="technologies-list" aria-label="Technologies used">
                                    <li className="tech-item">
                                        <div className="tech-badge">HTML</div>
                                    </li>
                                    <li className="tech-item">
                                        <div className="tech-badge">CSS/SCSS</div>
                                    </li>
                                    <li className="tech-item">
                                        <div className="tech-badge">Material UI</div>
                                    </li>
                                    <li className="tech-item">
                                        <div className="tech-badge">PrimeNG</div>
                                    </li>
                                    <li className="tech-item">
                                        <div className="tech-badge">Javascript</div>
                                    </li>
                                    <li className="tech-item">
                                        <div className="tech-badge">Typescript</div>
                                    </li>
                                    <li className="tech-item">
                                        <div className="tech-badge">Angular</div>
                                    </li>
                                    <li className="tech-item">
                                        <div className="tech-badge">React JS</div>
                                    </li>
                                    <li className="tech-item">
                                        <div className="tech-badge">GitHub & Postman</div>
                                    </li>
                                    <li className="tech-item">
                                        <div className="tech-badge">Figma & Photoshop</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="experience-item">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div className="background-overlay"></div>
                            <header className="experience-header" aria-label="2024 to Present">September 2022 - March 2023</header>
                            <div className="experience-details">
                                <h3 className="experience-title">
                                    <div>
                                        <a href='https://www.achieversit.com/' className="experience-link" target="_blank" rel="noreferrer noopener" aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)">
                                            <span className="link-overlay"></span>
                                            <span>
                                                Frontend Developer Intern - {""}
                                                <span className="company-name">
                                                    Achivers-IT <i className="ri-arrow-right-up-long-line"></i>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </h3>
                                <p className="experience-description">
                                    During my internship, I worked on developing small
                                    components for a real-time e-commerce application.
                                    My role involved using technologies such as HTML, CSS,
                                    Bootstrap, JavaScript, and React to create dynamic, userfriendly interfaces.
                                    I was focused on ensuring the components were both
                                    responsive and efficient, enhancing the overall user experience
                                    of the application.
                                </p>
                                <ul className="technologies-list" aria-label="Technologies used">
                                    <li className="tech-item">
                                        <div className="tech-badge">HTML</div>
                                    </li>
                                    <li className="tech-item">
                                        <div className="tech-badge">CSS/SCSS</div>
                                    </li>
                                    <li className="tech-item">
                                        <div className="tech-badge">Bootstrap</div>
                                    </li>
                                    <li className="tech-item">
                                        <div className="tech-badge">Javascript</div>
                                    </li>
                                    <li className="tech-item">
                                        <div className="tech-badge">React</div>
                                    </li>
                                    <li className="tech-item">
                                        <div className="tech-badge">GitHub</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </section>

    )
}

export default Experience
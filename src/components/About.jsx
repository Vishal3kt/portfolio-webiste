import React from "react";
import "./About.scss";

const About = () => {
    return (
        <main id="content" className="about-content">
            <section
                id="about"
                className="about-section"
                aria-label="About me"
            >
                <div className="sticky-header">
                    <h2 className="header-title">About</h2>
                </div>

                <div className="about-body">
                    <p className="about-text">
                        I’m a passionate front-end developer with 2 years of experience creating accessible, pixel-perfect user interfaces that seamlessly blend design and engineering. My expertise lies in crafting responsive, high-performance websites and applications that provide intuitive, visually appealing experiences for users.
                    </p>
                    <p className="about-text">
                        My favorite projects are those that lie at the intersection of design and development, where I can focus on both the aesthetics and functionality of the user interface. I’m skilled in UI/UX development, ensuring every interface is not only beautiful but also optimized for performance, usability, and responsive design. I collaborate closely with clients and creative teams, bringing visions to life while constantly growing alongside the company I work with.
                    </p>

                    <p className="about-text">
                        Currently, I’m a Front-End Developer at{" "}
                        <a
                            className="link"
                            href="https://www.3ktechnologies.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Klaviyo (opens in a new tab)"
                        >
                            3KTechnologies. {""}
                        </a>
                        I contribute to the creation and
                        maintenance of UI components,
                        ensuring our platform meets web accessibility standards and best
                        practices to deliver an inclusive user experience.
                    </p>
                    <p className="about-text">
                        In my spare time, I’m usually explore about new teck stack's, trends, read, communicate with people around me and exercise.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default About;

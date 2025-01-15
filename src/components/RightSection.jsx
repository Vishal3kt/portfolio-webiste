import React from 'react'
import "./RightSection.scss"
import About from './About'
import Experience from './Experience'
import Project from './Project'
import Footer from './Footer'
import Skills from './Skills'

const RightSection = () => {
    return (
        <div id="right-section-wrapper" className="pt-24 lg:w-[52%] lg:py-24">
            <About />
            <Skills />
            <Experience />
            <Project />
            <Footer />
        </div>
    )
}

export default RightSection
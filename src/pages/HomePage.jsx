import React from 'react'
import LeftSection from '../components/LeftSection'
import RightSection from '../components/RightSection'
import "./HomePage.scss"

const HomePage = () => {
    return (
        <div className='home-page-wrapper lg:flex lg:justify-between lg:gap-4'>
            <LeftSection />
            <RightSection />
        </div>
    )
}

export default HomePage
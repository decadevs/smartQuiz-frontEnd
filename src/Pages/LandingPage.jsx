import React from 'react'
import HeadlineFrame from '../Components/LandingPage/HeadlineFrame/HeadlineFrame'
import Header from '../Components/LandingPage/Header/Header'
import WhyChooseFrame from '../Components/LandingPage/WhyChooseFrame/WhyChooseFrame'
import OurOfferings from '../Components/LandingPage/OurOfferings/OurOfferings'
import Footer from '../Components/LandingPage/Footer/Footer'

const LandingPage = () => {
  return (
    <div>
        <Header/>
        <HeadlineFrame/>
        <WhyChooseFrame/>
        <OurOfferings/>
        <Footer/>
    </div>
  )
}

export default LandingPage
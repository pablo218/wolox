import React from 'react'
import Header from '../components/Header'
import Woloxers from '../components/Woloxers'
import Benefits from '../components/Benefits'
import Footer from '../components/Footer'

const LandingPage = () => {
    return (
        <div className="Landing">
            <Header />
            <Woloxers />
            <Benefits />
            <Footer />
        </div>
    )
}

export default LandingPage

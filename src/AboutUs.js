import React from 'react'
import Masthead from './Masthead';
import './AboutUs.css'

function AboutUs() {
    return (
        <>
            <div className='aboutUs'>
                <div className='aboutUs_image'>
                <div className='aboutUs_container1' >
                    <h1 className='aboutUs_title'>
                        About Us
                    </h1>
                    <div className='aboutUs_subtitle'>
                        <div>At Vintage Motors, we believe everyone should have access to mobility.</div>
                        <div>A simple solution to the most complex challenges of the world.</div>
                    </div></div>
                </div>
                <div className='aboutUs_container2'>
                    <div className='aboutUs_content'>
                        <div>Transportation and mobility solutions is one of the least understood and most unorganized markets. We see this as an unexplored opportunity to build a system that can be trusted by everyone beyond barriers.</div>
                        <div>We have no limitations when it comes to two wheelers and enjoy serving everything from a scooter to a superbike available on both website and mobile application.</div>
                        <div>We are obsessed with the concept of <span><b>'Why buy when you can rent'</b></span>.</div>
                    </div>
                </div>
            </div>
            <Masthead />
        </>
    )
}

export default AboutUs;

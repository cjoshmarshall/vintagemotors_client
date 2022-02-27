import React from 'react';
import './Home.css';
import home_icon1 from './home_icon1.png'
import home_icon2 from './home_icon2.png'
import home_image2 from './home_image2.jpg'
import Masthead from './Masthead';

import PickupForm from './PickupForm'

function Home() {
    return (
        <div className='home'>
            <div className='home_image1'>               
                <div className='home_container1'>
                    <h1 className='home_title'>Rent.</h1>
                    <h1 className='home_title'>Ride.</h1>
                    <div className='home_buttoncontainer'>
                        <a href='/tariff'>
                            <button className='home_button'>Book a ride now</button>
                        </a>
                    </div>
                </div>
            </div>    
            <div className='home_container2'>
                <div className='home_subcontainer1'>
                    <h2 className='home_subtitle1'>Sanitized Vehicles</h2>
                    <div className='home_body'>Before your rental, we'll take extra care to clean the vehicle with disinfectant and sanitizer for your protection.</div>
                </div>
                <div className='home_subcontainer1'>
                    <h2 className='home_subtitle1'>Home Delivery</h2>
                    <div className='home_body'>RB fleet executives, wearing protective gear, will drop the vehicle at your doorstep through no contact delivery.</div>
                </div>
            </div>

            <div className='home_container3'>
                <div className='home_subcontainer2'>
                    <img name='icon1' src={home_icon1} alt='' />
                    <div>Vehicle Insurance</div>
                </div>
                <div className='home_subcontainer2'>
                    <img name='icon2' src={home_icon2} alt='' />
                    <div>24/7 Roadside Assistance</div>
                </div>
                <div className='home_subcontainer2'>
                    <img name='icon3' src={home_icon2} alt='' />
                    <div>Bike Management</div>
                </div>
            </div>

            <img className='home_image2' name='image2' src={home_image2} alt='' />       

            <div className='home_container4'>
                <div className='home_subcontainer3'>
                    <h2 className='home_subtitle2'>WE BELIEVE IN QUALITY</h2>
                </div>
            </div>
                <div className='home_container5'>
                <div className='home_subcontainer1'>
                        <h2 className='home_subtitle1'>Ready to serve you</h2>
                    <div className='home_body'>The next time you are planning on exploring the city, know that your means of transport is sorted by Vinatge Motors Rentals.</div>
                    </div>
                    <div className='home_subcontainer1'>
                        <h2 className='home_subtitle1'>Bikes maintained so good that you will feel it as brand new</h2>
                        <div className='home_body'>We are obssessed on giving you the best possible experience. This is not only with well served bikes but also with the 24/7 support team available just a call away.</div>
                    </div>
                </div>
            <Masthead />
        </div>
    )
}

export default Home

import React from 'react'
import masthead from './masthead.png'
import './Masthead.css'

function Masthead() {
    return (
        <div className='masthead_container' >
            <img className='masthead_image' src={masthead} />
            <div className='footer'><b>@2022 Vintage Motors Rentals</b></div>
        </div>
    )
}

export default Masthead

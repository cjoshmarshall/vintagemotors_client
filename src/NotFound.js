import React from 'react'
import notFound_image from './notFound_image.png'
import Masthead from './Masthead.js'
import './notFound.css'

function NotFound() {
    return (
        <div className='notFound'>
            <div className='notFound_container'>
                <img className='notFound_image' src={notFound_image} alt=''/>
            </div> 
            <Masthead />       
        </div>
    )
}

export default NotFound;

import React, { useEffect } from 'react'
import notFound_image from '../assets/notFound_image.png'
import Footer from '../components/Footer.js'
import './notFound.css'

function NotFound() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='notFound'>
            <div className='notFound_container'>
                <img className='notFound_image' src={notFound_image} alt=''/>
            </div> 
            <Footer />       
        </div>
    )
}

export default NotFound;

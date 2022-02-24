import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Header.css'
import logo from './logo.png'

function Header() {
    return (
          <div className='header'>
               <a href='/'>
                    <img className='header_logo' src={logo} />
               </a>

               <div className='header_nav'>
                    <a href='/about-us'>
                         <button className='header_button'>About Us</button>
                    </a>    
                    <a href='/tariff'>
                         <button className='header_button'>Tariff</button>
                    </a>
                    <a href='/own-a-franchise'>
                         <button className='header_button'>Own a Franchise</button>
                    </a>
                    <div className='dropdown'>
                         <button className='header_dropbtn'>
                              <div>Support</div>
                              <div className='header_materialicon'><ExpandMoreIcon /></div>
                         </button>
                         <div className='dropdown_content'>
                         <a href='/contact-us'>Contact Us</a>
                         <a href='/terms-and-condition'>Terms & Cond.</a>
                         </div>
                    </div>
               </div>

               <a href='/login'>
                    <button className='header_login'>Login</button>
               </a>
        </div>    
    )
}

export default Header

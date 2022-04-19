import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Header.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { Menu, Dropdown } from 'antd';


function Header() {
     
     const user=JSON.parse(localStorage.getItem("user"))
     console.log(user)

     const logout=()=>{
          localStorage.clear()
          window.location.href='/';
     }
     
     const menu = (
       <Menu>
         <Menu.Item className='header_menu' key="0">
               <Link to="">Account</Link>
         </Menu.Item>
         <Menu.Divider />
         <Menu.Item className='header_menu' key="1">
               <Link to="/orders">Orders</Link>
         </Menu.Item>
         <Menu.Divider />
         <Menu.Item className='header_menu' key="3" onClick={logout}>
              Logout
          </Menu.Item>
       </Menu>
     );


    return (
          <div className='header'>
               <Link to='/'>
                    <img className='header_logo' src={logo} />
               </Link>

               <div className='header_nav'>
                    <Link to='/about-us'>
                         <button className='header_button'>About Us</button>
                    </Link>    
                    <Link to='/tariff'>
                         <button className='header_button'>Tariff</button>
                    </Link>
                    <Link to='/own-a-franchise'>
                         <button className='header_button'>Own a Franchise</button>
                    </Link>
                    <div className='dropdown'>
                         <button className='header_dropbtn'>
                              <div>Support</div>
                              <div className='header_materialicon'><ExpandMoreIcon /></div>
                         </button>
                         <div className='dropdown_content'>
                         <Link to='/contact-us'>
                              <div className='dropdown_contentbtn'>Contact Us</div>
                         </Link>
                         <Link to='/terms-and-condition'>
                              <div className='dropdown_contentbtn'>Terms & Cond.</div>
                         </Link>
                         </div>
                    </div>
               </div>

               {
               user?
               <Dropdown overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <button className='header_login'>{user.name}</ button>
                    </a>
               </Dropdown>
               :<Link to='/login'>
                    <button className='header_login'>Login</button>
               </Link>}

               
               
               {/* <button className='header_login' onClick={logout}>Logout</button> */}
        </div>    
    )
}

export default Header

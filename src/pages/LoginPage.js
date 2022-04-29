import React, { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import Footer from '../components/Footer.js'
import './LoginPage.css'


function LoginPage() {
    
    const [login,setLogin]=useState(true)
    const [signup,setSignup]=useState(false)

    const clickLogin=()=>{
        setLogin(true)
        setSignup(false)
    }
    const clickSignup=()=>{
        setLogin(false)
        setSignup(true)
    }
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <>
        <div className='loginPage'>
            <div className='loginPage_title'>Rent . Ride</div>
            <div className='loginPage_container'>
                <div className='loginPage_subtitle'>
                    <div className={'loginPage_login ' + (login?'loginPage_active':'')}  onClick={clickLogin}>LOGIN</div>
                    <div className={'loginPage_signup ' + (signup?'loginPage_active':'')} onClick={clickSignup}>SIGN UP</div>
                </div>
                
                
                <div className='loginPage_content'>
                    {login && <LoginForm />}
                    {signup && <SignupForm />}
                </div>
            </div>            
        </div>
        <Footer />
        </>
  )
}

export default LoginPage

import React from 'react'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Masthead from './Masthead.js'
import './LoginPage.css'

class LoginPage extends React.Component {

    constructor(props){
        super(props);
        this.state={isLoginOpen:true,isSignupOpen:false};
    }

    showLoginBox(){
        this.setState({isLoginOpen:true,isSignupOpen:false})
    }
    showSignupBox(){
        this.setState({isSignupOpen:true,isLoginOpen:false})
    }

    render(){
    return (
        <>
        <div className='loginPage'>
            <div className='loginPage_title'>Rent . Ride</div>
            <div className='loginPage_container'>
                <div className='loginPage_subtitle'>
                    <div className={'loginPage_login ' + (this.state.isLoginOpen?'loginPage_active':'')}  onClick={this.showLoginBox.bind(this)}>LOGIN</div>
                    <div className={'loginPage_signup ' + (this.state.isSignupOpen?'loginPage_active':'')} onClick={this.showSignupBox.bind(this)}>SIGN UP</div>
                </div>
                
                
                <div className='loginPage_content'>
                    {this.state.isLoginOpen && <LoginForm />}
                    {this.state.isSignupOpen && <SignupForm />}
                </div>
            </div>            
        </div>
        <Masthead />
        </>
    )
}
}

export default LoginPage;

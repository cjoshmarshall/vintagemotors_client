import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { userLogin } from "./actionUser";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import './LoginForm.css'

function LoginForm() {
    const [phone,setPhone]=useState('');
    const [password, setPassword]=useState('')

    const dispatch=useDispatch()

    
    function login(e){
        e.preventDefault()
        dispatch(userLogin({phone,password}))
        console.log(phone,password)
    }


    const [visibility, setVisibility] = useState(false);
    const toggle=()=>{        
        setVisibility(visibility=>!visibility);
    }
    

    return (
        <>
        <form onSubmit={login}>
            <div className='loginForm'>
                    <div className='loginForm_container'>
                        <div className='loginForm_phone' id="logindata1">
                            <label className='loginForm_phoneLabel'>Phone</label>
                            <input className='loginForm_phoneInput' type='tel' name='phone' value={phone} onChange={e=>setPhone(e.target.value)} />
                        </div>
                        <div className='loginForm_password' id="logindata2">
                            <label className='loginForm_passwordLabel'>Password</label>
                            <div className='loginForm_passwordcontainer'>
                                <input className='loginForm_passwordInput' type={visibility?'text':'password'} name='password' value={password} onChange={e=>setPassword(e.target.value)}/>
                                <button className='loginForm_passwordIcon' type='button' onClick={toggle}>{visibility?<VisibilityOffIcon />:<VisibilityIcon />}</button>
                            </div>
                        </div>                 
                    </div>
                    <div className='loginForm_buttoncontainer'> 
                        <button className='loginForm_button' type='submit'>Log In</button>
                    </div>                   
            </div>
            </form>
        </>        
    )
}

export default LoginForm;

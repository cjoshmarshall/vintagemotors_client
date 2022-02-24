import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { userSignup} from "./actionUser";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './SignupForm.css'

function SignupForm() {
    const [name, setName]=useState('');
    const [phone,setPhone]=useState('');
    const [password, setPassword]=useState('')
    const [password2, setPassword2]=useState('')

    
    const dispatch=useDispatch()
    function signup(e){
        e.preventDefault()
        dispatch(userSignup({
            name,phone,password,password2
        }))
    }

    
    const [visibility, setVisibility] = useState(false);
    const toggle=()=>{
        setVisibility(visibility=>!visibility);
    }
    


    return (
        <>
        <form onSubmit={signup}>
            <div className='signupForm'>
                    <div className='signupForm_container'>
                        <div className='signupForm_name'>
                            <label  className='signupForm_nameLabel'>Name</label>
                            <input className='signupForm_nameInput' type='text' name='name' value={name} onChange={e=>setName(e.target.value)}/>
                        </div>
                        <div className='signupForm_phone'>
                            <label className='signupForm_phoneLabel'>Phone</label>
                            <input className='signupForm_phoneInput' type='tel' name='phone' value={phone} onChange={e=>setPhone(e.target.value)}/>
                        </div>
                        <div className='signupForm_password1'>
                            <label className='signupForm_passwordLabel1'>Password</label>
                            <div className='signupForm_passwordcontainer1'>
                                <input className='signupForm_passwordInput1' type='password' name='password1' value={password} onChange={e=>setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className='signupForm_password2'>
                            <label className='signupForm_passwordLabel2'>Confirm Password</label>
                            <div className='signupForm_passwordcontainer2'>
                                <input className='signupForm_passwordInput2' type={visibility?'text':'password'} name='password2' value={password2} onChange={e=>setPassword2(e.target.value)}/>
                                <button className='signupForm_passwordIcon' type='button' onClick={toggle}>{visibility?<VisibilityOffIcon />:<VisibilityIcon />}</button>
                            </div>
                        </div>                    
                    </div>
                    <div className='signupForm_buttoncontainer'> 
                        <button className='signupForm_button' type='submit'>Sign Up</button>
                    </div>
            </div>
        </form>
        </> 
    )
}

export default SignupForm;

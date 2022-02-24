import React, { useState } from 'react'
import Masthead from './Masthead';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import './ContactUs.css';
import { useDispatch } from 'react-redux';
import { comments } from './actionComment';

function ContactUs() {
    const [name, setName]=useState('');
    const [email, setEmail]=useState('')
    const [phone,setPhone]=useState('');
    const [comment, setComment]=useState('')

    
    const dispatch=useDispatch()
    function submitComments(e){
        e.preventDefault()
        dispatch(comments({
            name,email,phone,comment
        }))
    }

    return (
        <>
        <div className='contactUs'>
            <div className='contactUs_container1'>
                <div className='contactUs_titleContainer'>
                    <h2 className='contactUs_title'>Reach Us</h2>
                </div>
                <div className='contactUs_subcontainer1'>
                    <div className='contactUs_locationOnIcon'>
                        <LocationOnIcon />                        
                    </div>
                    <div className='contactUs_address'>
                        <div>Vintage Motors</div>
                        <div>xxxxxxxxxxxx</div>
                        <div>xxxxxxxx</div>
                        <div>xxxx xxxx</div>
                        </div>                    
                </div>
                <div className='contactUs_subcontainer2'>
                    <div className='contactUs_phoneIcon'>
                        <PhoneIcon />
                    </div>
                    <div className='contactUs_phone'>
                        <div>+919876543210</div>
                    </div>                    
                </div>
                <div className='contactUs_subcontainer3'>
                    <div className='contactUs_emailIcon'>
                        <EmailIcon />
                    </div>
                    <div className='contactUs_email'>
                        <div>support@vintagemotors.com</div>          
                    </div>                    
                </div>

                <div className='contactUs_container2'>
                    <form onSubmit={submitComments}>
                        <div className='contactUs_subcontainer4'>
                            <div className='contactUs_nameInput'>
                                <label>Name</label>
                                <input type='text' name='name' value={name} onChange={e=>setName(e.target.value)}/>
                            </div>
                            <div className='contactUs_emailInput'>
                                <label>Email</label>
                                <input type='email' name='email' value={email} onChange={e=>setEmail(e.target.value)}/>
                            </div>
                            <div className='contactUs_phoneInput'>
                                <label>Phone</label>
                                <input type='phone' name='phone' value={phone} onChange={e=>setPhone(e.target.value)}/>
                            </div>
                        </div>
                        <div className='contactUs_subcontainer5'>
                            <div className='contactUs_commentInput'>
                                <label>Comment</label>
                                <input type='text' name='comment' value={comment} onChange={e=>setComment(e.target.value)}/>
                            </div>
                        </div>
                        <div className='contactUs_buttoncontainer'>
                            <button className='contactUs_button'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>    
        </div>
        <Masthead />
        </>
    )
}

export default ContactUs;

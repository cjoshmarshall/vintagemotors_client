import React, { useEffect, useState } from 'react'
import moment from 'moment'
// import './PickupForm.css'


function PickupForm(){  
    
    const[from,setFrom]=useState(new Date())
    const[to,setTo]=useState()
    const[hours,setHours]=useState(0)


    
    function selectedTimeSlot(values){
        console.log(moment(values[0]).format('DD-MMM-yyyy'))
        console.log(moment(values[1]).format('HH:mm'))
        console.log(moment(values[2]).format('DD-MMM-yyyy'))
        console.log(moment(values[3]).format('HH:mm'))
    }

    // useEffect(()=>{
    //     createTimeSlot('00:00'-'00:00')
    // },[])

    return (
        <form className='pickupForm' onChange={selectedTimeSlot}>
            <div className='pickupForm_container'>
                <label className='pickupForm_pickup'>Pickup</label>
                <div className='pickupForm_pickupContent'>
                    <input type='date' name='date' placeholder='Date' format='DD-MMM-yyyy'/>
                    <input type='time' name='time' placeholder='Time' format='HH:mm'/>
                    
                </div>
                <label className='pickupForm_dropoff'>Dropoff</label>
                <div className='pickupForm_dropoffContent'>
                    <input type='date' name='date' placeholder='Date' format='DD-MMM-yyyy'/>
                    <input type='time' name='time' placeholder='Time' format='HH:mm'/>
                    
                </div>
            </div>    
        </form>
    )
}

export default PickupForm;


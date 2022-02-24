import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Masthead from './Masthead';
import {getAllBikes} from './actionTariff'
import './Tariff.css'
import { Link } from 'react-router-dom';

function Tariff() {
    const {tariff}=useSelector(state=>state.reducerTariff)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getAllBikes())
    },[])

    return (
        <>
        <div className='tariff'>
            <h1 className='tariff_title'>
                Bike rental tariff
            </h1>  
            
            <div className='tariff_container'> 
            {tariff.map(bike=>{
            return(     
                <div className='tariff_subcontainer' key={bike.id}>
                    <div className='tariff_innercontainer1'>
                        <h4 className='tariff_subtitle'>
                            <div>{bike.name} {bike.model}</div>
                        </h4>
                        <img className='tariff_image' name='honda_activa_3G' src={bike.image} alt=' '/>
                    </div>
                    <div className='tariff_innercontainer2'>
                        <div>
                            <h5 className='tariff_innersubtitle'>Mon-Thu</h5>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (0-24 hrs)</div>
                                <span>₹<b>{bike.bookingTime}</b>/hr</span>
                            </div>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (&gt;24 hrs)</div>
                                <span>₹<b>{bike.bookingTime}</b>/hr</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='tariff_innersubtitle'>Fri-Sun</h5>
                            <div className='tariff_innerbody'>
                                <div>Booking Time (&gt;24 hrs)</div>
                                <span>₹<b>{bike.bookingTime}</b>/hr</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='tariff_innersubtitle'>Extras</h5>
                            <div className='tariff_innerbody'>
                                <div>Km limit</div>
                                <span><b>{bike.kmLimit}</b>/hr</span>
                            </div>
                            <div className='tariff_innerbody'>
                                <div>Excess km charges</div>
                                <span>₹<b>{bike.excessKmCharges}</b>/hr</span>
                            </div>
                        </div>
                    </div>
                    <Link className='tariff_buttonLink' to={`/summary/${bike.id}`}>
                        <div className='tariff_buttoncontainer'>
                            <button className='tariff_button'>BOOK NOW</button>
                        </div>
                    </Link>
                </div>
                )
                }
            )
            } 
            </div>
        </div>
        <Masthead />
        </>
    )
}

export default Tariff;

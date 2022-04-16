// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import './Summary.css'
// import { DatePicker } from 'antd';
// import moment from 'moment'
// import { getAllBikes } from './actionTariff'
// import { bookBike } from './actionBooking'
// import 'antd/dist/antd.css';


// function Summary({match}) {
//     const {tariff}=useSelector(state=>state.reducerTariff)
//     const[bike,setBike]=useState('')

//     const[from,setFrom]=useState()
//     const[to,setTo]=useState()
//     const[totalHours,setTotalHours]=useState(0)
//     const[bookingFee,setBookingFee]=useState(0)
//     const[cgst,setCgst]=useState(0)
//     const[sgst,setSgst]=useState(0)
//     const[totalAmount,setTotalAmount]=useState(0)

//     const { RangePicker } = DatePicker;

//     function selectedTimeSlot(values){
//         setFrom(moment(values[0]).format('DD-MMM-yyyy hh:mm'))
//         setTo(moment(values[1]).format('DD-MMM-yyyy hh:mm'))

//         setTotalHours(values[1].diff(values[0],'hours'))
//     } 

    
//     const dispatch=useDispatch()

//     useEffect(()=>{
//         dispatch(getAllBikes())
//         if(tariff.length>0){
//             setBike(tariff.find(p=>p.id==match.params.bikeid))
//         }
//     },[bike])

//     useEffect(()=>{
//         setBookingFee((totalHours*bike.bookingTime)||0)
//     },[totalHours])

//     useEffect(()=>{
//         setCgst(parseInt(bookingFee/7))
//     },[bookingFee])
//     useEffect(()=>{
//         setSgst(parseInt(bookingFee/7))
//     },[bookingFee])

//     useEffect(()=>{
//         setTotalAmount(bookingFee+cgst+sgst)
//     })

      
//       function disabledDate(current) {
//         return current && current < moment().endOf('day');
//       }
      
      
//       function disabledRangeTime(_, type) {
//         return {
//           disabledHours: () => [0,1,2,3,4,5,6,7,8,21,22,23]
//         };
//       }

//     function bookNow(){
//         const reqObj={
//             user:JSON.parse(localStorage.getItem('user'))._id,
//             bike:bike._id,
//             totalHours,
//             cgst,
//             sgst,
//             totalAmount,
//             bookedTimeSlot:{
//                 from,
//                 to
//             }
//         }
//         dispatch(bookBike(reqObj))
//     }
    

    

//     return (
//         <div className='summary'>
//             <div className='summary_container1'>
//                 <h2 className='summary_title1'>SUMMARY</h2>
//                 <div className='summary_subcontainer1'>
//                     <div className='summary_innercontainer'>
//                         <h4 className='summary_innertitle'>{bike.name} {bike.model}</h4>
//                         <div className='summary_imagecontainer'>
//                             <img className='summary_image' name='summary_image' src={bike.image} alt=''/>
//                         </div>
//                         <div className='summary_content'>
//                             <RangePicker use12Hours
//                                 disabledDate={disabledDate}
//                                 disabledTime={disabledRangeTime}
//                                 showTime={{
//                                     hideDisabledOptions: true,
//                                     defaultValue: [moment('00:00', 'hh:mm A'), moment('11:59', 'hh:mm A')],
//                                     }}
//                                 format={'DD-MMM-YY HH:mm A'} minuteStep={10} onChange={selectedTimeSlot} />
      
//                             <div>Address</div>
//                             <div>
//                                 <div>
//                                     <div>Booking Time (0-24 hrs)</div>
//                                     <span>₹<b>{bike.bookingTime}</b>/hr</span>
//                                 </div>
//                             </div><br/>
//                             <div>
//                                 <div>
//                                     <div>Km limit</div>
//                                     <span><b>{bike.kmLimit}</b>/hr</span>
//                                 </div>
//                                 <div>
//                                     <div>Excess km charges</div>
//                                     <span>₹<b>{bike.excessKmCharges}</b>/hr</span>
//                                 </div>
//                             </div>                                
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='summary_container2'>
//                 <div className='summary_subcontainer2'>
//                     <h2 className='summary_title2'>CHECKOUT</h2>
//                     <div className='summary_innercontainer2'>
//                         <div>
//                             <div>Booking fee</div>
//                             <span>₹<b>{bookingFee}</b></span>
//                         </div>
//                         <div>
//                             <div>CGST(7%)</div>
//                             <span>₹<b>{cgst}</b></span>
//                         </div>
//                         <div>
//                             <div>SGST(7%)</div>
//                             <span>₹<b>{sgst}</b></span>
//                         </div>
//                     </div>
//                     <div>
//                         <div><b>Total Payment Amount</b> </div>
//                         <span><b>₹{totalAmount}</b></span>                       
//                     </div>
//                     <button className='summary_button' onClick={bookNow}>Book Now</button>
//                 </div>   
//             </div>
//         </div>
//     )
// }

// export default Summary


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DatePicker } from 'antd';
import moment from 'moment'
import { getAllBikes } from '../actions/actionTariff'
import { bookBike } from '../actions/actionBooking'
import StripeCheckout from 'react-stripe-checkout';
import 'antd/dist/antd.css';
import './Summary.css'



function Summary({match}) {
    const {tariff}=useSelector(state=>state.reducerTariff)
    const[bike,setBike]=useState('')

    const[from,setFrom]=useState()
    const[to,setTo]=useState()
    const[totalHours,setTotalHours]=useState(0)
    const[bookingFee,setBookingFee]=useState(0)
    const[cgst,setCgst]=useState(0)
    const[sgst,setSgst]=useState(0)
    const[totalAmount,setTotalAmount]=useState(0)

    // const item= JSON.parse(sessionStorage.setItem())
    // console.log(item)

    const STRIPE_KEY="pk_test_51KmWGfSGIFDQV8rwn9CfCmjRs9VcLPlecOdo5G7bSkqZy0SLTT2TKtv81giujmHxovpzxEF9GgRz048Zu0LEjRK700JCcnQjFV"

    const { RangePicker } = DatePicker;

    function selectedTimeSlot(values){
        setFrom(moment(values[0]).format('DD-MMM-yyyy hh:mm'))
        setTo(moment(values[1]).format('DD-MMM-yyyy hh:mm'))

        setTotalHours(values[1].diff(values[0],'hours'))
    } 

    
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getAllBikes())
        if(tariff.length>0){
            setBike(tariff.find(p=>p.id==match.params.bikeid))
        }
    },[bike])

    useEffect(()=>{
        setBookingFee((totalHours*bike.bookingTime)||0)
    },[totalHours])

    useEffect(()=>{
        setCgst(parseInt(bookingFee/7))
    },[bookingFee])
    useEffect(()=>{
        setSgst(parseInt(bookingFee/7))
    },[bookingFee])

    useEffect(()=>{
        setTotalAmount(bookingFee+cgst+sgst)
    })

      
      function disabledDate(current) {
        return current && current < moment().endOf('day');
      }
      
      
      function disabledRangeTime(_, type) {
        return {
          disabledHours: () => [0,1,2,3,4,5,6,7,8,21,22,23]
        };
      }

    
    function onToken(token){
        const reqObj={
            token,
            user:JSON.parse(localStorage.getItem('user'))._id,
            bike:bike._id,
            totalHours,
            cgst,
            sgst,
            totalAmount,
            bookedTimeSlot:{
                from,
                to
            }
        }
        dispatch(bookBike(reqObj))
        console.log(token)
    }

    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        <div className='summary'>
            <div className='summary_container1'>
                <h2 className='summary_title1'>SUMMARY</h2>
                <div className='summary_subcontainer1'>
                    <div className='summary_innercontainer'>
                        <h3 className='summary_innertitle'>{bike.name} {bike.model}</h3>
                        <div className='summary_imagecontainer'>
                            <img className='summary_image' name='summary_image' src={bike.image} alt=''/>
                        </div>
                        <div>
                            <RangePicker use12Hours
                                disabledDate={disabledDate}
                                disabledTime={disabledRangeTime}
                                showTime={{
                                    hideDisabledOptions: true,
                                    }}
                                format={'DD-MMM-YY HH:mm A'} minuteStep={10} onChange={selectedTimeSlot} />
      
                            <div  className='summary_content'>
                                <div className='summary_cost1'>
                                    <div>Booking Time (0-24 hrs)</div>
                                    <span>₹<b>{bike.bookingTime}</b>/hr</span>
                                </div>
                                <div className='summary_cost1'>
                                    <div>Km limit</div>
                                    <span><b>{bike.kmLimit}</b>/hr</span>
                                </div>
                                <div className='summary_cost1'>
                                    <div>Excess km charges</div>
                                    <span>₹<b>{bike.excessKmCharges}</b>/hr</span>
                                </div>
                            </div>                                
                        </div>
                    </div>
                </div>
            </div>
            <div className='summary_container2'>
                <div className='summary_subcontainer2'>
                    <h2 className='summary_title2'>CHECKOUT</h2>
                    <div className='summary_innercontainer2'>
                        <div className='summary_cost2'>
                            <div>Booking fee</div>
                            <span>₹<b>{bookingFee}</b></span>
                        </div>
                        <div className='summary_cost2'>
                            <div>CGST(7%)</div>
                            <span>₹<b>{cgst}</b></span>
                        </div>
                        <div className='summary_cost2'>
                            <div>SGST(7%)</div>
                            <span>₹<b>{sgst}</b></span>
                        </div>
                    </div>
                    <div className='summary_cost2'>
                        <div><b>Total Payment Amount</b> </div>
                        <span><b>₹{totalAmount}</b></span>                       
                    </div>

                    <StripeCheckout
                        name='Vintage Motor Rentals'
                        shippingAddress
                        token={onToken}
                        amount={totalAmount*100}
                        currency="INR"
                        allowRememberMe
                        stripeKey={STRIPE_KEY}
                    >
                        <button className='summary_button'>Book Now</button>
                    </StripeCheckout>
                    
                </div>   
            </div>
        </div>
    )
}

export default Summary


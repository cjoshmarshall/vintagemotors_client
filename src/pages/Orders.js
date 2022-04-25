import React, { useEffect } from 'react'
import './Orders.css'
import { useDispatch, useSelector} from 'react-redux'
import { getAllBookings } from '../actions/actionBooking'
import moment from 'moment'


function Orders() {

  const dispatch=useDispatch()
  const {bookings}=useSelector(state=>state.reducerBooking)

  useEffect(()=>{
    dispatch(getAllBookings())
  },[getAllBookings])



  return (
    <div className='orders'>
        <h1 className='orders_title'>My Bookings</h1>
      {/* {bookings?
        <>
          <h2 className='orders_title'>No Orders Yet</h2>
          <div className='orders_buttonContainer'>
            <Link to="/tariff"><button className='orders_button'>Book Now</button></Link>
          </div>
        </>: */}
        <div className='orders_container'>
          {bookings.map(booking => (
            <div className='orders_subcontainer' key={booking._id}>
              <img className='orders_image' name='orders_image' src={booking.bike.image} alt='' />
              <div className='orders_innercontainer'>
                <h3 className='orders_name'>{booking.bike.name} {booking.bike.model}</h3>
                <p className='orders_info1'><span>Total Hours</span><span>:</span><b>{booking.totalHours}</b></p>
                <p className='orders_info1'><span>Booking Time</span><span>:</span>₹<b>{booking.bike.bookingTime}</b>/hr</p>
                <p className='orders_info1'><span>Total Amount</span><span>:</span>₹<b>{booking.totalAmount}</b></p>
              </div>
              <div className='orders_innercontainer'>
                <p className='orders_info2'><span>From</span><span>:</span><b>{booking.bookedTimeSlot.from}</b></p>
                <p className='orders_info2'><span>To</span><span>:</span><b>{booking.bookedTimeSlot.to}</b></p>
                <p className='orders_info2'><span>Created at</span><span>:</span><b>{moment(booking.createdAt).format("MMM DD yyyy")}</b></p>
              </div>
            </div>
          )).reverse()}
        </div>
        {/* } */}
    </div>
  )
}

export default Orders
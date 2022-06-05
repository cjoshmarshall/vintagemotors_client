import { publicRequest } from '../api/apiHandle';

export const bookBike=(reqObj)=>async dispatch=>{
    
    try{
        const response=await publicRequest.post('/orders/bookbike',reqObj)
        alert('Your bike booked Successfully')
        setTimeout(() => {
          window.location.href='/orders'
        }, 500);
    }
    catch(error){
        console.log(error)
    }
}

export const getAllBookings=()=>async dispatch=>{

    try{
        const response=await publicRequest.get('/orders/getallbookings')
        dispatch({type:'GET_ALL_BOOKINGS',payload:response.data})
    }
    catch(error){
        console.log(error)
    }
}

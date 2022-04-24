import axios from 'axios';

export const bookBike=(reqObj)=>async dispatch=>{
    console.log(reqObj)
    try{
        await axios.post('https://vintagemotorsrentals.herokuapp.com/api/orders/bookbike',reqObj)
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
        const response=await axios.get('https://vintagemotorsrentals.herokuapp.com/api/orders/getallbookings')
        dispatch({type:'GET_ALL_BOOKINGS',payload:response.data})
    }
    catch(error){
        console.log(error)
    }
}

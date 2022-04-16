import axios from 'axios';

export const bookBike=(reqObj)=>async dispatch=>{
    console.log(reqObj)
    try{
        const response=await axios.post('http://localhost:3006/api/orders/bookbike',reqObj)
        // await axios.post('https://vintagemotorsrentals.herokuapp.com/api/bookings/bookbike',reqObj)
        alert('Your bike booked Successfully')
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

export const getAllBookings=()=>async dispatch=>{

    try{
        const response=await axios.get('http://localhost:3006/api/orders/getallbookings')
        // const response=await axios.get('https://vintagemotorsrentals.herokuapp.com/api/tariff')
        dispatch({type:'GET_ALL_BOOKINGS',payload:response.data})
    }
    catch(error){
        console.log(error)
    }
}

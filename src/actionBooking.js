import axios from 'axios';

export const bookBike=(reqObj)=>async dispatch=>{
    console.log(reqObj)
    try{
        await axios.post('http://localhost:3006/api/bookings/bookbike',reqObj)
        alert('Your bike booked Successfully')

    }
    catch(error){
        console.log(error)
    }
}

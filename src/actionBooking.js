import axios from 'axios';

export const bookBike=(reqObj)=>async dispatch=>{
    console.log(reqObj)
    try{
        await axios.post('http://https://vintagemotorsrentals.herokuapp.com/api/bookings/bookbike',reqObj)
        alert('Your bike booked Successfully')

    }
    catch(error){
        console.log(error)
    }
}

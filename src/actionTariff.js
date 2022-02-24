import axios from 'axios';

export const getAllBikes=()=>async dispatch=>{

    try{
        const response=await axios.get('http://localhost:3006/api/tariff')
        dispatch({type:'GET_ALL_BIKES',payload:response.data})
    }
    catch(error){
        console.log(error)
    }
}

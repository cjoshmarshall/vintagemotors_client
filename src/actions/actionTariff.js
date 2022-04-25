import { publicRequest } from '../api/apiHandle';

export const getAllBikes=()=>async dispatch=>{

    try{
        const response=await publicRequest.get('/tariff')
        dispatch({type:'GET_ALL_BIKES',payload:response.data})
    }
    catch(error){
        console.log(error)
    }
}

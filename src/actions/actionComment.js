import { publicRequest } from '../api/apiHandle';


export const comments=(reqObj)=>async dispatch=>{
    
    try{
        const response=await publicRequest.post('/comments', reqObj)
        setTimeout(() => {
          window.location.reload()
        }, 500);
        alert('Submitted Successfully')
    }
    catch(error){
        console.log(error)        
        alert('Something went wrong')
    }
}
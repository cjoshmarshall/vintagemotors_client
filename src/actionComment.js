import axios from 'axios';


export const comments=(reqObj)=>async dispatch=>{
    console.log('hello')
    try{
        const response=await axios.post('http://localhost:3006/api/comments', reqObj)
    }
    catch(error){
        console.log(error)        
        alert('Something went wrong')
    }
}
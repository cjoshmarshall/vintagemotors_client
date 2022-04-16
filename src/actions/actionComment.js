import axios from 'axios';


export const comments=(reqObj)=>async dispatch=>{
    console.log('hello')
    try{
        const response=await axios.post('http://localhost:3006/api/comments', reqObj)
        // const response=await axios.post('https://vintagemotorsrentals.herokuapp.com/api/comments', reqObj)
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
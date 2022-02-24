import axios from 'axios';


export const userLogin=(reqObj)=>async dispatch=>{

    try{
        const response=await axios.post('http://localhost:3006/api/users/login', reqObj)
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    catch(error){
        console.log(error)
        alert('Something went wrong')
    }
}

export const userSignup=(reqObj)=>async dispatch=>{

    try{
        const response=await axios.post('http://localhost:3006/api/users/signup', reqObj)
        alert('Registration Successful')
    }
    catch(error){
        console.log(error)        
        alert('Something went wrong')
    }
}
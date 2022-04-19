import axios from 'axios';


export const userLogin=(reqObj)=>async dispatch=>{

    try{
        const response=await axios.post('https://vintagemotorsrentals.herokuapp.com/api/users/login', reqObj)
        localStorage.setItem('user', JSON.stringify(response.data))
        window.location.replace("/")
    }
    catch(error){
        console.log(error)
        alert('Something went wrong')
    }
}

export const userSignup=(reqObj)=>async dispatch=>{

    try{
        const response=await axios.post('https://vintagemotorsrentals.herokuapp.com/api/users/signup', reqObj)
        alert('Registration Successful')
        window.location.replace("/")
    }
    catch(error){
        console.log(error)        
        alert('Something went wrong')
    }
}
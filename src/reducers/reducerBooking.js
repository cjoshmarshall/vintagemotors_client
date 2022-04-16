export const initialState={
    bookings:[]
}

const reducerBooking=(state=initialState,action)=>{

    switch ((action.type)) {
        case 'GET_ALL_BOOKINGS':
            return {
                ...state,
                bookings:action.payload
            }
    
        default:
            return state;
    }
}

export default reducerBooking;
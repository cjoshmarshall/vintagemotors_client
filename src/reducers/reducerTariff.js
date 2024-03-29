export const initialState={
    tariff:[]
}

const reducerTariff=(state=initialState,action)=>{

    switch ((action.type)) {
        case 'GET_ALL_BIKES':
            return {
                ...state,
                tariff:action.payload
            }
    
        default:
            return state;
    }
}

export default reducerTariff;
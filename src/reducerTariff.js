// import tariff_image1 from './tariff_image1.png';
// import tariff_image2 from './tariff_image2.png';
// import tariff_image3 from './tariff_image3.png';
// import tariff_image4 from './tariff_image4.png';
// import tariff_image5 from './tariff_image5.png';
// import tariff_image6 from './tariff_image6.png';
// import tariff_image7 from './tariff_image7.png';
// import tariff_image8 from './tariff_image8.png';
// import tariff_image9 from './tariff_image9.png';

export const initialState={
    tariff:[
    //     {id:1,name:'Hondo',model:'Activa 3G',bookingTime:'19',kmLimit:'5',excessKmCharges:'4.0' ,image:{tariff_image1}},
    // {id:2,name:'Yamaha',model:'Fascino',bookingTime:'20',kmLimit:'5',excessKmCharges:'4.0' ,image:{tariff_image2}},
    // {id:3,name:'Hondo',model:'Dio',bookingTime:'20',kmLimit:'5',excessKmCharges:'4.0' ,image:{tariff_image3}},
    // {id:4,name:'TVS',model:'Apache RTR 180',bookingTime:'39',kmLimit:'10',excessKmCharges:'5.0' ,image:{tariff_image4}},
    // {id:5,name:'Bajaj',model:'Pulsar 150 Neon',bookingTime:'30',kmLimit:'10',excessKmCharges:'5.0' ,image:{tariff_image5}},
    // {id:6,name:'Yamaha',model:'FZ',bookingTime:'32',kmLimit:'10',excessKmCharges:'5.0' ,image:{tariff_image6}},
    // {id:7,name:'Hondo',model:'CB Hornet 160',bookingTime:'32',kmLimit:'10',excessKmCharges:'5.5' ,image:{tariff_image7}},
    // {id:8,name:'Royal Enfield',model:'Classic 350',bookingTime:'47',kmLimit:'12',excessKmCharges:'5.5' ,image:{tariff_image8}},
    // {id:9,name:'Royal Enfield',model:'Thunderbird 350',bookingTime:'47',kmLimit:'12',excessKmCharges:'5.5' ,image:{tariff_image9}}
]
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
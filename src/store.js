import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import reducerTariff from './reducers/reducerTariff'
import reducerBooking from './reducers/reducerBooking'

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const reducer=combineReducers({
    reducerTariff,
    reducerBooking
});

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
    
    // other store enhancers if any
  )
);

export default store;

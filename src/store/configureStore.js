// Store/configureStore.js

import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk'; 
import postReducer from './reducers/postReducer'

export default createStore(postReducer,applyMiddleware(thunk))
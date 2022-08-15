import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import allReducers from './reducers';


const store = createStore(
    allReducers,
    applyMiddleware(logger)
  )


export default store
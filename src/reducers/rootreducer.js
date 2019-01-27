import {
    combineReducers
  } from 'redux';
  import VisionReducer from './visions'
  
  
  export default combineReducers({
    visions: VisionReducer,

  });
import {
    combineReducers
  } from 'redux';
import VisionReducer from './visions';
import DreamReducer from './dreams';
import ideaReducer from './ideas';

  
  
  export default combineReducers({
    visions: VisionReducer,
    dreams: DreamReducer,
    ideas: ideaReducer,
  });
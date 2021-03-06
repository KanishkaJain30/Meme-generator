import { combineReducers } from 'redux';
//import {reducer as formReducer} from 'redux-form';
import {EXPORT_MEMES, NEW_MEME} from '../actions/index';

function memes(state=[], action)
{
   switch(action.type)
   {
     case EXPORT_MEMES: return action.memes;
     default: return state
   }
}

function myMeme(state=[], action)
{
  switch(action.type)
  {
    case NEW_MEME: state=[...state,action.meme];
    return state;
    default :
    return state;
  }
}
const rootReducer = combineReducers({
  memes,myMeme
});

export default rootReducer;
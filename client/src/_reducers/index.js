import { combineReducers } from 'redux';
import match from './match_reducer';

const rootReducer = combineReducers({
    match
});

export default rootReducer;
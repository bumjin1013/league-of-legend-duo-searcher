import { combineReducers } from 'redux';
import match from './match_reducer';
import user from './user_reducer';

const rootReducer = combineReducers({
    user
});

export default rootReducer;
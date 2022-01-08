import {
    GET_MATCH,
    ADD_MATCH
} from '../_actions/types';

export default function(state={}, action){
    switch(action.type){
        case GET_MATCH:
            return {...state, match: action.payload}
        case ADD_MATCH:
            return {...state, match: action.payload}
        default:
            return state;
    }
}
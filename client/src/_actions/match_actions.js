import axios from 'axios';
import { 
    ADD_MATCH,
    GET_MATCH 
} from './types';

import { MATCH_SERVER } from '../components/Config.js';

export async function getMatch(body){
    const request = await axios.get(`${MATCH_SERVER}/match`)
        .then(response => response.data);

    return {
        type: GET_MATCH,
        payload: request
    }
}

export async function addMatch(body){
    const request = await axios.post(`${MATCH_SERVER}/match`, body)
        .then(response => response.data);

    return {
        type: ADD_MATCH,
        payload: request
    }
}
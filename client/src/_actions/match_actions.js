import axios from 'axios';
import { 
    ADD_MATCH
} from './types';

import { MATCH_SERVER } from '../components/Config.js.js.js';

export async function addMatch(body){
    const request = await axios.post(`${MATCH_SERVER}/match`, body)
        .then(response => response.data);

    return {
        type: ADD_MATCH,
        payload: request
    }
}
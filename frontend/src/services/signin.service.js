import {urlConstants} from '../constants';
import axios from 'axios';
import qs from 'querystring';

export const signinService = {
    signIn
}

function signIn(values) {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    return axios.post(urlConstants.SIGNIN, qs.stringify(values), { headers: headers }); 
}

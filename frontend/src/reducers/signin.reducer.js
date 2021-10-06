import {signinConstants} from '../constants';
const initState = {isLoading: false, success: false};

export function signIn(state = initState, action) {
    switch(action.type) {
        case signinConstants.SIGNIN_REQUEST:
            return {isLoading: true, success: false};
        case signinConstants.SIGNIN_SUCCESS:
            return {isLoading: true, success: true, data: action.payload};
        case signinConstants.SIGNIN_FAILIURE:
            return {isLoading: true, success: false, data: action.payload};
        default:
            return state;
    }
}
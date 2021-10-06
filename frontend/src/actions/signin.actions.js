import {signinConstants} from '../constants';
import { history } from '../helpers';
import {signinService} from '../services';
import { alertActions } from './alert.actions';

export const signinActions = {
    signIn,
    signOut
}

function signIn(values) {
    return dispatch => {
        dispatch(request());
        signinService.signIn(values)
        .then((response) => {
            let res = response.data;
            if(res.success) {
                dispatch(success(response));
                dispatch(alertActions.success('Signed in successfully.'));
                // set localStorage auth params
                history.push('/view-students');
                localStorage.setItem('isAuthenticated', 1);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('data', JSON.stringify(res.data));
            }
            else {
                dispatch(alertActions.failure(res.message));
                dispatch(failure(response));
            }
        }, (err) => {
            dispatch(failure(err));
        })
    }
    function request() { return { type: signinConstants.SIGNIN_REQUEST } }
    function success(payload) { return { type: signinConstants.SIGNIN_SUCCESS, payload } }
    function failure(payload) { 
        return {
            type: signinConstants.SIGNIN_FAILIURE,
            // payload: { 
            //     error: (typeof payload === 'string' ? payload : payload.toString()) 
            // }
            payload
        }
    }
}
function signOut() {
    return {
        type: signinConstants.SIGNOUT
    }
}
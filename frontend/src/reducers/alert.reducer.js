import {alertConstants} from '../constants';

export function alert(state = {}, action) {
    switch(action.type) {
        case alertConstants.ALERT_SUCCESS:
            return {message: action.message, type: 'success'}
        case alertConstants.ALERT_DANGER:
            return {message: action.message, type: 'danger'}
        case alertConstants.ALERT_INFO:
            return {message: action.message, type: 'info'}
        case alertConstants.ALERT_CLEAR:
            return {}
        default:
            return state;
    }
}
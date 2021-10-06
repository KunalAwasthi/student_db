import {alertConstants} from '../constants';

function success(message) {
    return { type: alertConstants.ALERT_SUCCESS, message } 
}
function failure(message) {
    return { type: alertConstants.ALERT_DANGER, message } 
}
function info(message) {
    return { type: alertConstants.ALERT_INFO, message } 
}
function clear() {
    return { type: alertConstants.ALERT_CLEAR } 
}

export const alertActions = {
    success,
    failure,
    info,
    clear
}
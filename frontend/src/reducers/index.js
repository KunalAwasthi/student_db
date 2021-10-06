import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import * as signinReducers from './signin.reducer';
import * as alertReducers from './alert.reducer';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    form: reducer,
    ...signinReducers,
    ...alertReducers
});
export default rootReducer;
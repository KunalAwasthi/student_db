import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import { routerMiddleware } from 'connected-react-router';

import {history} from './history';

// const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const loggerMiddleware = createLogger();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer(history),
    composeEnhancer(applyMiddleware(thunkMiddleware, loggerMiddleware, middleware))
);
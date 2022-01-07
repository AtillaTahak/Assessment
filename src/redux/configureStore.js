import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import todoRedux from './todo/'

const reducer =combineReducers({
    todo:todoRedux,
})

const store  = createStore(
    reducer,
    applyMiddleware(logger,thunk),
)

export default store ;
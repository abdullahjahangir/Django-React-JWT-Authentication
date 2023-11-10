import counter from './counter';
import todo from './todo';
import auth from './auth';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter,
    todo,
    auth
});

export default rootReducer;
import { combineReducers } from 'redux';

import Auth from './Auth';

// key is the state prop
export default combineReducers({
    auth: Auth
});

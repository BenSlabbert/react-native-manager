import { combineReducers } from 'redux';

import Auth from './AuthReducer';

// key is the state prop
export default combineReducers({
    auth: Auth
});

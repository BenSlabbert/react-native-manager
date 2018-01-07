import { combineReducers } from 'redux';

import Auth from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

// key is the state prop
export default combineReducers({
    auth: Auth,
    employeeForm: EmployeeFormReducer
});

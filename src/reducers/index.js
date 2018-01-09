import { combineReducers } from 'redux';

import Auth from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

// key is the state prop
export default combineReducers({
    auth: Auth,
    employeeForm: EmployeeFormReducer,
    employeeReducer: EmployeeReducer
});

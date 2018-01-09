import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {

        case EMPLOYEE_UPDATE :
            // action.payload = {prop: 'name', value = 'ben'}
            // [action.payload.prop] = key interpolation
            return {
                ...state,
                [ action.payload.prop ]: action.payload.value
            };

        case EMPLOYEE_CREATE:
            // reset form
            return INITIAL_STATE;

        default:
            return state;
    }
}

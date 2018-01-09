import {
    EMPLOYEES_FETCH_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {};

// data from firebase looks like this:

// {
// '-L2JOonprSIefZEZ3cPC':
// { name: 'ben', phone: '123123123123', shift: 'Tuesday' },
// '-L2Ob4d4X1a7AAWJXKaa':
// { name: 'new', phone: '123123213', shift: 'Saturday' },
// '-L2ObKx89mJ4zpXllVhZ':
// { name: 'test2', phone: '22222', shift: 'Saturday' }
// }

export default ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case EMPLOYEES_FETCH_SUCCESS:
            return { ...state, [ id ]: action.payload };

        default:
            return state;
    }
}

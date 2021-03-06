import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { EMPLOYEE_CREATE, EMPLOYEE_SAVE_SUCCESS, EMPLOYEE_UPDATE, EMPLOYEES_FETCH_SUCCESS } from './types';

export const employeeUpdate = ( { prop, value } ) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ( { name, phone, shift } ) => {

    const { currentUser } = firebase.auth();

    return ( dispatch ) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.main({ type: 'reset' });
            });
    };
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();

    return ( dispatch ) => {
        // this runs once (like a meteor subscription)
        // auto gets new data from firebase
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
            });
    };
};

export const employeeSave = ( { name, phone, shift, uid } ) => {

    const { currentUser } = firebase.auth();

    return ( dispatch ) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
                Actions.main({ type: 'reset' });
            });
    };
};

export const employeeDelete = ( { uid } ) => {

    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                console.log('success');
                Actions.main({ type: 'reset' });
            })
            .catch(( err ) => {
                console.log('an error: ', err);
            });
    };
};

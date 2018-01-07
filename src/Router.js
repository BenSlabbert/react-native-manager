import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="login" component={LoginForm} title="Login"/>
                <Scene key="employeeList" component={EmployeeList} title="Employees"/>
            </Stack>
        </Router>
    );
};

export default RouterComponent;
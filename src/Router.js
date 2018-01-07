import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar={true}>
                {/*<Scene key='auth'>*/}
                {/*<Scene key='login' component={LoginForm} title='Login'/>*/}
                {/*</Scene>*/}

                <Scene key='main'>
                    {/*<Scene*/}
                    {/*title='Employees'*/}
                    {/*key='employeeList'*/}
                    {/*component={EmployeeList}*/}
                    {/*rightTitle='Add'*/}
                    {/*onRight={() => Actions.employeeCreate()}*/}
                    {/*/>*/}
                    <Scene
                        title='Create Employee'
                        key='employeeCreate'
                        component={EmployeeCreate}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;

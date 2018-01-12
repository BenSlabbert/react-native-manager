import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';

import { employeeSave, employeeUpdate } from "../actions";
import { Button, Card, CardSection, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {

    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.employee, ( value, prop ) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    }

    onTextPress() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Next shift: ${shift}`);
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => {
                        this.setState({ showModal: !this.state.showModal })
                    }}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm visible={this.state.showModal}>
                    Are you sure?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = ( state ) => {
    const { name, phone, shift } = state.employeeForm;

    return {
        name, phone, shift
    };
};

export default connect(mapStateToProps, {
    employeeUpdate, employeeSave
})(EmployeeEdit);

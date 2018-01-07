import React, { Component } from 'react';
import { connect } from 'react-redux';

import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Name'
                        placeholder='Jane'
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({
                            props: 'name', value: text
                        })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Phone Number'
                        placeholder='555-555-5555'
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({
                            props: 'phone', value: text
                        })}
                    />
                </CardSection>

                <CardSection>
                </CardSection>

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);

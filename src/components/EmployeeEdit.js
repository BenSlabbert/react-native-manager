import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Card, CardSection } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    render() {
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button>
                        Save Changes
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default connect(null, {})(EmployeeEdit);

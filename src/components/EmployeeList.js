import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { employeesFetch } from "../actions";

class EmployeeList extends Component {

    // called just before component is rendered
    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    // called with next set of props
    // this.props is the old set of props
    componentWillReceiveProps( nextProps ) {
        this.createDataSource(nextProps);
    }

    createDataSource( { employees } ) {
        const ds = new ListView.DataSource({
            rowHasChanged: ( r1, r2 ) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    render() {
        return (
            <View>
                <Text>
                    Employee list
                </Text>
            </View>
        );
    }
}

const mapStateToProps = ( state ) => {

};

export default connect(null, { employeesFetch })(EmployeeList);

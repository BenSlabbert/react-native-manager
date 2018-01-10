import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { employeesFetch } from "../actions";
import ListItem from './ListItem';

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

    renderRow( employee ) {
        return <ListItem employee={employee}/>
    }

    render() {
        console.log(this.props);
        return (
            <ListView
                emableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}>
            </ListView>
        );
    }
}

const mapStateToProps = ( state ) => {
    const employees = _.map(state.employees, ( val, uid ) => {
        return { ...val, uid };
    });

    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

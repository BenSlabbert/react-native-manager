import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';
import LoginForm from './components/LoginForm';

export default class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCmSA8D9OkUBBATAp9O-8MUSQhWz4h2XLY',
            authDomain: 'manager-bcc57.firebaseapp.com',
            databaseURL: 'https://manager-bcc57.firebaseio.com',
            projectId: 'manager-bcc57',
            storageBucket: '',
            messagingSenderId: '305636541708'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <LoginForm/>
                </View>
            </Provider>
        );
    }
}

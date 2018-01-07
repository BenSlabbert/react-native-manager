import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import RouterComponent from './Router';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <RouterComponent/>
            </Provider>
        );
    }
}

import React, {Component} from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reduxThunk from 'redux-thunk';
import Routes from './Routes';
import reducers from './Reducers';

class App extends Component{

    componentWillMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyABgrDxWQnwrG1Vl_iI4rnPZHh-SD5AgWw",
            authDomain: "whatsappclone-8833f.firebaseapp.com",
            projectId: "whatsappclone-8833f",
            storageBucket: "whatsappclone-8833f.appspot.com",
            messagingSenderId: "448375708818",
            appId: "1:448375708818:web:dcbf3b126466c79fea5a4b",
            measurementId: "G-EL13PY4C5C"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
                <Routes />
            </Provider>
        )
    }
} 

export default App
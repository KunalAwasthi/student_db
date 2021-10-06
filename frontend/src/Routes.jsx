import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {history, store} from './helpers';
import { Provider, connect } from 'react-redux';
import Header from './components/Header';
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import Alert from "./components/Alert";
import axios from 'axios';
class Routes extends React.Component {
    componentDidMount() {
        axios.defaults.baseURL = 'http://localhost:8080';
    }

    render() {
        let {alert, signIn} = this.props;
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Header 
                        signIn={signIn}
                    />
                    {this.showAlert(alert)}
                    <Route render={({location}) => ( 
                        <Switch location={location}>
                            <Route component={Dashboard} exact path="/" />
                            <Route component={Signin} exact path="/signin" />
                            <ProtectedRoute component={Dashboard} exact path="/student-registration" />
                            <ProtectedRoute component={Dashboard} exact path="/view-students" />
                        </Switch>
                    )} />
                </Router>
            </Provider>
        )
    }

    showAlert(alert) {
        if(alert && alert.message && alert.type) {
            return (
                <Alert
                    type={alert.type}   
                    message={alert.message}   
                />
            )
        }
        return '';
    }
}
function mapStateToProps({alert, signIn}) {
    return {
        alert,
        signIn
    }
}
export default connect(mapStateToProps)(Routes);
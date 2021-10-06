import React from "react";
import {store} from '../../helpers';
import { Provider, connect } from 'react-redux';

class Dashboard extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <div className="py-4">
                        <h3>Student CRUD</h3>
                        <p>Performs tasks listed below</p>
                        <ul>
                            <li>Signin</li>
                            <li>Student Registration</li>
                            <li>View all students</li>
                        </ul>
                    </div>
                </div>
            </Provider>
        );
    }
}
function mapStateToProps(state) {
    return {
    }
}
export default connect(mapStateToProps)(Dashboard);
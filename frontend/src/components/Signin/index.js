import React from "react";
import {store} from '../../helpers';
import { Provider } from 'react-redux';
import { Button, Form, FormGroup, } from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import {required, isEmail} from '../../validations';
import {renderInput} from '../inputs';
import { signinActions } from "../../actions";


class Signin extends React.Component {
    handleSubmit(values) {
        console.log(values);
        this.props.dispatch(signinActions.signIn(values));
    }
    render() {
        let {handleSubmit} = this.props;
        return (
            <Provider store={store}>
                <div className="container">
                    <div className="py-4">
                        <Form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                            <Field
                                name="email"
                                type="email"
                                label="Email"
                                placeholder="Enter Email Address"
                                required={true}
                                component={renderInput}
                                validate={[required, isEmail]}
                            />
                            <Field
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="Enter Password (6-32 long)"
                                required={true}
                                component={renderInput}
                                validate={[required]}
                            />
                            <FormGroup className="mt-3">
                                <Button>Signin</Button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </Provider>
        );
    }
}
function mapStateToProps({signIn}) {
    return {
        signIn
    }
}
export default reduxForm({
    form: 'signinForm'
})(Signin);
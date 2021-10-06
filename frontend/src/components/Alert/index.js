import React, {useState} from 'react';
import { Alert as BSAlert } from 'reactstrap';
import {useDispatch} from 'react-redux';
import { alertActions } from '../../actions/alert.actions';
const Alert = (props) => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);    
    const dispatch = useDispatch();
    return (
        <BSAlert color={props.type} isOpen={visible} toggle={() => {
            dispatch(alertActions.clear());
            onDismiss();
        }}>
            {props.message}
        </BSAlert >
    );
}

export default Alert;
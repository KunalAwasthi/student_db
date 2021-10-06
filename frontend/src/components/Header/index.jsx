import React, { useState } from "react";
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { signinActions } from "../../actions";
import { history } from "../../helpers";

const Header = (props) => {
    const {signIn} = props;
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const dispatch = useDispatch();
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    return (
        <Navbar color="light" light expand="md">
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/">Dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/student-registration">Student Registration</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/view-students">Students</NavLink>
                        </NavItem>
                        {!isAuthenticated ? <NavItem>
                            <NavLink className="nav-link" to="/signin">Signin</NavLink>
                        </NavItem> : ''}
                        {isAuthenticated ? <NavItem>
                            <NavLink className="nav-link" to="#" onClick={() => {
                                // could have applied more optimized and elegant solution but was low on time.
                                localStorage.removeItem('isAuthenticated');
                                localStorage.removeItem('data');
                                localStorage.removeItem('token');
                                dispatch(signinActions.signOut());
                                history.push('/');
                            }}>Signout</NavLink>
                        </NavItem> : ''}
                    </Nav>
            </Collapse>
        </Navbar>
    )        
    
}

export default Header;
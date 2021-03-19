import React, { useContext } from 'react'
import { Navbar, Nav, Form} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { userContext } from '../../App'
import firebase from "firebase/app";
import "firebase/auth";

function Header() {
    const linkStyle = { padding:'10px 15px',border:'none'}
    const [loginUser,setLoginUser] = useContext(userContext);
    const histroy = useHistory();

    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            setLoginUser({});
            histroy.push('/');

        }).catch(error => {
            alert('Sign out error ', error)
        })
    }
    return (
            <Navbar bg="light" variant="light">
                <Link style={linkStyle} to="/">Bangla Ride</Link>
                <Link style={linkStyle} to="/">{loginUser.displayName && `User Name : ${loginUser.displayName}`}</Link>
                <Nav className="ml-auto">
                    <Link style={linkStyle} to="/">Home</Link>
                    <Link style={linkStyle} to="/destination">Destination</Link>
                    <Link style={linkStyle} to="/blog">Bloc</Link>
                    <Link style={linkStyle} to="/contuct">Contuct</Link>
                    {loginUser.email ? <button onClick={handleSignOut} className='btn btn-success'>Sign Out</button>:<Link style={linkStyle} className='btn btn-success' to="/login">Login</Link>}
                </Nav>
            </Navbar>
    )
}

export default Header

import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login2 from '../../../images/login-2.jpg';


const Login = () => {
    const { user, handleLogin, signInWithGoogle, isLoading, authError } = useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        handleLogin(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = e => {
        signInWithGoogle(location, history);
       e.preventDefault();
    }

    return (
        <div className="container my-5 pb-3">
            <div className="row">

                <div className="col-md-6 col-sm-12">
                    <div className="img">
                        <img className="img-fluid" src={login2} alt="" />
                    </div>
                </div>

                <div className="col-md-6 col-sm-12">
                    <h1 className="text-center fw-bold text-primary" >Login</h1>

                    {isLoading && <Spinner animation="border" variant="danger" />}
                    {user?.email && <Alert >User Created successfully!</Alert>}

                    <form
                        onSubmit={handleLoginSubmit}
                        className="pt-5">

                        <input onChange={handleOnChange} type="email" name="email" id="" placeholder="Email" className="border-bottom border-0 w-50" />
                        <br /> <br />
                        <input onChange={handleOnChange} type="password" name="password" id="" placeholder="Password" className="border-bottom border-0 w-50" />
                        <br /> <br />

                        <input className="mt-5 w-50 btn btn-outline-primary m-auto" type="submit" value="Login" />

                        <p className="text-center pt-3 mb-5">
                            <NavLink className="text-decoration-none text-primary" to="/registration">
                                New User? Please Register!!
                            </NavLink>
                        </p>

                        <p className="text-danger">{authError}</p>

                        <p>__________or__________</p>

                        <button onClick={handleGoogleSignIn} type="submit" className="btn btn-outline-primary me-2"> <FontAwesomeIcon icon={faGoogle} /> Google Sign In</button>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default Login;
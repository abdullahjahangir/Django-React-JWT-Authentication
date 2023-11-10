import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register, dispatchError } from "../actions/auth";


const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            dispatch(dispatchError('Passwords do not match'))
        }else if(username==='' || email==='' || password==='' || password2==='') {
            dispatch(dispatchError('Input Field is Empty. Kindly Refill the fields'))
        }
        else {
            dispatch(register(username, password, email))
        };
    }

    useEffect(() => {
        if(auth.isAuthenticated){
            navigate('/Home')
        }
    }, [auth.isAuthenticated, navigate])

    if(auth.isAuthenticated === false){
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                <h2 className="text-center">Register</h2>
                <form onSubmit={(event)=>{onSubmit(event)}}>
                    <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={(event)=>{setUsername(event.target.value)}}
                        value={username}
                    />
                    </div>
                    <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={(event)=>{setEmail(event.target.value)}}
                        value={email}
                    />
                    </div>
                    <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={(event)=>{setPassword(event.target.value)}}
                        value={password}
                    />
                    </div>
                    <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password2"
                        onChange={(event)=>{setPassword2(event.target.value)}}
                        value={password2}
                    />
                    </div>
                    <div className="form-group">
                    <button type="submit" className="my-1 btn btn-primary">
                        Register
                    </button>
                    </div>
                    <p>
                    Already have an account? 
                    <Link to="/Login">Login</Link>
                    </p>
                </form>
                </div>
            </div>
        )
    }
}

export default Register

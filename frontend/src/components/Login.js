import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login, dispatchError } from "../actions/auth";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        if(username==='' || password===''){
            dispatch(dispatchError('Input Field is Empty. Kindly Refill the fields'))
        }else{
            dispatch(login(username, password))
        }
    };
    useEffect(() => {
        if(auth.isAuthenticated){
            navigate('/Home')
        }
    }, [auth.isAuthenticated,navigate])

    if(auth.isAuthenticated === false){
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                <h2 className="text-center">Login</h2>
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
                        <button type="submit" className="my-1 btn btn-primary">
                            Login
                        </button>
                    </div>
                    <p>
                    Do not have an account? 
                    <Link to="/Register">Signup</Link>
                    </p>
                </form>
                </div>
            </div>
      )
    }

}

export default Login

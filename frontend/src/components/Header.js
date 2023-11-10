import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../actions/auth";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <Link className='navbar-brand mr-auto' to="/Home">Auth App</Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className='nav-link' to="/Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to="/Profile">Profile</Link>
          </li>
        </ul>

        <ul className="navbar-nav">
          <li className="nav-item">
            <span className='nav-link'><b>{user.email}</b></span>
          </li>
          <li className="nav-item">
            <button onClick={() => dispatch(logout())} className="btn btn-danger">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header

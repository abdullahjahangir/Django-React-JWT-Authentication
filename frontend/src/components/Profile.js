import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <Header/>
      <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Profile Data</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>User Name:</strong> {user.username}</li>
            <li className="list-group-item"><strong>Email:</strong> {user.email}</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile

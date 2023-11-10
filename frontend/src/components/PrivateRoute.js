import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const auth = useSelector((state) => state.auth);

  if(auth.isloading){
    return  <div>Loading</div>
  }else if(auth.isAuthenticated){
    return <Outlet />
  }else{
    return <Navigate to={'/Login'}/>
  }
}

export default PrivateRoute

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearError } from '../actions/auth';
import { clearTodoError } from '../actions/todo';


const Alert = () => {
  const authError = useSelector((state) => state.auth.error);
  const todoError = useSelector((state) => state.todo.error);
  const dispatch = useDispatch();

  const handleAuthAlertClose = () => {
    dispatch(clearError());
  };
  const handleTodoAlertClose = () => {
    dispatch(clearTodoError());
  };

  return (
    <>
      {authError ? (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {authError}
          <button type="button" className="btn-close" aria-label="Close" onClick={handleAuthAlertClose}></button>
        </div>
      ) : null}
  
      {todoError ? (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {todoError}
          <button type="button" className="btn-close" aria-label="Close" onClick={handleTodoAlertClose}></button>
        </div>
      ) : null}
    </>
  );
  
};

export default Alert;

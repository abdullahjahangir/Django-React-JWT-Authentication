import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos, addTodo, deleteTodo, deleteAllTodos } from "../actions/todo";
import { dispatchTodoError } from '../actions/todo';

const Todo = () => {
    const todo = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');


    const sendTodo=()=>{
        if (inputValue !== '') {
            dispatch(addTodo(inputValue));
            setInputValue('');
        }else{
            dispatch(dispatchTodoError('Input Field is Empty.'));
        }
    }

    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch])
    
    return (
        <>
            <div className="container mt-3">
                <div id="todoForm" className="row justify-content-center mb-3">    
                    <div className="col-md-6 d-flex justify-content-between rounded">
                        <input value={inputValue} onChange={(event)=>{setInputValue(event.target.value)}} type="text" className="form-control rounded p-2" placeholder="Add a todo" style={{ width: '65%' }}/>
                        <button onClick={sendTodo} className="btn btn-primary mx-1">Add</button>
                        <button onClick={()=>{dispatch(deleteAllTodos())}} className="btn btn-danger mx-1">Remove All</button>
                    </div>
                </div>    
                <div id="displayTodos" className="mt-1 container justify-content-center">
                    {
                        todo.list.map((curTodo) => {
                            return (
                                <div className="row justify-content-center my-2" key={curTodo.id}>
                                    <div className="col-md-6 rounded p-2 ">
                                    <div className="d-flex rounded justify-content-between m-1 bg-light p-2">
                                        <h4>{curTodo.data}</h4>
                                        <div>
                                            <button 
                                                onClick={()=>{dispatch(deleteTodo(curTodo.id))}} 
                                                className="btn btn-danger mx-1">
                                                    Delete
                                            </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            );
                        })
                    }       
                </div>  
            </div>
        </>
    )
}

export default Todo

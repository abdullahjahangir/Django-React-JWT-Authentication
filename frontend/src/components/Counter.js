import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber, setNumber } from "../actions/counter";


function Counter() {
    const myState = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const savedCounter = localStorage.getItem('counter');
    const [inputValue, setInputValue] = useState(savedCounter ? parseInt(savedCounter, 10) : myState);
  
  
  
    useEffect(() => {
      localStorage.setItem('counter', myState);
    }, [myState]);
  
  
    const handleInputChange = (event) => {
      const value = event.target.value;
      if (value) {
        const parsedValue = parseInt(value, 10);
        dispatch(setNumber(parsedValue));
        setInputValue(parsedValue)
      }
      else{
        dispatch(setNumber(0));
        setInputValue(0)
      }
    };
  
    const handleIncrement = () =>{
      dispatch(incNumber())
      setInputValue(inputValue+1)
    }
  
    const handleDecrement = () =>{
      dispatch(decNumber())
      setInputValue(inputValue-1)
    }
  
    return (
      <div className="container">
        <div className="mt-4 p-4 row justify-content-center">
          <div className='my-4 d-flex justify-content-center'>
            <h1 style={{backgroundColor:"#008080"}} className=' rounded p-2 text-white'>Counter App</h1>
          </div>
          <div style={{backgroundColor: "#87CEEB"}} className="rounded py-2 col-4 mx-auto d-flex justify-content-center align-items-center">
            <button onClick={handleDecrement} className="btn btn-light" style={{ fontWeight: "bold" }}>-</button>
            <input
              onChange={handleInputChange}
              value={inputValue}
              type="number"
              className="form-control mx-3"
              style={{ textAlign: "center", height: "5rem", width: "10rem", fontSize: "3rem" }}
            />
            <button onClick={handleIncrement} className="btn btn-light" style={{ fontWeight: "bold" }}>+</button>
          </div>
        </div>
      </div>
    );
}

export default Counter

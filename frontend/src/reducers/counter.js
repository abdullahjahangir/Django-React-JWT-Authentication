const savedCounter = localStorage.getItem('counter');
const initialState = savedCounter ? parseInt(savedCounter, 10) : 0;

const counter = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "SET":
            return action.payload; // Corrected action.payload
        default:
            return state;
    }
};

export default counter;

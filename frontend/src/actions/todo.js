import axios from 'axios';

const getConfig = (getState) => {
    const state = getState();
    const token = state.auth.token;
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
};

export const getAllTodos = () => async (dispatch, getState) => {
    try {
        const config = getConfig(getState);
        const res = await axios.get('http://127.0.0.1:8000/api/todos/', config);
        dispatch({ type: "GET_ALL_TODO" , payload: res.data });
    } catch (error) {
        dispatch({ type: "DISPATCH_TODO_ERROR" , payload: "Server Is Offline" });
    }
}

export const addTodo = (data) => async (dispatch, getState) => {
    try {
        const config = getConfig(getState);
        const res = await axios.post('http://127.0.0.1:8000/api/todos/', { data }, config);
        dispatch({ type: "ADD_NEW_TODO" , payload: res.data });
    } catch (error) {
        dispatch({ type: "DISPATCH_TODO_ERROR" , payload: "Server Is Offline" });
    }
}

export const deleteTodo = (id) => async (dispatch, getState) => {
    try {
        const config = getConfig(getState);
        const res = await axios.delete(`http://127.0.0.1:8000/api/todos/${id}`, config);
        dispatch({ type: "DELETE_TODO" , payload: id });
    } catch (error) {
        dispatch({ type: "DISPATCH_TODO_ERROR" , payload: "Server Is Offline" });
    }
}

export const deleteAllTodos = () => async (dispatch, getState) => {
    try {
        const config = getConfig(getState);
        const res = await axios.get('http://127.0.0.1:8000/api/todos', config);
        const todoIds = res.data.map((todo) => todo.id);

        for (const id of todoIds) {
            const res = await axios.delete(`http://127.0.0.1:8000/api/todos/${id}`, config);
        }

        dispatch({ type: "DELETE_ALL_TODO"});
    } catch (error) {
        dispatch({ type: "DISPATCH_TODO_ERROR" , payload: "Server Is Offline" });
    }
};

export const dispatchTodoError = (error) => (dispatch) => {
    dispatch({
        type: 'DISPATCH_TODO_ERROR',
        payload: error,
    });
};

export const clearTodoError = () => (dispatch) => {
    dispatch({
        type: 'CLEAR_TODO_ERROR',
    });
};

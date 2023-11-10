const initialState = {
  list: [],
  error: null
};

const todo = (state = initialState, action) => {
  switch (action.type) {
      case "GET_ALL_TODO":
        return {
            ...state,
            list: action.payload
        };
      case "ADD_NEW_TODO":
        return {
          ...state,
          list: [...state.list,action.payload]
        };
      case "DELETE_TODO":
        const filteredList = state.list.filter(todo => todo.id !== action.payload);
        return {
          ...state,
          list: filteredList
        };
      case "DELETE_ALL_TODO":
        return {
          ...state,
          list: []
        };
      case 'CLEAR_TODO_ERROR':
        return {
          ...state,
          error: null,
        };
      case 'DISPATCH_TODO_ERROR':
        return {
          ...state,
          error: action.payload,
        }    
      default:
        return state;
  }
};

export default todo;

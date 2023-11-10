const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isloading: false,
    user: null,
    error: null
  };

  
const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOADING':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'USER_LOADED':
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      case 'REGISTER_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case 'AUTH_ERROR':
    case 'LOGIN_FAIL':
    case 'LOGOUT_SUCCESS':
    case 'REGISTER_FAIL':
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    case 'DISPATCH_ERROR':
      return {
        ...state,
        error: action.payload,
      };      
    default:
      return state;
  }
  // switch (action.type) {
  //   case 'USER_LOADING':
  //     return {
  //       ...state,
  //       isLoading: true,
  //     };
  //   case 'USER_LOADED':
  //     return {
  //       ...state,
  //       isAuthenticated: true,
  //       isLoading: false,
  //       user: action.payload,
  //     };
  //   case 'AUTH_ERROR':
  //     localStorage.removeItem("token")
  //     return {
  //       ...state,
  //       token: null,
  //       user: null,
  //       isAuthenticated: false,
  //       isLoading: false,
  //     };
  //   default:
  //       return state;
  // }
};
  
export default auth;
  
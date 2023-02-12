import { createContext, useEffect, useReducer } from "react";

const INNITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading:false,
  error:null
};

export const UserInformation = createContext(INNITIAL_STATE);

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
      case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
      case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };

    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INNITIAL_STATE);
  useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(state.user))
  },[state.user])
  return (
    <UserInformation.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserInformation.Provider>
  );
};

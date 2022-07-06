import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    //user: null,
    //Initialized user to avoid login every time
    // user: {
    //     _id: "62bdf4b7d9eaf97bbcdc7e5e",
    //     username: "rios",
    //     email: "rios@mail.com",
    //     profilePicture: "",
    //     coverPicture: "",
    //     followers: [],
    //     followings: [],
    // },

    user: {
        _id: "62c4df52dd3637bcb693c537",
        username: "john",
        email: "john@mail.com",
        profilePicture: "",
        coverPicture: "",
    },
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
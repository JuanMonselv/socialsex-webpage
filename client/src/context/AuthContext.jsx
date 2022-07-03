import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    //user: null,
    //Initialized user to avoid login every time
    user: {
        _id: "62bdf4b7d9eaf97bbcdc7e5e",
        username: "rios",
        email: "rios@mail.com",
        // password: "$2b$10$ZqlQly6IaZYYJVeo97HCk.URXFPp.2BKHYpaRQgAJybwyp.Up4MSW",
        profilePicture: "",
        coverPicture: "",
        followers: [],
        followings: [],
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
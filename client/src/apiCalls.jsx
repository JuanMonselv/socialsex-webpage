import axios from "axios"

export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    const url = "http://localhost:4000/api/"
    try {
        const res = await axios.post(
            `${url}auth/login`,
            userCredential,
        );

        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
}

import { createContext, useContext, useState, useEffect } from "react";
import axiosClient from "../axios-client.js";
const StateContext = createContext({
    currentUser: null,
    token: null,
    setUser: () => { },
    setToken: () => { }
})
export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, _setToken] =
        useState(localStorage.getItem('ACCESS_TOKEN'));
    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    useEffect(() => {
        if (token) {
            axiosClient.get('/user')
                .then(({ data }) => {
                    setUser(data)
                })
                .catch(() => {
                    _setToken(null)
                    setUser({})
                    localStorage.removeItem('ACCESS_TOKEN')
                })
        }
    }, [token])

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => useContext(StateContext)
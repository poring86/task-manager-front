export const SET_LOGIN = 'SET_LOGIN'

export const SET_LOGOUT = 'SET_LOGOUT'

export const setLogin = (user, token) => {
    return{
        type: SET_LOGIN,
        user,
        token
    }
}

export const setLogout = () => {
    return{
        type: SET_LOGOUT
    }
}
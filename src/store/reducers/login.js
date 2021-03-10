import { SET_LOGIN, SET_LOGOUT } from '../actions/login'

const initialState = {
    user:{},
    token:''
}

export default (state = initialState, action) => {
    switch (action.type){
        case SET_LOGIN:
            return{
                user: action.user,
                token: action.token
            }
        case SET_LOGOUT:
            return initialState
        default:
            return state
    }
}
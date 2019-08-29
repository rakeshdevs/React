export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_CHECK_CALLBACK = 'LOGIN_CHECK_CALLBACK'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'

export const FORGET_PASSWORD = 'FORGET_PASSWORD'

export const LOGOUT = 'LOGOUT'

export const LOGIN_INITIAL_CHECK = 'LOGIN_INITIAL_CHECK'

export const RENEW_TOKEN_CHECK = 'RENEW_TOKEN_CHECK'
export const RENEW_SUCCESS = 'RENEW_SUCCESS'

export const login = () => {
    return {type: LOGIN_REQUEST }
}

export const register = (type) => {
    return {type: REGISTER_REQUEST, payload: {type} }
}

export const loginSuccess = (account) => {
    return {type: LOGIN_SUCCESS, payload: {account} }
}

export const loginError = (message) => {
    return {type: LOGIN_ERROR, payload: {message} }
}

export const logout = () => {
    return {type: LOGOUT }
}

export const initialLoLoginCheck = () => {
    return {type: LOGIN_INITIAL_CHECK }
}

export const checkCallbackLogin = () => {
    return {type: LOGIN_CHECK_CALLBACK }
}

export const renewTokenCheck = () => {
    return {type: RENEW_TOKEN_CHECK }
}

export const renewSuccess = (account) => {
    return {type: RENEW_SUCCESS, payload: {account} }
}

export const forgetPassword = () => {
    return {type: FORGET_PASSWORD }
}

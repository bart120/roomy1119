

export const logon = (payload) => ({
    type: 'LOGON',
    payload
});

export const logout = (payload) => ({
    type: 'LOGOUT',
    payload: null
});
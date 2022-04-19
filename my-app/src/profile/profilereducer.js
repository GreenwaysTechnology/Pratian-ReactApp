
const initialState = {
    users: [],
    status: 'idle', //  status: 'idle' | 'pending' | 'succeeded' | 'failed'
    error: null
}
const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'users/requestStatus/fulfilled':
            return { ...state, users: state.users.concat(action.payload), status: 'loaded' }
        default:
            return state;
    }
}

export { ProfileReducer }
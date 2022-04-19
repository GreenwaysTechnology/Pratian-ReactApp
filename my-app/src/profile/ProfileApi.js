
// const ProfileAPI = {
//     findAllProfiles() {
//         return fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json())
//     }
// }
// export { ProfileAPI }

//Thunk Middleware code

const profileActionCreator = profiles => ({
    type: 'users/requestStatus/fulfilled',
    payload: profiles
})

const url = 'https://jsonplaceholder.typicode.com/users';

const ProfileAPI = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(url)
            const profiles = await response.json()
            //here setTimeout just for delay simulation
            //todo: remove setTimeout in production code
            setTimeout(() => dispatch(profileActionCreator(profiles)), 5000)
        }
        catch (err) {

        }
    }
}

export { ProfileAPI }


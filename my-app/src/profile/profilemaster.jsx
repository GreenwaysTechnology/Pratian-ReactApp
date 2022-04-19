import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileAPI } from './ProfileApi';

/**
 * This is profile master displays profile information: User story
 */
const ProfileMaster = props => {
    const { users, status, error } = useSelector(state => state.profile)
    const dispatch = useDispatch();
    console.log(status)

    useEffect(() => {
        //call thunk api
        dispatch(ProfileAPI())
    }, [])

    if(status==='loaded'){
        return <div><h1>Profile Screen</h1>
        <ul>
            {users.map(user => <li key={user.name}>{user.name}</li>)}
        </ul>
    </div>
    }

    return <h1>loading....</h1>
    
}

export { ProfileMaster }
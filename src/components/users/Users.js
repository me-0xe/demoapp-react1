import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = ({users, loading}) => {
    if(loading){
        return <Spinner />
    } 

    return (
        <div>
            {users.map(user => (
                <UserItem user= {user} />
            ))} 
        </div>
    )
    


}

export default Users

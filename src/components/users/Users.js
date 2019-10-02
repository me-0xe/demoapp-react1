import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {

    state = {
        users: [
            {
                img: 'https://avatars2.githubusercontent.com/u/29059640?v=4',
                url: 'https://github.com/me-0xe',
                login: 'me-0xe'
            },
            {
                img: 'https://avatars2.githubusercontent.com/u/29059640?v=4',
                url: 'https://github.com/me-0xe',
                login: 'me-0xe2'
            },
            {
                img: 'https://avatars2.githubusercontent.com/u/29059640?v=4',
                url: 'https://github.com/me-0xe',
                login: 'me-0xe3'
            }
        ]
    }
    render() {
        return (
            <div>
                {this.state.users.map(user => (
                    <UserItem user= {user} />
                ))} 
            </div>
        )
    }
}

export default Users

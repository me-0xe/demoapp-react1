import React, { Component } from 'react'

class UserItem extends Component {
    state = {
        img: 'https://avatars2.githubusercontent.com/u/29059640?v=4',
        url: 'https://github.com/me-0xe',
        login: 'me-0xe'
    
    }

    render() {
        const { img, url, login} = this.props.user;
        return (
            <div className='card text-center'>
                <img src={img} className='round-img' style={{width: '10%' }}/>
                <h3>{login}</h3>
                <a href={url} target="_blank" className="btn btn-dark btn-small">Profile</a>
            </div>
        )
    }
}

export default UserItem

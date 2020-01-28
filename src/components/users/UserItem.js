import React, { Component } from 'react'

const UserItem = (props) => {
    const { img, url, login} = props.user;
    return (
        <div className='card text-center'>
            <img src={img} className='round-img' style={{width: '10%' }}/>
            <h3>{login}</h3>
            <a href={url} target="_blank" className="btn btn-dark btn-small">Profile</a>
        </div>
    )
    
}

export default UserItem

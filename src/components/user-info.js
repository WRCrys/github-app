'use strict'

import React, { PropTypes } from 'react'

const UserInfo = ({ userinfo }) => (
    <div className='user-info'>
        <img src={userinfo.photo} />
        <h1>
            <a href={`https://github.com/${userinfo.github}`}>
            {userinfo.username}
            </a>
        </h1>

        <ul className='repos-info'>
            <li>Repositórios: {userinfo.repos}</li>
            <li>Seguidores: {userinfo.followers}</li>
            <li>Seguindo: {userinfo.followings}</li>
        </ul>

    </div>
)

UserInfo.propTypes = {
    userinfo: PropTypes.shape({
        username: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
        followers: PropTypes.number.isRequired,
        followings: PropTypes.number.isRequired
    })
}

export default UserInfo
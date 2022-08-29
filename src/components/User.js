import React from 'react'

function User(props) {

    const {name, handle} = props
    return (
        <div>
            <div className="user">
                <span className="name">{name}</span>
                <span className="handle">{handle}</span>
            </div>
        </div>
    )
}

export default User
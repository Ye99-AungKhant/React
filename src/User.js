import React from 'react'

const User = ({name, desc}) => {
    return (
        <li>
            {name}, {desc}
        </li>
    )
}

export default User
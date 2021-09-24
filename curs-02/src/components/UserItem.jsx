import React from 'react';

export function UserItem(props) {
    // console.log(props);
    const {name, email} = props;

    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>        
    )
}
// export default UserItem;     // alta varianta este ca mai sus, dar atentie unde este importat se va face destructuring {}
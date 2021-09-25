import React from 'react';

function UserItem(props) {
    // console.log(props);
    const {name, email, isGoldClient} = props;
    // console.log(isGoldClient);

    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            {
                isGoldClient === true 
                ? <p>CLIENT GOLD</p> 
                : null
            }
        </div>        
    )
}


export default UserItem;     
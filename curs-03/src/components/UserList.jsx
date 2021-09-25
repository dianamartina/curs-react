import React from 'react'
import UserItem from './UserItem'


// aici il facem clasa pt a vedea lifecycle methods cum functioneaza altfel ar fi fost functie

class UserList extends React.Component {
        
    render() {
        // const users = this.props.users; // sau cum am scris  mai jos

        return (
            <div>
            {
                this.props.users.map((user, index) => {
                  return (
                    <UserItem 
                      name={user.name}
                      email={user.email}
                      isGoldClient={user.isGoldClient}
                      key={index}
                    />
                  )
                })
              }    
            </div>
        )
    }

}

export default UserList;
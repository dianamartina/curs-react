import React from 'react';
import UserList from './components/UserList'
import './App.css';

class App extends React.Component {
  constructor() {
    // console.log("constructor.app");
    super();
    this.state = {
      backgroundColor : 'darkpink',
      users: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const filterUsers = users.filter((user) => user.id <= 5);
         
        // this.setState({ users: users})// sau
        this.setState({users: filterUsers})

    })

  }

  componentDidUpdate() {
    // console.log("update-app");
  }

  handleBackgroundChange(event) {
    // console.log(event.target.value);
    //  event.target.value;
    const backgroundColorFromUser = event.target.value;
    // this.state.backgroundColor = backgroundColorFromUser;
    this.setState({
      backgroundColor : backgroundColorFromUser
    })
  }
  
  render() {
    // console.log("render.app");
    return (
      <div className="App" style={{backgroundColor: this.state.backgroundColor}}>
        <h1>Proiectul 1 - Admin Panel</h1>     
        {/*<UserItem name="aaaa" email="aa@yahoo.com" isGoldClient={true}/>
        <UserItem name="bbb" email="bbbbb@yahoo.com" isGoldClient={false}/>*/}
    {/*
       this.state.backgroundColor !=== '#000000'
        ? <UserList users={this.state.users}/>
        : null*/
    }

      <UserList users={this.state.users}/>
        
        <input type="color" onChange={(event) => this.handleBackgroundChange(event)}/>
      </div>
    );
  }
}

export default App;

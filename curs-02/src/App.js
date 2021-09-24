import React from 'react';
import { UserItem } from './components/UserItem'; //doar la fisiere js nu mai   trebuie adaugata extensia

import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>FFhsfh</h1>
//       <p>dfsdfs</p>
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor : 'lightblue'
    };
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
    return (
      <div className="App" style={{backgroundColor: this.state.backgroundColor}}>
        <h1>Proiectul 1 - Admin Panel</h1>        
        <UserItem name="ffff" email="fdffs@yahoo.com"/> {/* adaug componentul din fisierul UserItem, aici creem componentat */}        
        <UserItem name="aaaa" email="aa@yahoo.com"/>
        <UserItem name="bbb" email="bbbbb@yahoo.com"/>
        <input type="color" onChange={(event) => this.handleBackgroundChange(event)}/>
      </div>
    );
  }
}

export default App;

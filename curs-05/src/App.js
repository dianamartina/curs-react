
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import {Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">      
      <Switch>
        <Route path="/" component={Home}  exact/>
        <Route path="/login" component={Login}/>
        <Route path="/about" component={About}/>
        <Route path="*" component={Page404}/>
      </Switch>
      {/* <a href="/login" onClick={(event)=> event.preventDefault()}>To login</a> */}
      {/* <Home/>
      <About/>
      <Login/> */}
      
    </div>
  );
}

export default App;
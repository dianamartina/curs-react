import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Page404 from './pages/Page404';
// Importam si pagina de categorie.
import Category from './pages/Category';
// Vom folosi utility-classes in intreaga aplicatie, deci importam
// fisierul in App, pentru a avea vizibilitate globala.
import './utils/utility-classes.css';
// Firebase imports
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './config/firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    // console.log(this.props);

    return(
      // doar pt verificare de functionare
      <div className="app">
        {/* {
        user 
          ? <p>Hello, {user.displayName}</p>
          : <p>Please sign in.</p>
        }
        {
          user
            ? <button onClick={signOut}>Sign out</button>
            : <button onClick={signInWithGoogle}>Sign in with Google</button>
        }  */}

        <Switch>
          <Route /* asa se trimite props avand Route */
            path='/login'
            render={(props) => (/* aceste props sunt cele din Route, pe care le vrem */
              <Login {...props} signInWithGoogle={signInWithGoogle} />
            )}
          />
          <Route path='/register' component={Register}/>
          {/* <Route exact path='/' component={Home}/> */}
          <Route exact path='/' render={(props) => (/* aceste props sunt cele din Route, pe care le vrem */
              <Home {...props} user={user}  signOut={signOut}/>
            )}/>
          <Route path='/about' component={About}/>
          {/* ATENTIE! Avem 6 categorii, pentru care vom afisa pagina Category, cu diverse props-uri.
          NU vom face 6 rute duferite, ci vom transmite numele rutei, ca parametru dinamic.
          Punand caracterul ":", categoryName devine un parametru ce va fi inlocuit cu valoare pusa in ruta.
          Unde vom putea folosi acest parametru? In pagina Category! */}
          <Route path='/category/:categoryName' component={Category}/>
          <Route path='*' component={Page404}/>
        </Switch>
      </div>
    );
  }
}

const AppOnSteroids = withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);

export default AppOnSteroids;
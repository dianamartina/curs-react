import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as Google } from '../assets/icons/google.svg';
import './Login.css';
import {signInWithGoogleAction} from '../redux/actions/user';
import { connect } from 'react-redux';


class Login extends React.Component {

    // const {history, signInWithGoogleInjected, userData} = props;

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props), if-ul e obligatoriu in aceasta componenta:
        if (this.props.userData !== prevProps.userData) {
          this.props.history.push('/');
        }
      }

    render() {

        const {signInWithGoogleInjected}= this.props;
        return(
            <div className="login-page">
                <Link to='/'>
                    <img src={Logo} alt="logo" className="mb-5"/>
                </Link>

                <h1 className="h2">Login</h1>
                <p>Alege providerul cu care vrei să vrei să te loghezi:</p>

                <button
                    className="btn btn-outline-dark d-flex align-items-center"
                    onClick={() => signInWithGoogleInjected()}
                >
                    <Google className="w-50 mr-3"/>
                    <span className="text-nowrap">Loghează-te cu Google</span>
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log(state);
    return {
        userData: state.user.data
    }
}

function mapDispathToProps(dispatch) {
    return {
        signInWithGoogleInjected: () => dispatch(signInWithGoogleAction())
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Login);
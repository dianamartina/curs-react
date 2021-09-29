import React from 'react';
import {Link} from 'react-router-dom';

function Login(props) {
    // console.log(props);
    const {signInWithGoogle, history}=props;

    function handleButtonClick() {
        signInWithGoogle();
        history.push('/');
    }

    return(
        <div>
            <h1>Login</h1>
            <Link to='/'>Home</Link>
            <button onClick={()=>handleButtonClick()}>Login with Google</button>

        </div>
    );
}

export default Login;
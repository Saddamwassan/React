import React, { useState } from 'react'
import Signup from './signup'
import image from '../assets/signup.jpg'
import Login from './login';

function Auth() {
    const [isLogin, setLogin] = useState(false);
    return (
        <div className="SignUpDiv">
            <div className="signupinner">
                <img className="image" src={image} alt="signupImage" width="400px" />
                {/* form  */}
                {
                    isLogin ? <Login /> : <Signup />
                }
                <div className="logindiv">
                    <span>Already have an account?</span>
                    <button >log in</button>
                </div>
            </div>
        </div>)
}

export default Auth
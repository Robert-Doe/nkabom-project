import React from 'react';
import './LoginScreen.css'; // Import the CSS file for styling
import agricImage from './agric.jpg'
function TrialLoginScreen() {
    return (
        <div className="login-screen">
            <div className="login-screen-left">
                <img src={agricImage} alt="Background" className="background-image" />
            </div>
            <div className="login-screen-right">
                <h1>Login</h1>
                <form>
                    {/* Login form inputs */}
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default TrialLoginScreen;

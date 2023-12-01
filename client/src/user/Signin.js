import React from 'react';
import './Signin.css';

export default function Signin() {

    return (
        <html>
            <form>
                <h1>User Sign-In</h1>
                <div>
                    <label>Username: &nbsp; &nbsp;</label>
                    <input></input> <br></br>
                </div>

                <div>
                    <label>Email: &nbsp; &nbsp;</label>
                    <input></input> <br></br>
                </div>

                <div>
                    <label>Password: &nbsp; &nbsp;</label>
                    <input></input> <br></br>        
                </div>
            
                <button>Sign-In</button>
            </form>
        </html>
    );
}
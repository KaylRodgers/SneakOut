import React from 'react';
import './Signup.css';

export default function Signup() {
    return (
            <html>
                <form>
                    <h1>User Sign-Up</h1>

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

                    <button>Sign-Up</button>
                </form>
            </html>
    )
    ;
}
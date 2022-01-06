import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <div className="container d-flex justify-content-center">
            <div className="card" style={{ width: '32rem' }}>
                <div className="card-body">
                    <h5 className="card-title" style={{ textAlign: 'center' }}>Sign Up</h5>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="signupUsernameInput" className="form-label">Username</label>
                            <input type="username" className="form-control" id="signupUsernameInput" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="signupEmailInput" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="signupEmailInput" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="signupPasswordInput" className="form-label">Password</label>
                            <input type="password" className="form-control" id="signupPasswordInput" />
                        </div>
                        <div className="mb-3">
                            <span>Already have an account?  <Link to="/login">Login here</Link></span>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;

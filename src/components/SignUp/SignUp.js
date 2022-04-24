import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, hooksError] =
        useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);

    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your two passwords didn't match");
            return;
        }
        if (password.length < 6) {
            setError("Password must be 6 characters or longer");
            return;
        }

        createUserWithEmailAndPassword(email, password);
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle().then(() => {
            navigate("/");
        });
    };

    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            onBlur={handleEmailBlur}
                            type="email"
                            name="email"
                            id="email"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            onBlur={handlePasswordBlur}
                            type="password"
                            name="password"
                            id="password"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            onBlur={handleConfirmPasswordBlur}
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            required
                        />
                    </div>
                    <p style={{ color: "red" }}>{error}</p>
                    <input
                        className="form-submit"
                        type="submit"
                        value="Sign Up"
                    />
                </form>
                <p>
                    Already have an account?{" "}
                    <Link className="form-link" to="/login">
                        Login
                    </Link>
                </p>
                <div className="horizontal-line-container">
                    <div>
                        <hr />
                    </div>
                    <p>Or</p>
                    <div>
                        <hr />
                    </div>
                </div>

                <button onClick={handleGoogleSignIn} className="google-login">
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default SignUp;

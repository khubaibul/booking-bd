import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import googleLogo from '../../../Utilities/google.png';
import gitHubLogo from '../../../Utilities/github (1).png';
import facebookLogo from '../../../Utilities/facebook.png';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const [err, setErr] = useState("");
    const { loginUser, setLoading, signInWithGoogle, signInWithGitHub, signInWithFacebook, user } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const userEmail = form.email.value;
        const userPassword = form.password.value;

        loginUser(userEmail, userPassword)
            .then(result => {
                console.log(result.user);
                setErr("");
                toast.success("Login Successful");
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(err => {
                setErr(err.message);
                toast.error(err.message.slice(10));
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                toast.success("Login With Google Successfully..")
            })
            .catch(err => {
                toast.error(err.message.slice(10))
            })
    }
    const handleSignInWithGitHub = () => {
        signInWithGitHub()
            .then(result => {
                toast.success("Login With Google Successfully..")
            })
            .catch(err => {
                toast.error(err.message.slice(10))
            })
    }
    const handleSignInWithFacebook = () => {
        signInWithFacebook()
            .then(result => {
                toast.success("Login With Google Successfully..")
            })
            .catch(err => {
                toast.error(err.message.slice(10))
            })
    }

    useEffect(() => {
        if(user){
            navigate(from);
        }
    }, [user]);


    return (
        <div>
            <div className={`box mx-auto mt-40`}>
                <form onSubmit={handleLogin} autoComplete="off">
                    <h2 className='text-xl'>Log in</h2>
                    <div className="inputBox">
                        <input type="email" name="email" required="required" />
                        <span>Email</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="password" name="password" required="required" />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className="links">
                        <Link to="#">Forgot Password ?</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                    <input type="submit" value="Login" />
                </form>
            </div>
            <div className='third-party-login-div'>
                <button onClick={handleSignInWithGoogle}><img className='third-party-login-img' src={googleLogo} alt="img" /></button>
                <button onClick={handleSignInWithGitHub}><img className='third-party-login-img' src={gitHubLogo} alt="img" /></button>
                <button onClick={handleSignInWithFacebook}><img className='third-party-login-img' src={facebookLogo} alt="img" /></button>
            </div>
        </div>
    );
};

export default Login;
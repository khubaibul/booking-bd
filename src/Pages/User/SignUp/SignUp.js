import { Link, useLocation, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { FaEye } from "react-icons/fa";
import googleLogo from '../../../Utilities/google.png';
import gitHubLogo from '../../../Utilities/github (1).png';
import facebookLogo from '../../../Utilities/facebook.png';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';

const SignUp = () => {
    const navigate = useNavigate();
    const [err, setErr] = useState("");
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, emailVerify } = useContext(AuthContext);

    const location = useLocation();
    const from = location?.state?.from?.pathname || "/profile";

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const userPhotoURL = form.photoURL.value;
        const userEmail = form.email.value;
        const userPassword = form.password.value;
        if (userPassword.length < 6) {
            setErr("Password should be more than 6 character...")
            return;
        }
        createUser(userEmail, userPassword)
            .then(result => {
                // toast.success("User Created Successfully");
                handleUpdateUserProfile(userName, userPhotoURL);
                handleEmailVerification();
                if (result.user.emailVerified === true) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error("Your Email Isn't Verified. Please Verify Your Email.")
                }
                form.reset();
            })
            .catch(err => toast.error(err.message.slice(10)));
    }

    const handleTermsAndConditions = e => {
        setAccepted(e.target.checked);
    }

    const handleUpdateUserProfile = (userName, userPhotoURL) => {
        const profile = {
            displayName: userName,
            photoURL: userPhotoURL
        }
        updateUserProfile(profile)
            .then(result => {
                console.log(result.user);
            })
            .catch(err => console.error(err))
    }

    const handleEmailVerification = () => {
        emailVerify()
            .then(result => {

            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <div>
            <div className={`signup-box mx-auto mt-40`}>
                <form onSubmit={handleSignUp} autoComplete="off">
                    <h2 className='text-xl'>Sign Up</h2>
                    <div className="inputBox">
                        <input type="text" name="name" required="required" />
                        <span>Name</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="photoURL" required="required" />
                        <span>Profile Picture URL</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="email" name="email" required="required" />
                        <span>Email</span>
                        <i></i>
                    </div>
                    <div>
                        <p className='text-warning'>{err}</p>
                    </div>
                    <div className="inputBox">
                        <input type="password" name="password" required="required" />
                        <span>Password</span>
                        <i className='d-flex justify-content-end align-items-center pe-2'><FaEye></FaEye></i>
                    </div>
                    <div className="links">
                        <Link href="#">Already Have an Account?</Link>
                        <Link to="/login">Log In</Link>
                    </div>
                    <div className='d-flex align-items-center justify-content-start'>
                        <input onClick={handleTermsAndConditions} type="checkbox" />
                        <span style={{ color: "#17ac53" }}>Accept </span><Link style={{ color: "#17ac53" }}> Terms & Conditions</Link>
                    </div>
                    <input type="submit" value="Sign Up" disabled={!accepted} />
                </form>
            </div>
            <div className='third-party-login-div'>
                <button><img className='third-party-login-img' src={googleLogo} alt="img" /></button>
                <button><img className='third-party-login-img' src={gitHubLogo} alt="img" /></button>
                <button><img className='third-party-login-img' src={facebookLogo} alt="img" /></button>
            </div>
        </div>
    );
};

export default SignUp;
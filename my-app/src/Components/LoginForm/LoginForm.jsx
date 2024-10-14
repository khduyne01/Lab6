import React from "react";
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();

    const handleRegisterClick = (e) => {
        e.preventDefault();
        navigate('/register');
    };

    return (
        <div className="wrapper">
            <form action="">
                <h1>Log in</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <RiLockPasswordFill className="icon" />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" /> Remember me</label>
                    <a href="/" onClick={handleRegisterClick}>Register</a> {/* Updated to use '/' as a valid placeholder */}
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <a href="/" onClick={handleRegisterClick}>Don't have an account? </a> {/* Example using a button */}
                </div>
            </form>
        </div>
    );
};

export default LoginForm;

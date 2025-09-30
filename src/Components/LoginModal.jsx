import React, { useState } from 'react';
import { FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

// --- ALL CSS STYLES ARE EMBEDDED HERE ---
const styles = `
    .login-modal-overlay {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background-color: rgba(0, 0, 0, 0.6); display: flex;
        justify-content: center; align-items: center; z-index: 1000;
        font-family: 'Segoe UI', sans-serif;
    }
    .login-modal-content {
        background-color: #e4ffc2; padding: 2.5rem; border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); width: 100%;
        max-width: 420px; position: relative;
    }
    .login-modal-close-btn {
        position: absolute; top: 10px; right: 15px; font-size: 1.8rem;
        color: #888; cursor: pointer; border: none; background: none;
    }
    .login-modal-content h2 {
        text-align: center; margin-top: 0; margin-bottom: 0.5rem;
        font-family: 'Georgia', serif; color: #333; font-size: 2rem;
    }
    .login-modal-content .subtitle {
        text-align: center; margin-bottom: 2rem; color: #555;
    }
    .login-modal-input-group {
        position: relative; margin-bottom: 1.5rem;
    }
    .login-modal-input-icon {
        position: absolute; left: 15px; top: 50%;
        transform: translateY(-50%); color: #888;
    }
    .login-modal-input-group input {
        width: 100%; padding: 12px 12px 12px 45px;
        border: 1px solid #ddd; border-radius: 8px;
        box-sizing: border-box; font-size: 1rem;
    }
    .login-modal-toggle-password {
        position: absolute; right: 15px; top: 50%;
        transform: translateY(-50%); cursor: pointer; color: #888;
    }
    .login-modal-forgot-password {
        text-align: right; font-size: 0.9rem; margin-top: -1rem;
        margin-bottom: 1.5rem;
    }
    .login-modal-forgot-password a {
        color: #2e7d32; text-decoration: none;
    }
    .login-modal-submit-btn {
        width: 100%; padding: 12px; background-color: #2e7d32;
        color: white; border: none; border-radius: 8px;
        font-size: 1.1rem; font-weight: bold; cursor: pointer;
        transition: background-color 0.3s;
    }
    .login-modal-submit-btn:hover { background-color: #1b5e20; }
    .login-modal-signup-link {
        text-align: center; margin-top: 1.5rem; font-size: 0.9rem; color: #555;
    }
    .login-modal-signup-link a {
        color: #2e7d32; font-weight: bold; text-decoration: none; cursor: pointer;
    }
    .login-modal-signup-link a:hover { text-decoration: underline; }
`;

const LoginModal = ({ isOpen, onClose, onSwitchToSignup }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    if (!isOpen) {
        return null;
    }

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        alert('Login Successful!');
        onClose();
    };

    const EyeIcon = isPasswordVisible ? FiEyeOff : FiEye;

    return (
        <div className="login-modal-overlay" onClick={onClose}>
            <style>{styles}</style>
            <div className="login-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="login-modal-close-btn" onClick={onClose}>&times;</button>
                <h2>Welcome Back!</h2>
                <p className="subtitle">Please log into your account</p>
                <form onSubmit={handleFormSubmit}>
                    <div className="login-modal-input-group">
                        <FiUser className="login-modal-input-icon" />
                        <input type="text" placeholder="Enter Name" required />
                    </div>
                    <div className="login-modal-input-group">
                        <FiLock className="login-modal-input-icon" />
                        <input
                            type={isPasswordVisible ? 'text' : 'password'}
                            placeholder="Enter Password"
                            required
                        />
                        <EyeIcon
                            className="login-modal-toggle-password"
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                    <div className="login-modal-forgot-password">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" className="login-modal-submit-btn">Login</button>
                    <p className="login-modal-signup-link">
                        Don't have an account? <a onClick={onSwitchToSignup}> Signup</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
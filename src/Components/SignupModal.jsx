import React, { useState } from 'react';
import { FiUser, FiPhone, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

// --- ALL CSS STYLES ARE EMBEDDED HERE ---
const styles = `
    .signup-modal-overlay {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background-color: rgba(0, 0, 0, 0.6); display: flex;
        justify-content: center; align-items: center; z-index: 1000;
        font-family: 'Segoe UI', sans-serif;
    }
    .signup-modal-content {
        background-color: #e4ffc2; padding: 2.5rem; border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); width: 100%;
        max-width: 420px; position: relative;
        background-image: url('/signup.jpeg');
        background-size: cover; background-position: center;
    }
    .signup-modal-close-btn {
        position: absolute; top: 10px; right: 15px; font-size: 1.8rem;
        color: #888; cursor: pointer; border: none; background: none;
    }
    .signup-modal-content h2 {
        text-align: center; margin-top: 0; margin-bottom: 2rem;
        font-family: 'Georgia', serif; color: #333;
    }
    .signup-modal-input-group {
        position: relative; margin-bottom: 1.5rem;
    }
    .signup-modal-input-icon {
        position: absolute; left: 15px; top: 50%;
        transform: translateY(-50%); color: #888;
    }
    .signup-modal-input-group input {
        width: 100%; padding: 12px 12px 12px 45px;
        border: 1px solid #ddd; border-radius: 8px;
        box-sizing: border-box; font-size: 1rem;
    }
    .signup-modal-toggle-password {
        position: absolute; right: 15px; top: 50%;
        transform: translateY(-50%); cursor: pointer; color: #888;
    }
    .signup-modal-submit-btn {
        width: 100%; padding: 12px; background-color: #2e7d32;
        color: white; border: none; border-radius: 8px;
        font-size: 1.1rem; font-weight: bold; cursor: pointer;
        transition: background-color 0.3s;
    }
    .signup-modal-submit-btn:hover { background-color: #1b5e20; }
    .signup-modal-login-link {
        text-align: center; margin-top: 1.5rem; font-size: 0.9rem; color: #555;
    }
    .signup-modal-login-link a {
        color: #2e7d32; font-weight: bold; text-decoration: none; cursor: pointer;
    }
    .signup-modal-login-link a:hover { text-decoration: underline; }
`;

const SignupModal = ({ isOpen, onClose, onSwitchToLogin }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    if (!isOpen) {
        return null;
    }

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        alert('Signup Successful!');
        onClose();
    };

    const EyeIcon = isPasswordVisible ? FiEyeOff : FiEye;

    return (
        <div className="signup-modal-overlay" onClick={onClose}>
            <style>{styles}</style>
            <div className="signup-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="signup-modal-close-btn" onClick={onClose}>&times;</button>
                <h2>Create Your Account</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="signup-modal-input-group">
                        <FiUser className="signup-modal-input-icon" />
                        <input type="text" placeholder="Name" required />
                    </div>
                    <div className="signup-modal-input-group">
                        <FiPhone className="signup-modal-input-icon" />
                        <input type="tel" placeholder="Phone Number" required />
                    </div>
                    <div className="signup-modal-input-group">
                        <FiMail className="signup-modal-input-icon" />
                        <input type="email" placeholder="Email Address" required />
                    </div>
                    <div className="signup-modal-input-group">
                        <FiLock className="signup-modal-input-icon" />
                        <input
                            type={isPasswordVisible ? 'text' : 'password'}
                            placeholder="Create Password"
                            required
                        />
                        <EyeIcon
                            className="signup-modal-toggle-password"
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                    <button type="submit" className="signup-modal-submit-btn">Signup</button>
                    <p className="signup-modal-login-link">
                        Already have an account? <a onClick={onSwitchToLogin}> Login</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignupModal;
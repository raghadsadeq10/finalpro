import React from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = ({ cartItems }) => {
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/cart'); // لا تمرر cartItems هنا
    };

    const handleLoginClick = () => {
        navigate('/signup');
    };

    return (
        <nav className="navbar">
            <div className="navbar-right">
                <img src="/images/sclogo.png" alt="Logo" className="logo-image" />
                <span
                    className="home-icon"
                    title="الصفحة الرئيسية"
                    onClick={() => navigate('/')}
                >
                    🏠
                </span>
            </div>

            <div className="icons">
                <div className="tooltip-container">
                    <button className="icon-btn" onClick={handleCartClick}>
                       🛒 ({cartItems.reduce((total, item) => total + item.quantity, 0)})
                    </button>
                </div>
                <div className="tooltip-container">
                    <button className="icon-btn" onClick={handleLoginClick}>👤</button>
                    <span className="tooltip">تسجيل الدخول</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
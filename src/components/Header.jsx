// ...existing code...
import React from "react";
import "./Header.css";

const Header = ({ onNavigate = () => {} }) => {
    const go = (mode) => () => onNavigate(mode);

    return (
        <header className="app-header">
            <div className="header-inner">
                <div
                    className="brand"
                    onClick={go("list")}
                    role="button"
                    tabIndex={0}
                    aria-label="Student Result Management"
                    onKeyPress={(e) => { if (e.key === "Enter") onNavigate("list"); }}
                >
                    <h1 className="brand-title">Student Result Management</h1>
                </div>

                <nav className="header-nav" aria-label="Main navigation">
                    <button className="nav-btn" onClick={go("list")}>Home</button>
                    <button className="nav-btn primary" onClick={go("add")}>Add Student</button>
                    <button className="nav-btn" onClick={go("about")}>About</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
// ...existing code...
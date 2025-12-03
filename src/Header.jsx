import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
    }, [location]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('.navbar')) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
                <div className="container">
                    <Link to="/" className="navbar-brand" onClick={closeMenu}>
                        Moso <span className="tooplate-red">Inter</span><span className="tooplate-green">ior</span>
                    </Link>

                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        onClick={toggleMenu}
                        aria-controls="navbarNav" 
                        aria-expanded={isMenuOpen} 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link click-scroll" onClick={closeMenu}>Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/about" className="nav-link click-scroll" onClick={closeMenu}>About</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link 
                                    to="/shop" 
                                    className="nav-link dropdown-toggle click-scroll color" 
                                    id="navbarLightDropdownMenuLink" 
                                    role="button" 
                                    onClick={toggleDropdown}
                                    aria-expanded={isDropdownOpen}
                                >
                                    Shop
                                </Link>

                                <ul className={`dropdown-menu dropdown-menu-light ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarLightDropdownMenuLink">
                                    <li><Link to="/shop" className="dropdown-item" onClick={closeMenu}>Shop Listing</Link></li>
                                    <li><a className="dropdown-item" href="shop-detail.html" onClick={closeMenu}>Shop Detail</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link to="/review" className="nav-link click-scroll" onClick={closeMenu}>Review</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/contact" className="nav-link click-scroll" onClick={closeMenu}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
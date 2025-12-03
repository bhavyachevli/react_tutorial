import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { waitForBootstrap, initBootstrap } from "../utils/bootstrapInit";

const Header =() =>
{
    useEffect(() => {
        // Wait for Bootstrap to load, then initialize components
        waitForBootstrap(() => {
            initBootstrap();
        });

        // Also initialize on route changes (for React Router)
        const handleRouteChange = () => {
            setTimeout(() => {
                initBootstrap();
            }, 100);
        };

        // Re-initialize when DOM updates
        const observer = new MutationObserver(() => {
            initBootstrap();
        });

        const navbar = document.querySelector('#navbarNav');
        if (navbar) {
            observer.observe(navbar, { childList: true, subtree: true });
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
                <div className="container">
                    <Link to="/" className="navbar-brand">Moso <span className="tooplate-red">Inter</span><span className="tooplate-green">ior</span></Link>

                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link click-scroll">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/about" className="nav-link click-scroll">About</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link 
                                    to="/shop" 
                                    className="nav-link dropdown-toggle click-scroll color" 
                                    id="navbarLightDropdownMenuLink" 
                                    role="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                >
                                    Shop
                                </Link>

                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                    <li><Link to="/shop" className="dropdown-item">Shop Listing</Link></li>
                                    <li><a className="dropdown-item" href="shop-detail.html">Shop Detail</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link to="/review" className="nav-link click-scroll">Review</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/contact" className="nav-link click-scroll">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
import React from "react";
import Shoplist from "./Shoplist";
import { Link } from "react-router-dom";

const Header =() =>
{
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Moso <span className="tooplate-red">Inter</span><span className="tooplate-green">ior</span></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a ><Link to="/" className="nav-link click-scroll" >Home</Link></a>
                            </li>

                            <li className="nav-item">
                                <a><Link to="/about" className="nav-link click-scroll" >About</Link></a>
                            </li>

                            <li className="nav-item dropdown">
                                <Link to="/Shop" className="nav-link dropdown-toggle click-scroll color" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</Link>

                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                    <li><a className="dropdown-item" href={<Shoplist />}>Shop Listing</a></li>
                                    
                                    <li><a className="dropdown-item" href="shop-detail.html">Shop Detail</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a><Link to="/review" className="nav-link click-scroll" >review</Link></a>
                            </li>

                            <li className="nav-item">
                                <a><Link to="/contact" className="nav-link click-scroll" >contact</Link></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
import React, {useState} from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
    const [isActiveDropdownProfile, setIsActiveDropdownProfile] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"/>
                </Link>
                
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/add_bid" className="navbar-item">
                        Add Bid
                    </Link>
                    <Link to="/my_bid" className="navbar-item">
                        My Bid
                    </Link>     
                </div>

                <div className="navbar-end">
                    <h1 className="navbar-item">
                        <strong>Rp. 1000.000</strong>
                    </h1>
                    <div className={isActiveDropdownProfile ? "navbar-item has-dropdown is-active" :"navbar-item has-dropdown"}
                        onMouseEnter={() => {
                            setIsActiveDropdownProfile(true);
                        }}
                        onMouseLeave={() => {
                            setIsActiveDropdownProfile(false);
                        }}>
                        <div className="navbar-link">
                            Hi, Taufan
                        </div>
                        
                        <div className="navbar-dropdown">
                            <Link to="/profile" className="navbar-item">
                                My Profile
                            </Link>
                            <a className="navbar-item">
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
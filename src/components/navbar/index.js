import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { LOGIN_URL } from '../../const';
import "./styles.css"


const Navbar = (props) => {
    const [isActiveDropdownProfile, setIsActiveDropdownProfile] = useState(false);
    const userInfo = props.userInfo;
    const gopayInfo = props.gopayInfo;
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"/>
                </Link>
                
            </div>

            <div className="navbar-menu">
                {
                    userInfo.user_id !== null ? (
                        <div className="navbar-start">
                            <Link to="/add_bid" className="navbar-item">
                                Add Bid
                            </Link>
                            <Link to="/my_bid" className="navbar-item">
                                My Bid
                            </Link>
                            <Link to="/my_sell" className="navbar-item">
                                My Product
                            </Link>     
                        </div>): ''
                }
                

                <div className="navbar-end">
                    
                    {
                        userInfo.user_id === null && (
                            <div className="navbar-item">
                                <a href={LOGIN_URL} className="button is-primary">Login</a>
                            </div>
                        )
                    }
                    {
                        userInfo.user_id !== null && (
                            <>
                                <h1 className="navbar-item">
                                    <strong>Rp. {gopayInfo.amount_idr}</strong>
                                </h1>
                                <div className={isActiveDropdownProfile ? "navbar-item has-dropdown is-active" :"navbar-item has-dropdown"}
                                    onMouseEnter={() => {
                                        setIsActiveDropdownProfile(true);
                                    }}
                                    onMouseLeave={() => {
                                        setIsActiveDropdownProfile(false);
                                    }}>
                                    <div className="navbar-link">
                                        Hi, {userInfo.user_name}
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
                            </>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    userInfo: {
        user_name: null,
        email: null,
        user_id: null
    }
}

export default Navbar;
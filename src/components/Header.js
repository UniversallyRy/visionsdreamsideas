import React from 'react';
import { Link } from 'react-router-dom';

// Filter component to swap todos visibility state.
const Header = () => (
  <div className="hero-head">
        <nav className="navbar">
        <div className="container">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <img src="" alt="VisionsDreamsIdeas"/>
                </div>
                <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                    <Link to='/Visions' className="navbar-item is-active">
                    Visions
                    </Link>
                    <Link to='/Dreams' className="navbar-item">
                    Dreams
                    </Link>
                    <Link to='/Ideas' className="navbar-item">
                    Ideas
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  </div>
)

export default Header
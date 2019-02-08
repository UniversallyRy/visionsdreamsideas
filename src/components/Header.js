import React from 'react';
import { NavLink } from 'react-router-dom';

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
                    <NavLink to='/visions' activeClassName='is-active'className="navbar-item">
                        Visions
                    </NavLink>
                    <NavLink to='/dreams' activeClassName='is-active' className="navbar-item">
                        Dreams
                    </NavLink>
                    <NavLink to='/ideas' activeClassName='is-active' className="navbar-item">
                        Ideas
                    </NavLink>
                </div>
            </div>
        </div>
    </nav>
  </div>
)

export default Header
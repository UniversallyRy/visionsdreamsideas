import React from 'react'
/*eslint eqeqeq:0*/

// Filter component to swap todos visibility state.
const Header = () => (
  <div className="hero-head">
        <nav className="navbar">
        <div className="container">
            <div className="navbar-brand">
            <a href='#0' className="navbar-item">
                <img src="" alt="Logo/Title?"/>
            </a>
            <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
            </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
            <div className="navbar-end">
                <a href='#0' className="navbar-item is-active">
                Visions
                </a>
                <a href='#0' className="navbar-item">
                Dreams
                </a>
                <a href='#0' className="navbar-item">
                Ideas
                </a>
            </div>
            </div>
        </div>
    </nav>
  </div>
)

export default Header
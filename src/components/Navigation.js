import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return(
        <div className="menu-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/create">Create</NavLink>
        </div>
    )
}

export default Navigation;
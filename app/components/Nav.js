import React from 'react';
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <ul className='nav'>
            <li>
                <NavLink exact activeClassName='active' to='/'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/info'>
                    Info
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/stats'>
                    Statistics
                </NavLink>
            </li>
        </ul>
    )
}

export default Nav;
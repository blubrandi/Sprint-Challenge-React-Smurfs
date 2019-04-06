import React from 'react';

import { NavLink } from 'react-router-dom'

const Nav = props => {
        return (
            <div className='navbar'>
                <div>
                    <NavLink exact to='/'>
                        HOME
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/add-smurf'>
                        ADD SMURF
                    </NavLink>
                </div>
            </div>
        )
}

export default Nav
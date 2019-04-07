import React from 'react';

import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

const NavClass = styled.div`
    background-color: white;
    display: flex;
    justify-content: flex-end;
    padding-top: 30px;
    padding-bottom: 30px;
  
  navLink {
    padding-right: 20px;
  }

  navLink :hover {
    background-color: #0AA5EB;
    color: #fff;
}
  
  navLink a {
    text-decoration: none;
    text-align: center;
    border: 2px solid #0AA5EB;
    color: #0AA5EB;
    border-radius: 5px;
    padding: 10px;
  }
`

const Nav = props => {
        return (
            <NavClass>
                <navLink>
                    <NavLink exact to='/'>
                        Home
                    </NavLink>
                </navLink>
                <navLink>
                    <NavLink to='/add-smurf'>
                        Add Smurf
                    </NavLink>
                </navLink>
            </NavClass>
        )
}

export default Nav
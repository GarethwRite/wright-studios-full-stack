import React from 'react'
import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom'
import { menuData } from '../../data/MenuData'
import { Button } from './Button';
import { FaBars } from 'react-icons/fa'

const Nav = styled.nav`
height: 60px;
display: flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index:100;
position: fixed;
width: 100%;
background: red;

@media screen and (max-width: 768px){
    width: 94%;
}
`;
const Logo = styled(Link)`
${NavLink}
color:#fff;
`;
const MenuBars = styled(FaBars)`
display: none;

@media screen and (max-width: 768px){
    display: block;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%,25%);
    margin-right: 40px;
    margin-top: 12px;
    color: #fff;
}
`;

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -48px;

@media screen and (max-width: 768px){
    display: none;
}
`;

const NavLink = css `
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;
`;

const NavMenuLinks = styled(Link)`
${NavLink}
font-style: italic;
`;

const NavBtn = styled.div`
display:flex;
align-items: center;
margin-right: 68px;

@media screen and (max-width: 768px){
    display: none;
}
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo className='navLogo'>WS</Logo>
            <MenuBars></MenuBars>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
           <NavBtn>
               <Button to='/about' primary='true'>About Us</Button>
           </NavBtn>
        </Nav>
    )
}

export default Navbar

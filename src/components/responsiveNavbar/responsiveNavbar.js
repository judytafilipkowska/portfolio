import styled from 'styled-components'
import LogoIcon from "../../image/logo.png"
import * as AiIcons from 'react-icons/ai';
import { useState } from "react";


function ResponsiveNavbar() {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <Logo href="/">
                <img src={LogoIcon} alt="" />
            </Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink href="#about">About me</MenuLink>
                <MenuLink href="#projects">Projects</MenuLink>
                <MenuLink href="#contact">Contact</MenuLink>
                <MenuLink href="https://www.linkedin.com/in/judyta-filipkowska/" target="_blank"><AiIcons.AiFillLinkedin /></MenuLink>
                <MenuLink href="https://github.com/judytafilipkowska" target="_blank"><AiIcons.AiFillGithub /></MenuLink>
            </Menu>
        </Nav>
    );
}

export default ResponsiveNavbar;


const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #ffff;
  transition: all 0.3s ease-in;
  font-size: 1.2rem;
  &:hover {
    color: #64727a;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #060b26;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  height: 2.5rem;
  img {
      width:3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #ffff;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

import { BrowserRouter, NavLink } from 'react-router-dom'
import { useState } from 'react';
import logo from "../../assets/logo.svg"
import style from "../../style/navbar.css"


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
    <div className='navbar'>
        <div className='nav_logo'>
            <img className='logo' src={logo} />
       </div>
       <div className={'nav_items ${isOpen && "open"}'}>
            <BrowserRouter>
                <NavLink to="/home" className="link ">HOW WE WORK</NavLink>
                <NavLink to="/home" className="link">BLOG</NavLink>
                <NavLink to="/home" className="link">ACCOUNT</NavLink>
                <NavLink to="/home" className="link link-menu">VIEW PLANS</NavLink>
            </BrowserRouter>
        </div>
        <div className={'nav_toggle ${isOpen && "open"}'} onClick={ () => setIsOpen(!isOpen)} >
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    )
}

export default Navbar;

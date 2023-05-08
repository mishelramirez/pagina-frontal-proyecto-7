import { BrowserRouter, NavLink } from 'react-router-dom'
import logo from "../assets/logo.svg"
import style from "../style/header.css"


function Header() {
    return <nav className='header'>
        <img className='logo' src={logo}/>
        <BrowserRouter>
            <NavLink  to="/home" className="link ">HOW WE WORK</NavLink>
            <NavLink to="/home" className="link">BLOG</NavLink>
            <NavLink to="/home" className="link">ACCOUNT</NavLink>
            <NavLink to="/home" className="link">ACCOUNT</NavLink>
            <NavLink to="/home" className="link link-menu">VIEW PLANS</NavLink>
        </BrowserRouter>

    </nav>;
}

export default Header;

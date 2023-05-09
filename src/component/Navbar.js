import { BrowserRouter, NavLink } from 'react-router-dom'
import logo from "../assets/logo.svg"
import style from "../style/header.css"


function Navbar() {
    return <>  <nav className='header'>
        <div>
            <img className='logo' src={logo} />
       </div>
       <div>
            <BrowserRouter>
                <NavLink to="/home" className="link ">HOW WE WORK</NavLink>
                <NavLink to="/home" className="link">BLOG</NavLink>
                <NavLink to="/home" className="link">ACCOUNT</NavLink>
                <NavLink to="/home" className="link">ACCOUNT</NavLink>
                <NavLink to="/home" className="link link-menu">VIEW PLANS</NavLink>
            </BrowserRouter>

        </div>
    </nav>
    </>;
}

export default Navbar;

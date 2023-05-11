import { BrowserRouter, NavLink } from 'react-router-dom'
import logo from "../../assets/logo.svg"
import iconpinterest from "../../assets/icon-pinterest.svg"
import iconfacebook from "../../assets/icon-facebook.svg"
import iconinstagram from "../../assets/icon-instagram.svg"
import icontwitter from "../../assets/icon-twitter.svg"
import style from "../../style/footer.css"


function Footer() {
    return <div className="footer-container">
        <div className='container1'>
            <div className='img-footer'>
                <img className='img-logo' src={logo} />
            </div>
            <div className="container-redes">
                <img className='img-redes' src={iconpinterest} />
                <img className='img-redes' src={iconfacebook} />
                <img className='img-redes' src={iconinstagram} />
                <img className='img-redes' src={icontwitter} />
            </div>
        </div>
        <div className='link-footer'>
            <div className='links'>
                <p>OUR COMPANY</p>
                <BrowserRouter>
                    <NavLink to="/home" className="footerlink ">HOW WE WORK</NavLink>
                    <NavLink to="/home" className="footerlink">WHY INSURE?</NavLink>
                    <NavLink to="/home" className="footerlink">VIEW PLANS</NavLink>
                    <NavLink to="/home" className="footerlink ">REVIEWS</NavLink>
                </BrowserRouter>
            </div>
            <div className='links'>
                <p>HELP ME</p>
                <BrowserRouter>
                    <NavLink to="/home" className="footerlink ">FAQ</NavLink>
                    <NavLink to="/home" className="footerlink">TERMS OF USE</NavLink>
                    <NavLink to="/home" className="footerlink">PRIVACY POLICY</NavLink>
                    <NavLink to="/home" className="footerlink ">COOKIES</NavLink>
                </BrowserRouter>
            </div>

            <div className='links'> 
                <p>CONSTACT</p>
                <BrowserRouter>
                    <NavLink to="/home" className="footerlink ">SALES</NavLink>
                    <NavLink to="/home" className="footerlink">SUPPORT</NavLink>
                    <NavLink to="/home" className="footerlink">LIVE CHAT</NavLink>
                </BrowserRouter>
            </div>

            <div className='links'>
                <p>OTHERS</p>
                <BrowserRouter>
                    <NavLink to="/home" className="footerlink ">CAREERS</NavLink>
                    <NavLink to="/home" className="footerlink">PRESS</NavLink>
                    <NavLink to="/home" className="footerlink">LICENSES</NavLink>
                </BrowserRouter>
                </div>
        </div>

    </div>;
}

export default Footer;
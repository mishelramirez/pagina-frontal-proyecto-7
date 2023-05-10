import style from "../../style/header.css"
import intro from "../../assets/image-intro-desktop.jpg"

function Header() {
    return <div className="header">

        <div className="container_img">
            <img className='intro_img' src={intro} />
        </div>
        
        <div className="container"> 
            <div className="rallita"></div>
            <p className="title">Humanizing<br /> your insurance.</p>
            <p className="text">Get your life insurence coverage easier and faster. We blend our expertise<br /> and technology to help you find the plan  that´s right for you.Ensure you<br /> and your loved ones are protected.</p>
            <input className='button1' type="button" value="HOW WE WORK" />
        </div>


    </div>;
}

export default Header;
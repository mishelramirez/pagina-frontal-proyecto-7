import style from "../style/home.css";


function Home(props) {


    return ( 
        <div>
           
            <div className="card">
                <img className="img-card" />
                <p className="title-card">{props.title}</p>
                <p className="text-card">{props.text}</p>
            </div>
        </div>
    );
}

export default Home;
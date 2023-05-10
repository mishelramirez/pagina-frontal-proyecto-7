import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import Home from "./Component/HomeCard.js";
import HomeTitle from "./Component/HomeTitle.js"
const cardInfo = [
  {
    img: "",
    title: "Snappy Process ",
    text: "Our application process can be completed in<br/> minutes,not hours.Don´t get stuck filing in tedious forms",
  },
  {
    img: "",
    title: "Affordable Princes",
    text: "We don´t want ypu worrying about high monthly<br/> costs.Our prices mayb be low.but we still offer the best coverage possible.",
  },
  {
    img: "",
    title: "People First",
    text: "Our plans aren´t full of conditions and clauses<br/> to prevent payouts. We make sure you´re<br/> covered when you need it.",
  }
]

function App() {

  return <div>

    <Navbar />
    <Header />
    <HomeTitle />
    <div className="container-cardsinfo">
      {cardInfo.map((props) => {

        return (

          <Home
            img={props.img}
            title={props.title}
            text={props.text}
          />
        )
      })}
    </div>
  </div>;
}

export default App;

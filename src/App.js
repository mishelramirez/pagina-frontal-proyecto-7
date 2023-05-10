import Navbar from "./Component/navbar/Navbar";
import Header from "./Component/header/Header";
import Home from "./Component/home/HomeCard.js";
import HomeTitle from "./Component/home/HomeTitle.js"
import HomeBox from "./Component/home/Homebox.js"
const cardInfo = [
  {
    urlimg: "./assets/icon-people-first.svg",
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
            img={props.urlimg}
            title={props.title}
            text={props.text}
          />
        )
      })}
       </div>
       
      <HomeBox/>
   
  </div>;
}

export default App;

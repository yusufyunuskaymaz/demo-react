import React from "react";
import card1 from "../assets/img/card/card-1.png";
import card2 from "../assets/img/card/card-2.png";
import card3 from "../assets/img/card/card-3.png";
import card4 from "../assets/img/card/card-4.png";
// import card5 from '../assets/img/card/card-5.png'
import card6 from "../assets/img/card/card-6.png";
import card7 from "../assets/img/card/card-7.png";
import card8 from "../assets/img/card/card-8.png";

const Cards = () => {

  const popularTitle = (e)=>{
    showOrHide("block")
    //remove current colored title
    document.querySelector(".populer-header").classList.toggle("populer-header")
    //add title color
    e.target.classList.add("populer-header")
    // Change style of cards
    document.querySelector(".cards").style.justifyContent = "space-between";


  }





  const showOrHide = (status) => {
    const card = document.querySelectorAll(".card");
    card.forEach((item) => {
      item.style.display = status;
    });
  };

  const showCard = (e,cardClass) => {
    showOrHide("none");
    const currentCard = document.querySelectorAll(`.${cardClass}`);

    
    // Remove color from other titles
    const coloredTitle = document.querySelector(".populer-header")
    coloredTitle.classList.remove("populer-header")
    

    // Give color to title
    e.target.classList.add("populer-header")


    // If one category has more than one card it comes as node so we need to loop through it
    if (typeof currentCard === "object") {
      document.querySelector(".cards").style.justifyContent = "flex-start";
      currentCard.forEach((item) => {
        item.style.display = "block";
        // item.style.marginRight = "1rem";
      });
    } else {
      currentCard.style.display = "block";
      document.querySelector(".cards").style.justifyContent = "space-between";

    }
  };

  return (
    <>
      <div className="container populer">
        <div className="populer-container">
          <div className="head">
            <ul>
              <li id="main-title" className="populer-header" onClick={(e) => popularTitle(e)}>Popular nearby</li>
              <li onClick={(e) => showCard(e,"card1")}>Villas</li>
              <li onClick={(e) => showCard(e,"card2")}>Surfing</li>
              <li onClick={(e) => showCard(e,"card3")}>Nation parks</li>
              <li onClick={(e) => showCard(e,"card4")}>Lake</li>
              <li onClick={(e) => showCard(e,"card5")}>Beach</li>
              <li onClick={(e) => showCard(e,"card6")}>Camp</li>
            </ul>
            <div className="filter">
              <span>Filters</span>
              <i className="fa-solid fa-sliders" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cards">
          <div className="card card1">
            <div className="card-img">
              <img src={card1} alt="house" />
            </div>
            <div className="card-body">
              <div className="card-info">
                <h6>Luxury resort</h6>
                <div className="rate">
                  <i className="fa-solid fa-star" />
                  4.8
                </div>
              </div>
              <div className="location">
                <p>Istanbul, Turkiye</p>
              </div>
              <div className="price">
                <p>Jul 20-24</p>
                <p>
                  $140/<span>Night</span>
                </p>
              </div>
            </div>
          </div>
          <div className="card card2">
            <div className="card-img">
              <img src={card2} alt="house" />
            </div>
            <div className="card-body">
              <div className="card-info">
                <h6>Tree Resort</h6>
                <div className="rate">
                  <i className="fa-solid fa-star" />
                  4.8
                </div>
              </div>
              <div className="location">
                <p>Istanbul, Turkiye</p>
              </div>
              <div className="price">
                <p>Jul 20-24</p>
                <p>
                  $200/<span>Night</span>
                </p>
              </div>
            </div>
          </div>
          <div className="card card3">
            <div className="card-img">
              <img src={card3} alt="house" />
            </div>
            <div className="card-body">
              <div className="card-info">
                <h6>Steel Galoon</h6>
                <div className="rate">
                  <i className="fa-solid fa-star" />
                  4.8
                </div>
              </div>
              <div className="location">
                <p>Istanbul, Turkiye</p>
              </div>
              <div className="price">
                <p>Jul 20-24</p>
                <p>
                  $100/<span>Night</span>
                </p>
              </div>
            </div>
          </div>
          <div className="card card4">
            <div className="card-img">
              <img src={card4} alt="house" />
            </div>
            <div className="card-body">
              <div className="card-info">
                <h6>Glass House</h6>
                <div className="rate">
                  <i className="fa-solid fa-star" />
                  4.8
                </div>
              </div>
              <div className="location">
                <p>Istanbul, Turkiye</p>
              </div>
              <div className="price">
                <p>Jul 20-24</p>
                <p>
                  $120/<span>Night</span>
                </p>
              </div>
            </div>
          </div>
          <div className="card card5">
            <div className="card-img">
              <img src={card8} alt="house" />
            </div>
            <div className="card-body">
              <div className="card-info">
                <h6>Luxury resort</h6>
                <div className="rate">
                  <i className="fa-solid fa-star" />
                  4.8
                </div>
              </div>
              <div className="location">
                <p>Istanbul, Turkiye</p>
              </div>
              <div className="price">
                <p>Jul 20-24</p>
                <p>
                  $140/<span>Night</span>
                </p>
              </div>
            </div>
          </div>
          <div className="card card6">
            <div className="card-img">
              <img src={card6} alt="house" />
            </div>
            <div className="card-body">
              <div className="card-info">
                <h6>Tree Resort</h6>
                <div className="rate">
                  <i className="fa-solid fa-star" />
                  4.8
                </div>
              </div>
              <div className="location">
                <p>Istanbul, Turkiye</p>
              </div>
              <div className="price">
                <p>Jul 20-24</p>
                <p>
                  $200/<span>Night</span>
                </p>
              </div>
            </div>
          </div>
          <div className="card card2">
            <div className="card-img">
              <img src={card7} alt="house" />
            </div>
            <div className="card-body">
              <div className="card-info">
                <h6>Steel Galoon</h6>
                <div className="rate">
                  <i className="fa-solid fa-star" />
                  4.8
                </div>
              </div>
              <div className="location">
                <p>Istanbul, Turkiye</p>
              </div>
              <div className="price">
                <p>Jul 20-24</p>
                <p>
                  $100/<span>Night</span>
                </p>
              </div>
            </div>
          </div>
          <div className="card card1">
            <div className="card-img">
              <img src={card8} alt="house" />
            </div>
            <div className="card-body">
              <div className="card-info">
                <h6>Glass House</h6>
                <div className="rate">
                  <i className="fa-solid fa-star" />
                  4.8
                </div>
              </div>
              <div className="location">
                <p>Istanbul, Turkiye</p>
              </div>
              <div className="price">
                <p>Jul 20-24</p>
                <p>
                  $120/<span>Night</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

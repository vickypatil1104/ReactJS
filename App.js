import React from "react";
import ReactDOM from "react-dom";
import logo from "./img/logo.png";
import cardImg from "./img/card.png";
import corporate from "./img/icon/icons8-corporate-50.png";
import corporate2 from "./img/icon/icons8-corporate-50 (1).png";
import search from "./img/icon/icons8-search-50.png";
import search2 from "./img/icon/icons8-search-50 (1).png";
import offer from "./img/icon/icons8-new-64.png";
import offer2 from "./img/icon/icons8-new-64 (1).png";
import help from "./img/icon/icons8-help-50.png";
import help2 from "./img/icon/icons8-help-50 (1).png";
import signIn from "./img/icon/icons8-sign-in-50.png";
import signIn2 from "./img/icon/icons8-sign-in-50 (1).png";
import card from "./img/icon/icons8-cart-50.png";
import card2 from "./img/icon/icons8-cart-50 (1).png";
import "./CSS/style.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <div className="nav-icon-img">
              <img src={corporate} alt="corporate" />
            </div>
            Swiggy Corporate
          </li>
          <li>
            <div className="nav-icon-img">
              <img src={search} alt="search" />
            </div>
            Search
          </li>
          <li>
            <div className="nav-icon-img">
              <img src={offer} alt="offer" />
            </div>
            Offers
          </li>
          <li>
            <div className="nav-icon-img">
              <img src={help} alt="help" />
            </div>
            Help
          </li>
          <li>
            <div className="nav-icon-img">
              <img src={signIn} alt="signIn" />
            </div>
            Sign In
          </li>
          <li>
            <div className="nav-icon-img">
              <img src={card} alt="card" />
            </div>
            Cart
          </li>
        </ul>
      </div>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="card-container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

const Card = () => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={cardImg} alt="card-img" srcset="" />
      </div>
      <div className="card-heading">
        <h1>Pizza Hut</h1>
      </div>
      <div className="cousine">
        <p>Chinese, Asian, Tibetan,</p>
      </div>
    </div>
  );
};

const AppData = () => {
  return (
    <div>
      <Navbar />
      <CardContainer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppData />);

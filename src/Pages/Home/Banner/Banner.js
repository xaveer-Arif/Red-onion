import React from "react";
// import bannerImg from "../../../logo/bannerbackground.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div>
        <h1 className="banner-heading">Best food waiting for your balley</h1>
        <input className="inputFeild ps-2" placeholder="search food" />
        <button className="btn banner-btn ">Search</button>
      </div>
    </div>
  );
};

export default Banner;

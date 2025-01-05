import React from 'react';
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container d-flex direction-column align-center gap-lg">
      <h1>Browser Extension</h1>
      <div className="user-details d-flex direction-column =">
        <span className="heading-1">Hello, What's your name?</span> <br />
        <input className="input"/>
      </div>
    </div>
  );
}
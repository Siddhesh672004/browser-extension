import React from 'react';
import "./Home.css";
import { useBrowser } from '../../context/browser-context';

export const Home = () => {

  const {name, browserDispatch} = useBrowser();

  const handleFormSubmit = (event) => {
    event.preventDefault();
  }

  const handleNameChange = (event) => {
    if (event.key === "Enter" && event.target.value.length > 0) {
      browserDispatch({
        type: "NAME",
        payload: event.target.value
      })
    }
  }

  return (
    <div className="home-container d-flex direction-column align-center gap-lg">
      <h1>Browser Extension</h1>
      <div className="user-details d-flex direction-column =">
        <span className="heading-1">Hello, What's your name?</span> <br />
        <form onSubmit={handleFormSubmit}>
          <input className="input" onKeyDown={handleNameChange}/>
        </form>
      </div>
    </div>
  );
}
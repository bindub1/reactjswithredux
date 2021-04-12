import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>React , Redux and Router for altra responsive web apps.</p>
      <Link to="about" className="btn btn-priamry btn-lg">
        {" "}
        Learn More
      </Link>
    </div>
  );
};

export default HomePage;

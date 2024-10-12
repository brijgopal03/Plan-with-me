import React from "react";
import Card from "./Card";
const Tours = (props) => {
  return (
    <div className="container">
      <div>
        <h2 className="title">Plan - With - Me</h2>
      </div>

      <div className="cards">
        {props.tours.map((tour) => {
          return <Card {...tour} removeTour={props.removeTour}></Card>;
        })}
      </div>
    </div>
  );
};

export default Tours;

import React from "react";
import Card from "./Card";
const Tours = (props) => {
  return (
    <div>
      <div>
        <h2>Plan - with - me</h2>
      </div>

      <div>
        {props.tours.map((tour) => {
          return <Card {...tour} removeTour={props.removeTour}></Card>;
        })}
      </div>
    </div>
  );
};

export default Tours;

import React from "react";
import Card from "./Card";

const Column = ({ title }) => {
  const cards = ["Task 1", "Task 2", "Task 3"];

  return (
    <div className="column">
      <h3>{title}</h3>
      {cards.map((card, index) => (
        <Card key={index} content={card} />
      ))}
    </div>
  );
};

export default Column;

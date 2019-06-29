import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, userIndex) => {
        return (
          <Card
            key={robots[userIndex].id}
            id={robots[userIndex].id}
            name={robots[userIndex].name}
            email={robots[userIndex].email}
          />
        );
      })}
    </div>
  );
};
export default CardList;

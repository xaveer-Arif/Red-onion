import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import FirstMeal from "../FirestMeal/FirstMeal";

const Breakfast = () => {
  const [breakFast, SetBreakFast] = useState([]);

  useEffect(() => {
    fetch("./Breakfast.json")
      .then((res) => res.json())
      .then((data) => SetBreakFast(data));
  }, [breakFast]);
  return (
    <div className="row" id="breakfast">
      <Row xs={1} md={2} lg={3} className="g-4">
        {breakFast.map((bMeal) => (
          <FirstMeal key={bMeal.id} bMeal={bMeal}></FirstMeal>
        ))}
      </Row>
    </div>
  );
};

export default Breakfast;

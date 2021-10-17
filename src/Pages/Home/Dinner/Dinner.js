import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ThirdMeal from "../ThirdMeal/ThirdMeal";

const Dinner = () => {
  const [dinner, setDinner] = useState([]);

  useEffect(() => {
    fetch("Dinner.json")
      .then((res) => res.json())
      .then((data) => setDinner(data));
  }, [dinner]);
  return (
    <div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {dinner.map((thirdMeal) => (
          <ThirdMeal key={thirdMeal.id} thirdMeal={thirdMeal}></ThirdMeal>
        ))}
      </Row>
    </div>
  );
};

export default Dinner;

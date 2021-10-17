import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SecondMeal from "../SecondMeal/SecondMeal";

const Lunch = () => {
  const [lunch, setLunch] = useState([]);
  useEffect(() => {
    fetch("./Lunch.json")
      .then((res) => res.json())
      .then((data) => setLunch(data));
  }, [lunch]);
  return (
    <div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {lunch?.map((secondMeal) => (
          <SecondMeal key={secondMeal.id} secondMeal={secondMeal}></SecondMeal>
        ))}
      </Row>
    </div>
  );
};

export default Lunch;

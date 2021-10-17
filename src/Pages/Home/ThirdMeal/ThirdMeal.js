import React from "react";
import { Card, Col } from "react-bootstrap";

const ThirdMeal = ({ thirdMeal }) => {
  const { img } = thirdMeal;
  return (
    <div>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </div>
  );
};

export default ThirdMeal;

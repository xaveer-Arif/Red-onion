import Tabs from "@restart/ui/esm/Tabs";
import React from "react";
import { Container, Nav, Navbar, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import Breakfast from "../Breakfast/Breakfast";

const Mininav = () => {
  return (
    <div>
      <Navbar className="bg-color" variant="light">
        <Container>
          {/* <Nav className="m-auto"> */}

          {/* <Nav.Link className="fw-bold" href="#breakfast">
              Breakfast
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#lunch">
              Lunch
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#dinner">
              Dinner
            </Nav.Link> */}
          {/* </Nav> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default Mininav;

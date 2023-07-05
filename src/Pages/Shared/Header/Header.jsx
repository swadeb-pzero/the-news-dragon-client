import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container,  } from "react-bootstrap";
import Marquee from "react-fast-marquee";


const Header = () => {
 
  
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small className="fw-bold">Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex bg-danger-subtle">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={80}>
          I can be a React component, multiple React components, or just some
          text..........I can be a React component, multiple React components,
          or just some text..........
        </Marquee>
      </div>
      <div>
       
      </div>
    </Container>
  );
};

export default Header;

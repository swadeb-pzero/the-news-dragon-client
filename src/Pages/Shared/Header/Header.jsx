import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Image, Nav, Navbar,} from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
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
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Carrier</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">
                <Image src="holder.js/171x180" rounded />
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                <Button variant="secondary">Login</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;

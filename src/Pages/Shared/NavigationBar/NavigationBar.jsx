import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";

const NavigationBar = () => {

    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
      logOut()
      .then()
      .catch(error =>{
        console.log(error);
      })
    }

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
             <Nav.Link href="#pricing">
               <Link to="/category/0">Home</Link>
              </Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Carrier</Nav.Link>
            </Nav>
            <Nav>
              { user &&  <FaUserCircle style={{ fontSize: "2em" }}></FaUserCircle>
              }

              
                {user ? 
                  <Button onClick={handleLogOut} variant="secondary">Logout</Button>
                 : 
                  <Link to="/login">
                    <Button variant="secondary">LogIn</Button>
                  </Link>
                }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;

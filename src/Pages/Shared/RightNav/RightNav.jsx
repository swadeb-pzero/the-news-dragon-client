import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaBeer, FaGoogle, FaGithub , FaFacebook,FaTwitter, FaInstagramSquare} from "react-icons/fa";
import Qzone from "../QZone/Qzone";

const RightNav = () => {
  return (
    <div>
      <h2>Login With</h2>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub />
        Login with Github
      </Button>
      <div>
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
          <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
          <ListGroup.Item> <FaInstagramSquare />Instragram</ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
    </div>
  );
};

export default RightNav;

import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/category/0'


    const handleSignIn = event =>{
      event.preventDefault();

      const  form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password)

      signIn(email,password)
      .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, {replace: true});
        form.reset();
      })
      .catch(error =>{
        console.log(error.message)
      })
    }

  return (
    <Container className="mx-auto w-50">
      <h3 className="text-center py-2"> Login your Account</h3>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text>
        Don't have an account? please  <Link to='/register'>Register..</Link>
        </Form.Text>
        <Form.Text className="text-danger">
          
        </Form.Text>
        <Form.Text className="text-primary">
         
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;

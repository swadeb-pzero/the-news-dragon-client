import React from 'react'
import Header from '../Pages/Shared/Header/Header'
import { Col, Container, Row } from 'react-bootstrap'
import RightNav from '../Pages/Shared/RightNav/RightNav'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar'

const NewsLayOut = () => {
  return (
    <div>
       <Header></Header>
       <NavigationBar></NavigationBar>
      <Container>
      <Row>
        <Col lg={9}>
           <Outlet></Outlet>
        </Col>
        <Col lg={3}>
            <RightNav></RightNav>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default NewsLayOut

import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Nav,
  Navbar,
  Container,
  Form,
  Button,
  Col,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./navbar.css";

function NavHeader(props) {


  const logoutUser = () => {
    localStorage.clear();
    if(window.location.pathname === '/')  props.history.push("/login");
    else props.history.push("/");
  }

  return (
    <div className="navbar_main" style={{width:'100%'}}>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent:'space-between'}}>
            {/* <div style={{fontSize:'30px',color:'orange'}}>Chat Messanger</div> */}
            <div style={{alignItems:'center'}}>
              <Nav className="me-auto">
                <Row className="g-3">
                  <Col md={12}>
                    <div>
                      <Button
                        style={{ width: "100%" ,padding:'10px',marginTop:'15px', marginBottom:'10px'}}
                        className="searchbutton"
                        onClick={logoutUser}
                      >
                        Logout
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default withRouter(NavHeader);

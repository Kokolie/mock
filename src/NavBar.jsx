import React from 'react';
import './styles/NavBar.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Collapse, Col, Container, Navbar, NavbarBrand, NavbarToggler, Nav, Row } from 'reactstrap';
import Mapping from './Mapping.jsx';
import Img from 'react-image';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: true,
      loggedIn: false,
      loginExpired: false
    };
    this.timeout = {};
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  async componentDidMount() {
  }

  render() {
    return (
      <Container>
      <Router>
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><Img src="/img/logo.png" /></NavbarBrand>
          <NavbarToggler className="text-right nav-right" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.state.loggedIn && <Nav style={{width:"100%", marginRight:"30px"}} className="text-right">
            </Nav> }
          </Collapse>
          <NavbarBrand>Mapping Tool<br></br>{/*window.location.hostname*/}</NavbarBrand>
        </Navbar>
        <Route exact path="/" component={Mapping} />
        </div>
      </Router>
      <div className="footer">
      <Container>
      <Row>
      <Col className="text-center">
        Back-end: http://localhost:3030
      </Col>
      </Row>
      </Container>
      </div>
      </Container>

    );
  }
}

export default NavBar;

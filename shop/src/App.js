/* eslint-disable */
import './App.css';
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl, Container, } from 'react-bootstrap';
import React, { useState } from 'react';
import Data from './data.js';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail.js';

function App() {

  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {/* 메인페이지 */}
      <Route exact path="/">

        <Jumbotron />

        <div className="container">
          <div className="row">
            {
              shoes.map((el, i) => {
                return (
                  <Card productInfo={el} index={i} key={i} />
                )
              })
            }
          </div>
        </div>

      </Route>


      {/* 디테일페이지 */}
      <Route path="/detail">
        <div>디테일페이지</div>
      </Route>


    </div>
  );
}

function Jumbotron() {
  return (
    <div className="background">
      <h1>20% Season Off</h1>
      <p>
        asdfasdf
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </div>
  )
}


function Card(card) {

  const shoeTitle = card.productInfo.title;
  const shoeContent = card.productInfo.content;
  const shoePrice = card.productInfo.price;

  const picPath = 'https://codingapple1.github.io/shop/shoes' + (card.index + 1) + '.jpg';

  return (
    <>
      <div className="col-md-4">
        <img src={picPath} alt="신발사진" width="100%" />
        <h4>{shoeTitle}</h4>
        <p>{shoeContent} & {shoePrice}</p>
      </div>
    </>
  )
}



export default App;

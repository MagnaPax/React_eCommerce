/* eslint-disable */
import './App.css';
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl, Container, } from 'react-bootstrap';
import React, { useState } from 'react';
import Data from './data.js';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail.js';
import axios from 'axios';


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
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
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


      {/* Route : 페이지 나누기. 이 주소가 입력되면 보여줄 페이지
      Link : 페이지 이동. to 뒤에 나온 주소로 그냥 이동
      Switch : 중복방지. 스위치처럼 하나 올라가면 하나 내려가듯 중복 매칭된 Route 들 중에 맨 위에 매칭된 것만 동작시킴 */}

      <Switch>

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
        {/* Switch 때문에 얘만 선택됨 */}
        {/* url 의 파라미터. 콜론(:) 뒤에 어떤 주소(문자)를 입력하든 이 페이지 보여주겠다 */}
        {/* /detail/:id/:id2 이런식으로 여러개 사용 가능 */}
        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>


        {/* /:hahaha 는 /뒤의 모든문자 라는 의미 */}
        {/* Switch 때문에 선택되지 못함 */}
        <Route path="/:hahaha">
          <div>주소창에 / 뒤에 아무문자(주소)가 와도 이것 보여줘</div>
        </Route>

      </Switch>

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

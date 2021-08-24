/* eslint-disable */
import './App.css';
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl, Container, } from 'react-bootstrap';
import React, { useState, useContext } from 'react';
import Data from './data.js';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail.js';
import axios from 'axios';


// ** context 만들기 **
// 1. React.createContext() 로 같은 변수값을 공유할 범위 생성
export let 재고context = React.createContext();


function App() {

  let [shoes, shoes변경] = useState(Data);
  let [로딩중, 로딩중변경] = useState(false);
  let [재고, 재고변경] = useState([10, 11, 12]);


  return (
    <div className="App">

      {/* 메뉴바*/}
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

          {/* 로딩중 아니면 상품카드 보이게 아니면 안보이게*/}
          {
            로딩중 === false
              ? <ShowCards shoes={shoes} />
              : < Loading />
          }

          {/* Ajax
서버에 새로고침없이 요청을 할 수 있게 도와줌
1) JQuery 설치해서 $.ajax() 쓰든가
2) axis 설치해서 axios.get() 쓰든가
3) 쌩자바스크립트 fetch() 쓰든가 */}
          <button className="btn btn-primary" onClick={() => {
            // 로딩중이라는 UI띄움
            로딩중변경(true);

            axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result) => {
                // 자료를 읽어왔으니까
                // 로딩중이라는 UI없앰
                setTimeout(() => { 로딩중변경(false) }, 1000);

                // 전개구문사용 ... 연산자는 [] 벗겨줌
                // 괄호[] 벗긴 다음에 다시 괄호 씌운것
                shoes변경([...shoes, ...result.data]);
              })
              .catch(() => {
                로딩중변경(false);
                console.log('실패했어요');
              })
          }}>더보기</button>

        </Route>


        {/* 디테일페이지 */}
        {/* Switch 때문에 얘만 선택됨 */}
        {/* url 의 파라미터. 콜론(:) 뒤에 어떤 주소(문자)를 입력하든 이 페이지 보여주겠다 */}
        {/* /detail/:id/:id2 이런식으로 여러개 사용 가능 */}
        <Route path="/detail/:id">

          {/* ** context 만들기 ** 2. 같은 값을 공유할 HTML을 범위로 싸매기 */}
          <재고context.Provider value={재고}>
            <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
          </재고context.Provider>

        </Route>


        {/* /:hahaha 는 /뒤의 모든문자 라는 의미 */}
        {/* Switch 때문에 선택되지 못함 */}
        <Route path="/:hahaha">
          <div>주소창에 / 뒤에 아무문자(주소)가 와도 이것 보여줘</div>
        </Route>

      </Switch>

    </div >
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


function ShowCards(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          {
            props.shoes.map((el, i) => {
              return (
                <Card productInfo={el} index={i} key={i} />
              )
            })
          }
        </div>
      </div>
    </>
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

function Loading() {
  return (
    <h2>로딩중</h2>
  )
}

export default App;

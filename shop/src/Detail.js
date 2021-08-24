// 컴포넌트 만들때는 import React 꼭 해줘야 됨
import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import { 재고context } from './App.js';


function Detail(props) {

  // 컴포넌트의 Lifecycle 단계
  // 등장 ---> 업데이트(재렌더링) ---> 퇴장

  // Lifecycle Hook 은 그 이름대로 이 중간중간에 훅을 걸어서 원하는 행동을 해달라고 하는것

  // useEffect 훅
  // 1) 컴포넌트가 mount 되었을 때
  // 2) 컴포넌트가 update 될 때
  // 3) 컴포넌트가 사라질 때

  // useEffect 특징
  // 1) 여러개 사용가능
  // 2) return : 컴포넌트가 사라질 때 실행시키고 싶은 것
  // 3) [] : 실행 조건들  
  let [alert1상태, alert1상태변경] = useState(true);
  let [alert2상태, alert2상태변경] = useState(true);

  useEffect(() => {
    let 타이머 = setTimeout(() => { alert1상태변경(false) }, 2000)
    return () => { clearTimeout(타이머) } // 에러방지. 만약2초 되기전 뒤로간다면?
  }, []) // 딱 한 번만 실행됨

  useEffect(() => {
    let 타이머 = setTimeout(() => { alert2상태변경(false) }, 3000)
    return () => { clearTimeout(타이머) }
  }, [alert2상태]) // 'alert2상태' 가 변경될때만 실행됨



  // 방문기록 등을 저장해놓는 object
  let history = useHistory();

  // 사용자가 입력한 url 파라미터들 저장
  // 주소창의 detail 뒤의 /:id 자리에 사용자가 입력한 값이 저장됨
  let { id } = useParams();

  // 현재 /:id 자리에 입력한 값과 영구번호가 같은 
  // {상품데이터}를 찾아서 데이터바인딩
  const 주소창id와같은상품 = props.shoes.find(x => x.id == id);
  const shoeTitle = 주소창id와같은상품.title;
  const shoeContent = 주소창id와같은상품.content;
  const shoePrice = 주소창id와같은상품.price;

  // CSS를 미리 입혀놓은 컴포넌트 (CSS in JS)
  // 컴포넌트에 직접 스타일 넣기    
  const 박스 = styled.div`
      padding : 20px;
    `;

  // props 전달받아 사용
  const 제목 = styled.h4`
      font-size: 25px;
      color: ${props => props.색상}; // 이 안의 값이 전달해준 것으로 바뀜
    `;


  return (
    <div className="container">
      <박스>
        <제목 색상={'red'} >Detail</제목>
        <제목 색상='blue' >Detail</제목>
        <제목 className="detailPage" >상세페이지</제목>
      </박스>

      {
        alert1상태 === true
          ? (
            <div className="my-alert">
              <p>재고가 얼마 남지 않았습니다</p>
            </div>
          )
          : null
      }
      {
        alert2상태 === true
          ? (
            <div className="my-alert-yellow">
              <p>재고가 얼마 남지 않았습니다</p>
            </div>
          )
          : null
      }


      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoeTitle}</h4>
          <p>{shoeContent}</p>
          <p>{shoePrice}원</p>

          {/* conText사용해서 App 컴포넌트에서 값 받아와서 사용 */}
          <ShoesStockUsingContext />

          {/* 얘는 props 사용해서 App 컴포넌트에서 값 받아옴 */}
          {/* <ShoesStock 재고={props.재고} /> */}

          <button className="btn btn-danger" onClick={() => { props.재고변경([9, 10, 11]) }}>주문하기</button>
          <button className="btn btn-danger" onClick={() => {
            // history.goBack(); // 얘도 똑같은기능
            history.push('/');
          }}>뒤로가기</button>
        </div>
      </div>
    </div>
  )
};


function ShoesStock(props) {
  return (
    <p>재고: {props.재고[0]}</p>
  )
}

function ShoesStockUsingContext() {
  // ** context 만들기 **  3. 변수값을 공유받을 컴포넌트 안에서 useContex(범위이름)로 공유된 값 사용가능
  let 재고fromApp컴포넌트 = useContext(재고context);

  return (
    <p>재고: {재고fromApp컴포넌트[0]}</p>
  )
}



class Detail2 extends React.Component {
  // 컴포넌트가 Mount(등장) 되었을 때 실행할 코드
  componentDidMount() { }

  // 컴포넌트가 Unmount(사라지기) 직전에 실행할 코드
  componentWillUnmount() { }
}


// 이렇게 변수뿐만 아니라 함수도 export 할 수 있음
export default Detail

// 컴포넌트 만들때는 import React 꼭 해줘야 됨
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';


function Detail(props) {

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
      </박스>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoeTitle}</h4>
          <p>{shoeContent}</p>
          <p>{shoePrice}원</p>
          <button className="btn btn-danger">주문하기</button>
          <button className="btn btn-danger" onClick={() => {
            // history.goBack(); // 얘도 똑같은기능
            history.push('/');
          }}>뒤로가기</button>
        </div>
      </div>
    </div>
  )
};

// 이렇게 변수뿐만 아니라 함수도 export 할 수 있음
export default Detail

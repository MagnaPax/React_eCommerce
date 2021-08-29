import React from 'react';
import { Table } from 'react-bootstrap';
// 컴포넌트에서 redux 사용한 state 쓰려면
// 1. import {connect}
import { connect } from 'react-redux';

function Cart(props) {
  return (
    <>

      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        <tr>
          <td>1</td>
          <td>{props.상품정보[0].name}</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </Table>

    </>
  )
}


// 2. function 만들기
// redux 로 가져온 'store' 데이터를 props로 변환해주는 함수
function state를props화시켜주기(상태) {
  return {
    // 'store' 안에 있던 모든 데이터를 '상품정보' 라는 props로 바꿔줘
    상품정보: 상태
  }
}

// 3. export default connect()()
export default connect(state를props화시켜주기)(Cart)
// export default Cart;
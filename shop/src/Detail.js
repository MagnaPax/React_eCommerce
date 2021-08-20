// 컴포넌트 만들때는 import React 꼭 해줘야 됨
import React from 'react';
import { useHistory } from 'react-router-dom';

function Detail(props) {

    // 방문기록 등을 저장해놓는 object
    let history = useHistory();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">상품명</h4>
                    <p>상품설명</p>
                    <p>120000원</p>
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

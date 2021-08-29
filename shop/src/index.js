import React from 'react'; // 경로가 없이 이름만 있으니까 얘는 라이브러리
import ReactDOM from 'react-dom'; // 얘도 라이브러리
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 서버에게 요청할 수도 있어서 위험
// 서버는 그런 페이지 없다고 에러 발생 가능
// 서버에서 서버 라우팅 방지하는 API 작성해둬야 됨
import { BrowserRouter } from 'react-router-dom';

// 아래처럼 BrowserRouter대신에 HashRouter를 사용하면 
// 절대로 서버에 전송이 안돼서 라우팅을 더욱 안전하게 사용할 수 있다
// 브라우저 주소창을 보면 사이트 주소 뒤에 '#' 이 붙게된다
import { HashRouter } from 'react-router-dom';


// redux 세팅
// 1. import { Provider }
import { Provider } from 'react-redux';
// 3. createStore() 안에 state 저장
let store = createStore(() => { return [{ id: 0, name: '멋진신발', quan: 2 }] });



ReactDOM.render(
  <React.StrictMode>

    {/* App 컴포넌트를 감싸줬음 */}
    <BrowserRouter>

      {/* 2. <Provider 로 App 컴포넌트 감싸기 */}
      {/* 감싸진 애들은 props 없이도 state 공유 가능 */}
      {/* 4. <Provider>에 props 전송 */}
      <Provider store={store}>
        <App />
      </Provider>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

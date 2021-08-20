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

ReactDOM.render(
  <React.StrictMode>

    {/* App 컴포넌트를 감싸줬음 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

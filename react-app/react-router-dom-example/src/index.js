import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HashRouter,BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom'

function Home(){
  return(
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}
function Topics(){
  return(
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  );
}
function Contact(){
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}
function App(){
  return(
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/topics' element={<Topics></Topics>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/*' element={<h2>Not Found</h2>}></Route>
      </Routes>

      

    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<HashRouter><App /></HashRouter>);
// 위 처럼 사용하게 되면, 사용자가 어느 url로 들어와도 해당 경로로 위치 시켜준다. /#/로 나타내어 지는데, # 뒤의 요소는 무시한다.

//ReactDOM.createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>);

// index.html에 'root'라는 아이디를 가진 요소가 있다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

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
        <li><a href='/'>Home</a></li>
        <li><a href='/topics'>Topics</a></li>
        <li><a href='/contact'>Contact</a></li>
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

ReactDOM.createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>);
// index.html에 'root'라는 아이디를 가진 요소가 있다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HashRouter,BrowserRouter, Route, Routes, Link, NavLink, useParams} from 'react-router-dom'
import styled from 'styled-components';

const StyledButton = styled.button`
  color : white;
  background-color : green;
  text-align : center;
`;

const LargeButton = styled(StyledButton)`
  font-size : 50px;
`;
const PrimaryButton = styled.button`
  color : ${props => props.primary ? 'white' : 'black'};
  background-color : ${props => props.primary ? 'black' : 'white'};

  color : ${function(props){
    console.log('props', props);
    if(props.primary){
      return 'white';
    }
    else{
      return 'black';
    }
    
  }};
`;
const ReactButton = props => {
  console.log('props', props);
  return <button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
  font-size : 50px;
  background-color :skyblue;

    
`;


function Home(){
  return(
    <div>
      <h2>Home</h2>
      <p>Home...</p>
      <div>
        <StyledButton>simple</StyledButton>
        <LargeButton>Large</LargeButton>
        <ReactButton>react</ReactButton>
        <ReactLargeButton>react Large</ReactLargeButton>
        
      </div>

      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton primary="true">Primary</PrimaryButton>
        
    </div>
  );
}

var contents = [
  {id : 1, title : 'HTML', description : 'HTML is ...'},
  {id : 2, title : 'JS', description : 'JS is ...'},
  {id : 3, title : 'React', description : 'React is ...'},
]
function Topic(){
  var params = useParams(); // hook 사용하기
  console.log(params);
  var topic_id = params.topic_id;

  var selected_topic = {
    title : 'Sorry',
    description : 'Not Found',
  };
  for(var i=0; i<contents.length; i++){
    if(contents[i].id === Number(topic_id)){
      selected_topic = contents[i];
      //selected_topic.id = contetns[i].id;
      //selected_topic.title = contents[i].title;
      //selected_topic.description = contents[i].description;
      
      
      break;
    }
  }

  return(
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  )
}
function Topics(){
  var lis = [];
  for(var i=0; i<contents.length; i++){
    lis.push(
      <li key={contents[i].id}><NavLink to={"/topics/" + contents[i].id}>{contents[i].title}</NavLink></li>
    )
  }
  return(
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
        
      </ul>
      <Routes>
      <Route path='/:topic_id' element={<Topic></Topic>}></Route>
      </Routes>
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
        <Route path='/topics/*' element={<Topics></Topics>}></Route>
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

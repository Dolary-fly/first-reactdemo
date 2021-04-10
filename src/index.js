import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Count from './components/count';
// import Counter from './components/countdevide/Counter';
// import TodoList from './components/TodoList/TodoList';
// import Form from './components/Form/Form';
import Student from './components/Student/Student';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

ReactDOM.render(
  // <Count></Count>,
  // <Counter></Counter>,
  // <TodoList></TodoList>,
  // <Form />,
  <Student></Student>,
  document.getElementById('root')
);
// 通过ReactDOM.render()来修改我们想要渲染的元素
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Movie from './Movie';

ReactDOM.render(
    <Movie />, // component를 사용하고자 할 때 이런 식으로 사용한다.
    // component는 HTML을 반환하는 함수이다.
    // 이러한 JS와 HTML의 조합 = JSX!
    // <Potato />, // 이런 식으로는 작동이 안 된다.
    // !!!!!!!!!왜냐면 react application이 한 번에 하나의 component만을 render하기 때문!!!!!!!!!!!!1
    // 즉 이미 App component를 사용하고 있으니, Potato component를 사용할 수 없다.
    // 해결방법) 현재 render하고 있는 App안에 Potato를 집어넣는다.
    // 즉 이와 같은 방식으로, render하고 있는 하나의 component 안에 원하는 만큼의 component를 import해와서 사용할 수 있다!
  document.getElementById('root')
);
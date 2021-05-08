import React from 'react';
// import propTypes from 'prop-types'; // 소문자여야 함

// const foods = [
//   {
//     key: 1, // each child in a list should have a unique "key" prop
//     // 즉 react의 모든 element들은 다르게 보일 필요가 있다는 뜻 -> 고유한 id를 가져야 함
//     name: "김치",
//     img: "data:image/jpeg;base64,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",
//     rating: 3.8
//   },
//   {
//     key: 2,
//     name: "떡볶이",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKE94mHP31Pd1gjPwZdOZP_RKP_71bY7jMdQ&usqp=CAU",
//     rating: 4.2
//   }
// ]

// function renderFood(props) {
//   // console.log(props);
//   return <Food key={props.key} name={props.name} img={props.img} rating={props.rating} />
// }

// function App() { // component: 함수이고, HTML요소를 갖고 있음. 대문자로 시작해야 함
//   // component는 component를 사용할 수 있다!
//   // Food라는 component에 fav라는 props(properties)를 주고, value로 "kimchi"를 준 것
//   return (
//     <div>
//       {/* {console.log(foods.map(renderFood))} */}
//       {foods.map(renderFood)}
//     </div>
//   )
// }

// function Food(props) { // food의 props를 가져오겠다는 뜻
//   function Food({name, img, rating}) {// props의 fav를 가져오겠다는 뜻!
//   // console.log(props)
//   // function Food(props) -> console.log(props)를 찍어보면 {fav: 삼겹살}, {fav: 쭈꾸미}... 나온느 걸 확인
//   // props? 9~12처럼 뭐든지 component에 넣게 되는 것들! -> fav키들
//   // props에는 fav라는 키가 있고, 해당 key의 value를 꺼내겠다는 것(구조분해할당)
//   // 해당 문구는 Food인자를 props로 받을 시(17번), {props.fav}로도 대체 가능 but not cool~
//   return (
//     <div>
//       <h1>I love {name}!</h1>
//       <h2>{rating}/5.0</h2>
//       <img src={img} alt={name} />
//     </div>
//   )
// } // img 태그의 경우, alt prop을 설정해서 빈 스트링이든 뭐든 설정해 줘야 함 - 시각장애인들을 위한 거라고 한다.

// Food.propTypes = { // 소문자여야 함
  // name: propTypes.string.isRequired,
  // img: propTypes.string.isRequired,
  // rating: propTypes.number.isRequired // isRequired: 필수 요구사항
  // 즉 ex) rating - number(.isRequired)면 number 타입인지 or undefined인지(없는지) 검사를 하고 해당 사항이 맞으면 에러가 안 뜸
  // 하지만 rating이 string, boolean 타입 등등이면 에러가 뜬다!
// }

class App extends React.Component { // react는 자동적으로 나의 class component의 render메소드를 실행한다! 자동으로!
  constructor(props) {
    super(props);
    console.log("react start!")

    this.state = { // component의 data를 바꾸기 위해 state가 필요하다!
      // constructor, super를 빼고 바로 state를 지정할 수도 있지만 this.state을 추천
      count: 0
    }
    this.add = this.add.bind(this); // state로 바로 설정하지 않고 this.state로 설정하면 bind해줘야 사용 가능하다.
    this.minus = this.minus.bind(this);
  };

  add() {
    console.log("add")
    // this.state.count++; // Do not mutate state directly. Use setState()
    // 이유) react는 render()를 refresh하지 않기 때문
    // setState를 사용하지 않으면, 새 state와 함께 render()가 호출되지 않을 것이다.
    // this.setState({count: this.state.count + 1}); // this.state.count++ 는 안 되네...?
    // 위와 같이 this.state... 등을 직접 사용하는 것은 not cool
    this.setState(current => ( {count: current.count + 1} )) // return 시 ()필요!
    // 왜? 여기서 사용된 {}는 return의 뜻이 아닌, 객체를 의미하기에 return의 의미를 갖는 ()를 써줘야 함
    // 즉 ( return {count: ...} ) 의 의미인 것!
    // 이 방식처럼 setState의 인자를 함수로 사용 시, 외부의 변수(this.state)에 접근하지 않는 cool way
  }

  minus() {
    console.log("minus")
    this.setState(current => ( {count: current.count - 1} ));
  }

  componentDidMount() { // 실행 시
    console.log("OK, component rendered!")
  }

  componentDidUpdate() { // setState로 update 시
    console.log("I just did update!")
  }

  componentWillUnmount() { // component가 죽은 후(삭제 된 후)
    console.log("Syte..m..do..w..n...")
  }

  // 매 순간 내가 setState를 호출할 때마다 react는 새로운 state와 함께(current) render()를 호출한다.
  // 즉 setState를 사용할 때마다(update할 때마다) render()호출 -> 1. setState 2. render()의 순서
  render() { // class 이용시 render 필수!
    // React.Component에서 사용하는 유일한 function은 render()!
    // 메소드 끌어올 시, 실행값()이 아닌, 함수 자체를 가져와야 한다!
    console.log("then let's rendering!")
    return (
      <div>
        <h1>I am {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }

}

export default App;

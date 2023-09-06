/*eslint-disable*/

import './App.css';
import { useState } from 'react';

function App() {
  //static render
  let post = '강남 우동 맛집';

  //html re render
  let [subTitle, b] = useState([
    '여자 코드 추천',
    '남자 코트 추천',
    '남자 야구잠바 추천',
  ]);

  let [goodCount, setGoodCount] = useState(0);

  function plusGoodCount() {
    // set 할때 주의사항 : React는 참조 주소가 같으면 update 하지 않음
    setGoodCount(goodCount + 1);
  }

  function copySubTitle() {
    //clone
    let copy = [...subTitl];
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      <span
        onClick={() => {
          setGoodCount(goodCount + 1);
        }}
      >
        👍
        <h4>{goodCount}</h4>
      </span>
      <ListItem subtitle={subTitle[0]} datestr="2월 17일 발행"></ListItem>
      <ListItem subtitle={subTitle[1]} datestr="2월 17일 발행"></ListItem>
      <ListItem subtitle={subTitle[2]} datestr="2월 17일 발행"></ListItem>

      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

function ListItem(props) {
  return (
    <div className="list-item">
      <h4>{props.subtitle}</h4>
      <p>{props.datestr}</p>
    </div>
  );
}

export default App;

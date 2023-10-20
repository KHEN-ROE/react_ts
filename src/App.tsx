import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector, } from 'react-redux/es/exports';
import { Dispatch } from 'redux';
import { RootState, increment } from '.';

function App(): JSX.Element {

  // 전통방식 - redux에서 state 꺼내오기
  const pick = useSelector((state: RootState) => state); //useSelector의 파라미터 타입을 지정해줘야 하는데, 미리 export 해두면 편함
  const dispatch: Dispatch = useDispatch();

  // 신규방식
  const pick2 = useSelector((state: RootState) => state) // useSelector 함수 사용하여 state 꺼냄. 콜백함수를 파라미터로 넣는다. 함수의 첫 파라미터는 항상 state가 됨.
  const dispatch2 = useDispatch(); // useDispatch 함수를 쓰면 쉽게 수정요청 가능


  // state 타입은  만들ㄹ 때 자동으로 할당되는데, 나중에 변화할 수 있는 경우 미리 지정
  const [user, setUser] = useState<string | null>('');

  // type assertion 문법 사용할 때 = as사용 <>는 컴포넌트로 오해할 수 있어서 리액트에서 사용 안 함. as 키워드 또한 타입이 100% 확실할 때만 사용.
  // 타입스크립트 쓴다고 리액트 개발ㄹ방식이 달라지는게 아니라 함수 변수 정의부분 타입지정을 할 수 있다는 것만 달라질 뿐.
  let code: any = 123;


  let box: JSX.Element = <div></div>
  let button: JSX.Element = <button></button>

  return (
    <div className="App">
      {pick2.counter1.count}
      <button onClick={() => {dispatch({type : 'increase'})}}>버튼</button>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(): JSX.Element {

  // state 타입은  만들ㄹ 때 자동으로 할당되는데, 나중에 변화할 수 있는 경우 미리 지정
  const [user, setUser]  = useState<string | null>('');

  // type assertion 문법 사용할 때 = as사용 <>는 컴포넌트로 오해할 수 있어서 리액트에서 사용 안 함. as 키워드 또한 타입이 100% 확실할 때만 사용.
  // 타입스크립트 쓴다고 리액트 개발ㄹ방식이 달라지는게 아니라 함수 변수 정의부분 타입지정을 할 수 있다는 것만 달라질 뿐.
  let code: any = 123;
  

  let box: JSX.Element = <div></div>
  let button: JSX.Element = <button></button>

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

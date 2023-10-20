import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';;
import { createStore } from 'redux';
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import exp from 'constants';


// 전통방식
interface Counter {
  count: number
}

const init: Counter = { count: 0 };

function reducer(state = init, action: any) {
  if (action.type === 'increase') {
    return { ...state, count: state.count + 1 }
  } else if (action.type === 'decrease') {
    return { ...state, count: state.count - 1 }
  } else {
    return init;
  }
}
const store = createStore(reducer);

// export type RootState = ReturnType<typeof store.getState>

// 새로운 방식
const init2  = { count: 0, user: 'kim'}

const counterSlice = createSlice({
  name: 'counter',
  initialState: init2,
  reducers: {
    increment (state) {
      state.count += 1
    },
    decrement (state) {
      state.count -= 1
    },
    incrementByAmount (state, action: PayloadAction<number>) {
      state.count += action.payload
    }
  }
})

let store2 = configureStore({
  reducer: {
    counter1: counterSlice.reducer
  }
})

// state타입을 export 해두는 건데 나중에 쓸 일 있음
export type RootState = ReturnType<typeof store2.getState>

// 수정방법 만든거 export
export let {increment, decrement, incrementByAmount} = counterSlice.actions

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store2}>
      <App />
    </Provider>
  </React.StrictMode>
);


import React, { useState } from 'react';
import './App.css';
import Numbers from './components/Numbers';

function App() {
  const [lottoNum, setLottoNum] = useState(['?','?','?','?','?','?']);

  function getLotto_num() {
    const num = [];
    const randomNum = [];
    setLottoNum([]); // 값 초기화
    
    // 로또 배열 생성
    for(let i = 1; i <= 45;i++) {
      num.push(i);
    }
    // 배열에서 랜덤 위치 추출
    for(let i = 1; i <= 6; i++){
      const r = Math.floor(Math.random() * num.length);
      const g = num.splice(r, 1);
      randomNum.push(g[0])
    }
    console.log(randomNum);
    setLottoNum(randomNum);
    console.log(lottoNum);
  }

  return (
    <div className="App">
      <Numbers lottoNum={lottoNum} />
      <div className="btn-container">
        <button onClick={ getLotto_num }>번호 생성하기</button>
      </div>
    </div>
  );
}

export default App;

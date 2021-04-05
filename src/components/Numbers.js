import React from "react";

export default function Numbers({ lottoNum }) {
  console.log(lottoNum)
  return (
    <div className='numbers'>
      {lottoNum.map((num, key) => {
        return (
          <div key={key} className="ball">{ num }</div>
        );
      })}
    </div>
  );
}

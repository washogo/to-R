import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  alert(`${count}です！`);

  return (
    <>
      <p>Counter:{count}</p>
      <input
        type="button"
        value="ボタンです"
        // onClick={() => setCount(count + 1)}
        onClick={() => setCount(prevCount => prevCount + 1)}
        /*上記２つは同じ挙動*/
      />
    </>
  );
};

export default Counter;
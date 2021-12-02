import React, { useState, useEffect } from 'react';

const Interval = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(count);
    }, 10000);
    
    return () => {
      clearInterval(timer)
    }
  }, [count]);

  return (
    <>
      <p>カウント：{count}</p>
      <input
        type="button"
        value="インタ-バル"
        onClick={() => setCount(10)}
      />
    </>
  )
};

export default Interval;
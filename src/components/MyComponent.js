import React, {useState, useCallback} from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const counter = (count) => {
    return setCount(count + 1);
  }
  /* コールバック関数なし */
  // const handleInput = (e) => {
  //   console.log(count);
  //   return <li>+{count}</li>
  // };

  /* コールバック関数あり */
  const handleInput = useCallback((e) => {
    console.log(count);
    return <li>+{count}</li>
  }, [count])

  return (
    <div>
      <p>カウント：{count}</p>
      <ul>
        {handleInput()}
      </ul>
      <input
        type="button"
        value="カウント"
        onClick={() => counter(count)}
      />
      <input
        type="button"
        defaultValue="コールバック関数"
        onClick={handleInput}
      />
    </div>
  );
};

export default MyComponent

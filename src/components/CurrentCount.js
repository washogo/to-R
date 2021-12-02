import React, {useRef, useState, useCallback} from 'react';

function CurrentCount() {
  /* useRefを用いた変数作成によりコンポーネントの再描画は起きない */
  const count = useRef(0);
  console.log("初めからレンダー")

  const countUp = useCallback(() => {
    count.current += 1
    console.log(count);
  }, [])

  const showLog = useCallback(() => {
    console.log(count.current)
  }, [])

  return(
    <>
      <button onClick={countUp}>カウントアップ</button>
      <button onClick={showLog}>コンソール</button>
    </>
  );

  
  /* countの値が変更する度にコンポーネントの再描画がある */
  // const [count, setCount] = useState(0);
  // console.log("初めからレンダー")

  // const countUp = useCallback(() => {
  //   setCount(prevCount => prevCount + 1)
  //   console.log("up");
  // }, [])

  // const showLog = useCallback(() => {
  //   console.log(count);
  // }, [count])

  // return(
  //   <>
  //     <p>{count}</p>
  //     <button onClick={countUp}>カウントアップ</button>
  //     <button onClick={showLog}>コンソール</button>
  //   </>
  // );
};

export default CurrentCount;

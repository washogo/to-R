import React, {useMemo, useState} from 'react';

/* timestampを日付に変換する */
// 再描画ごとに実行される
// const DateData = ({timestamp}) => {
//   const date = new Date(timestamp);
//   const dateString = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
//   console.log(dateString);
//   // YYYY年MM月DD日

//   return (
//     <>
//       <p>日付：{dateString}</p>
//     </>
//   )
// };

/* useMemoを使用する */
// 実行されるのは最初だけ
const DateData = ({timestamp}) => {
  const [count, setCount] = useState(0);
  const counter = (count) => {
    return setCount(count + 1);
  }

  const dateString = useMemo(() => {
    const date = new Date(timestamp);
    const day = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    console.log(day);
    return day;
    }, [timestamp]);

  return (
    <>
      <h1>カウント：{count}</h1>
      <input
        type="button"
        value="ボタン"
        onClick={() => counter(count)}
      />
      <p>日付：{dateString}</p>
    </>
  )
};

export default DateData;
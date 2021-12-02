import React, {useRef, useState, useCallback} from 'react';

function InputElement() {
  /* useRefを使用するとtext更新時のみ再描画が発生する */
  // const inputEl = useRef(null);

  // const [text,setText] = useState("");
  // console.log(text);

  // const handleClick = useCallback(()=>{
  //   setText(inputEl.current.value);
  //   console.log(inputEl.current.value);
  // },[])

  // return (
  //   <>
  //     <p>text : {text}</p>
  //     <input ref={inputEl} type="text" />
  //     <button onClick={handleClick}>set text</button>
  //   </>
  // )

  /* useRefを使用しないとtempText（フォーム内の内容）とtext（表示されるテキスト）の変更時に再描画される */
  const [tmpText,changeTmpText] = useState("")  
  const [text,changeText] = useState("")
  console.log(text);

  const handleClick = useCallback(()=>{
    changeText(tmpText)
    console.log(tmpText);
  },[tmpText])

  return (
    <>
      <p>text : {text}</p>
      <input
        value={tmpText}
        onChange={e => changeTmpText(e.target.value)}
        type="text"
      />
      <button onClick={handleClick}>set text</button>
    </>
  )
}

export default InputElement;

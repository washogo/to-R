import React, {useReducer, useCallback} from 'react'

const initialState = {
  firstCount: 0,
  secondCount: 100,
  error: 0
}

const reducer = (state, action) => {
  switch (action.type){
    case 'increment1':
      return {...state, firstCount: state.firstCount + action.value}
    case 'decrement1':
      return {...state, firstCount: state.firstCount - action.value}
    case 'increment2':
      return {...state, secondCount: state.secondCount + action.value}
    case 'decrement2':
      return {...state, secondCount: state.secondCount - action.value}
    case 'reset1':
      return {...state, firstCount:initialState.firstCount}
    case 'reset2':
      return {...state, secondCount:initialState.secondCount}
    case 'over1':
      const error1 = state.secondCount > 1000 ? 1 : 0
      return {...state, error:error1}
    case 'over2':
      const error2 = state.firstCount > 10 ? 2 : 0
      return {...state, error:error2}
    default:
      return state
    }
}

function DoubleCounter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const handleChange1 = useCallback(e=>{
    dispatch({type: 'over1'})
  }, [])
  const handleChange2= useCallback(e=>{
    dispatch({type: 'over2'})
  }, [])

  return (
    <>
      <h1 onChange={handleChange2} value={state.firstCount}>カウント１：{state.firstCount}</h1>
      {state.error === 2 && <p>増やしすぎです</p>}
      <div>
        <button onClick={() => dispatch({type: 'increment1', value: 1})}>1UP</button>
        <button onClick={() => dispatch({type: 'decrement1', value: 1})}>1DOWN</button>
        <button onClick={() => dispatch({type: 'reset1'})}>RESET!</button>
      </div>
      <h1 onChange={handleChange1}>カウント２：{state.secondCount}</h1>
      {state.error === 1 && <p>増やしすぎです</p>}
      <div>
        <button onClick={() => dispatch({type: 'increment2', value: 100})}>100UP</button>
        <button onClick={() => dispatch({type: 'decrement2', value: 100})}>100DOWN</button>
        <button onClick={() => dispatch({type: 'reset2'})}>RESET!</button>
      </div>
    </>
  )
}

export default DoubleCounter

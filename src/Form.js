import React, {useContext} from 'react';
import {SiteContext} from './App';

const Form = () => {
  const {state, dispatch} = useContext(SiteContext);
  return <input
      type="text"
      value={state.name}
      onChange={e => dispatch({
        type: 'CHANGE_NAME',
        payload: e.target.value
      })}
  />
}

export default Form;
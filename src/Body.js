import React, {useContext} from 'react';
import { SiteContext } from './App';

const Body = () => {
  const {state} = useContext(SiteContext);
  return <p>これは「{state.name}」の内容です</p>
}

export default Body;
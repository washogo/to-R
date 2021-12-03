import React, {useContext} from 'react';
import { SiteContext } from './App';

const Header = () => {
  const {state} = useContext(SiteContext);
  return <h1>{state.name}</h1>
};

export default Header;
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import ChildB from './ChildB';
import ChildC from './ChildC';
import { useState } from 'react';

function App() {


  console.log('App render start')


  return (
    <div className="App">
  <Parent  ChildC={<ChildC/>}>
    <ChildB/>
  </Parent>
  </div>
  );
}

export default App;

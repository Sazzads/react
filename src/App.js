import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';
import { useState } from 'react';


function App() {

  return (
    <div className="App">
      <Device name="upuphone" price="15000"></Device>
      <Watch></Watch>

    </div>
  );
}

export default App;

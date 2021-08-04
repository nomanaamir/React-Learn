import React, { useState, useEffect } from 'react';

import './App.css';

// components
import Header from './components/header/index';
import Footer from './components/footer/index';

function App() {
  const [name, setName] = useState(''); // hook


  const changeName = () => {
    setName('Hello world')
  }
 
  return (
    <div className="App">
      <Header name={name} />
      <Footer end='finish' />
      <button onClick={changeName}>
        Click me!
      </button>
    </div>
  );
}

export default App;

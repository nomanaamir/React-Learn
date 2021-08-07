import React, { useState, useEffect } from 'react';

import './App.css';

// components
import Header from './components/header/index';
import Footer from './components/footer/index';

function App() {
  const [name, setName] = useState('Test User');
  const [userId, setId] = useState('Test User');


  const changeName = () => {
    setName('Hanzalah')
  }

  const changeUser = () => {
    setId('Adeel')
  }

 
  return (
    <div className="App">
      <Header name={name} />
      <Footer userId={userId} />

      <button onClick={changeName}>
        For Header
      </button>

      <button onClick={changeUser}>
        For Footer
      </button>
    </div>
  );
}

export default App;

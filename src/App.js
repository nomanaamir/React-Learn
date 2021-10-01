import React, { useState, useEffect } from 'react';

import './App.css';

// components
import Card from './components/card/index';

function App() {

  const [user, setUser] = useState({
    name: 'RDJ',
    avatar: 'https://images.tribuneindia.com/cms/gall_content/2019/4/2019_4$largeimg15_Monday_2019_083425749.jpg',
    red: 'red',
    green: 'green',
    blue: 'blue'
  })

<<<<<<< Updated upstream
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
  const changeState = (obj) => {
    setUser(
      obj
    )
  }
  useEffect(() => {
    setTimeout(() => {
      setUser(
        {
          name: 'Nomam',
          avatar: 'https://avatars.githubusercontent.com/u/31151920?v=4',
          red: 'yellow',
          green: 'purple',
          blue: 'orange'
        }
      )
    }, 2000);
  }, []) // lifecycle, triggers when page load
  return (
    <div className="App">
      <Card sendUser={user} />

      <button onClick={() => changeState({
        name: 'Nomam',
        avatar: 'https://avatars.githubusercontent.com/u/31151920?v=4',
        red: 'yellow',
        green: 'purple',
        blue: 'orange'
      })}>
        View Noman's Profile
      </button>
      <button onClick={() => changeState({
        name: 'RDJ',
        avatar: 'https://images.tribuneindia.com/cms/gall_content/2019/4/2019_4$largeimg15_Monday_2019_083425749.jpg',
        red: 'red',
        green: 'green',
        blue: 'blue'
      })}>
        View RDJ's Profile
      </button>
    </div>
  );
}

export default App;

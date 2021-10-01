import React, { useState, useEffect } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   useParams
// } from "react-router-dom";
import './App.css';
// import firebase from "firebase";

import Signup from './pages/sign-up/sign-up';




// components
// import UserPage from './pages/user/index';
// import HomePage from './pages/home/index';


function App() {
useEffect(()=>{


  
},[])
  return (
    <div className="App">
  {/* //     <Router>
  //       <Route exact path="/" component={HomePage} />
  //       <Route path="/user/:id" component={UserPage} />
  //     </Router> */}

  <Signup/>
   </div>
  );
}


export default App;

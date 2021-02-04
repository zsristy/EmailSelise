import React from 'react';
import NavBar from './component/navbar'
import MySideBar from './component/sidebar'
import MyHeader from './component/header'

function App() {
  return (
    <div className="App">
        <MyHeader></MyHeader>
        <MySideBar></MySideBar>
        <NavBar></NavBar>
    </div>
  );
}

export default App;

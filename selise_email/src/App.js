import React from 'react';
import NavBar from './component/navbar'
import MySideBar from './component/sidebar'
import MyHeader from './component/header'
import Summary from './component/summary'

function App() {
  return (
    <div className="App">
        <MyHeader></MyHeader>
        <MySideBar></MySideBar>
        <NavBar></NavBar>
        <Summary></Summary>
    </div>
  );
}

export default App;

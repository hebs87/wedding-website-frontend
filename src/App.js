import React from 'react';
import './App.css';
import NavBarContainer from "./components/NavBar/NavBarContainer";
import MyProjectsExample from "./components/Carousel/Carousel";

const App = () => {
  return (
    <div className="App">
      <NavBarContainer/>
      <MyProjectsExample/>
    </div>
  );
}

export default App;

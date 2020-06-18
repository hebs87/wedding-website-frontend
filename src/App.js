import React from 'react';
import './App.css';
import NavBarContainer from "./components/NavBar/NavBarContainer";
import WeddingPage from "./pages/Wedding/Wedding";

const App = () => {
  return (
    <div className="App">
      <NavBarContainer/>
      <WeddingPage/>
    </div>
  );
}

export default App;

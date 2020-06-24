import React from 'react';
import './App.css';
import NavBarContainer from "./components/NavBar/NavBarContainer";
import WeddingPage from "./pages/Wedding/Wedding";
import Location from "./pages/Location/Location";

const App = () => {
  return (
    <div className="App">
      <NavBarContainer/>
      <WeddingPage/>
      {/*<Location/>*/}
    </div>
  );
}

export default App;

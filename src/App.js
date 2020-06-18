import React from 'react';
import './App.css';
import NavBarContainer from "./components/NavBar/NavBarContainer";
import Banner from "./components/Banner/Banner";
import OrangeTree from './static/assets/orange-tree.jpg';

const App = () => {
  return (
    <div className="App">
      <NavBarContainer/>
      <Banner
        imageUrl={OrangeTree}
        title={'Join us for our Sunshine State Wedding'}
        firstTextLine={'1 June, 2021'}
        secondTextLine={'Orlando, Florida'}
        button={'RSVP'}
      />
    </div>
  );
}

export default App;

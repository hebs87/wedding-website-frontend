import React from 'react';
import './App.css';
import MobileNavBar from "./components/NavBar/MobileNavBar";
import Banner from "./components/Banner/Banner";
import OrangeTree from './static/assets/orange-tree.jpg';
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="App">
      <div className='main-nav'>
        <NavBar/>
      </div>
      <div className="mobile-nav">
        <MobileNavBar/>
      </div>
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

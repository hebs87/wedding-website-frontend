import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import NavBarContainer from "./components/NavBar/NavBarContainer";
import FlashMessage from "./components/FlashMessage/FlashMessage";
import WeddingPage from "./pages/Wedding/Wedding";
import Location from "./pages/Location/Location";
import RSVP from "./pages/RSVP/RSVP";
import Footer from "./components/Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFlashMessage: false,
      attending: false,
    }
  }

  setShowFlashMessage = (showFlashMessage) => {
    this.setState({showFlashMessage});
    console.log(showFlashMessage);
  }

  setAttending = (attending) => {
    this.setState({attending})
    console.log(attending);
  }

  render() {
    const {showFlashMessage, attending} = this.state;
    return (
      <div className="App">
        <NavBarContainer/>
        {
          showFlashMessage &&
          <FlashMessage
            attending={attending}
            setShowFlashMessage={this.setShowFlashMessage}/>
        }
        <Route
          exact
          path="/"
          component={WeddingPage}
        />
        <Route
          exact
          path="/location"
          component={Location}
        />
        <Route
          exact
          path="/rsvp"
          render={
            props => <RSVP {...props} setShowFlashMessage={this.setShowFlashMessage} setAttending={this.setAttending}/>
          }
        />
        <Footer/>
      </div>
    );
  }
}

export default App;

import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import NavBarContainer from "./components/NavBar/NavBarContainer";
import WeddingPage from "./pages/Wedding/Wedding";
import Location from "./pages/Location/Location";
import RSVP from "./pages/RSVP/RSVP";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/Error";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFlashMessage: false,
      attending: false,
      hasError: true,
    }
  }

  render() {
    const {hasError} = this.state;

    return (
      <div className="App">
        {
          hasError &&
          <Error/>
        }
        {
          !hasError &&
          <Fragment>
            <NavBarContainer/>
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
              component={RSVP}
            />
            <Footer/>
          </Fragment>
        }
      </div>
    );
  }
}

export default App;

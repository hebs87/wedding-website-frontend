import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
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
      hasError: false,
    }
  }

  setErrorTrue = () => {
    this.setState({hasError: true});
  };

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
            <Switch>
              <Route
                exact
                path="/"
                render={props => <WeddingPage setErrorTrue={this.setErrorTrue} {...props}/>}
              />
              <Route
                exact
                path="/location"
                render={props => <Location setErrorTrue={this.setErrorTrue} {...props}/>}
              />
              <Route
                exact
                path="/rsvp"
                render={props => <RSVP setErrorTrue={this.setErrorTrue} {...props}/>}
              />
              <Route
                component={Error}
              />
            </Switch>
            <Footer/>
          </Fragment>
        }
      </div>
    );
  }
}

export default App;

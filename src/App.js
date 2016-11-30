import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { store } from './configureStore';
import { Provider } from 'react-redux';
import Flexbox from 'flexbox-react';

import './App.css';



import Notification from './components/Notification';
import Header from './components/Header';
import Footer from './components/Footer';

import TestComponent from './components/TestComponent';

import Pinger from './components/Pinger';


class App extends Component {

  render(){
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Flexbox flexDirection="column" minHeight="100vh">
            <Notification showError={true}/>
            <Header />
            <Flexbox flexGrow={1}>
              <TestComponent />
            </Flexbox>
            <Flexbox flexGrow={1} className="pinger">
              <Pinger />
            </Flexbox>
            <Footer />
          </Flexbox>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/
export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import { fetchUsers, enableApi } from '../users/actions';

import logo from '../logo.svg';

class TestComponent extends Component {

  componentDidMount(){
    this.props.fetchUsers()
  }

  apiToggle = () => this.props.enableApi()
  onClick = () => this.props.fetchUsers()

  render(){
    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RaisedButton label="Fetch" onClick={this.onClick} />
        <RaisedButton label="Enable" onClick={this.apiToggle} />
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    users:  state.usersReducer,
  };
}

export default connect(mapStateToProps, { fetchUsers, enableApi })(TestComponent);

import React, { Component } from 'react';
import { Card, CardActions } from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import Circle from './Circle';
import { spring } from 'react-motion';


class Pinger extends Component {

  state = {
    open: spring(0),
    closed: spring(100),
    bouncing: false,
  }

  handleButton = () => this.setState({bouncing: !this.state.bouncing})

  renderSpring = () => this.state.bouncing ? spring(0) : spring(100)

  render(){


    return (
      <Card>

        <Circle springVal={this.renderSpring()}/>

        <CardActions>
          <FlatButton label="Expand" onTouchTap={this.handleButton} />
        </CardActions>
      </Card>
    )
  }
}

export default Pinger;

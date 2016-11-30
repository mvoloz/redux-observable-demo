import React, { Component } from 'react';
import { Motion } from 'react-motion';
import '../App.css';

class Circle extends Component {




  render(){

    return (
      <Motion defaultStyle={{x: 0}} style={{x: this.props.springVal}}>
        {
          interpolatingStyle => {
            /*console.log(interpolatingStyle);*/
            return <div className="bouncingCircle" style={{top: interpolatingStyle.x}} />
          }
        }
      </Motion>
    )

  }
}


export default Circle;

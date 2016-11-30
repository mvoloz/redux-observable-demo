import React from 'react';
import logo from '../logo.svg';

const Logo = (props) => {

const spinner = () => props.spinning ? 'spinning' : ''

  return (
    <img src={logo} className={`App-logo ${spinner()}`} alt="logo" />
  )
}
export default Logo

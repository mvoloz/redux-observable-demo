import React from 'react';
import Flexbox from 'flexbox-react';
import AppBar from 'material-ui/AppBar';
import Logo from './Logo'

const Header = () => {

  const spinning = () => true

  return (
    <Flexbox element="header" height="80px">
      <AppBar
        title="RxJS Test"
        iconElementRight={<Logo spinning={spinning()}/>}
      />
    </Flexbox>
  )
}

export default Header;

import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

class Footer extends Component {

  state = {
    selectedIndex: undefined
  }

  select = (index) => this.setState({selectedIndex: index})

  render(){
    return (
      <Flexbox element="footer" height="60px">
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Recents"
            icon={recentsIcon}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Favorites"
            icon={favoritesIcon}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={nearbyIcon}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </Flexbox>
    )
  }
}
/*const Footer = () => {

  return (
    <Flexbox element="footer" height="60px">
      Footer
    </Flexbox>
  )
}*/

export default Footer;

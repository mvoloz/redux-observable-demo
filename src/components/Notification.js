import React, { Component } from 'react';
import { Card, CardHeader } from 'material-ui';
import { connect } from 'react-redux';


const styles = {
  error: {
    background: '#ff8700'
  }
}

class Notification extends Component {

  renderError = () => {
    if(this.props.notifications.showError){
      return (
        <Card style={styles.error}>
          <CardHeader
             title="No Network available"
             subtitle={this.props.notifications.errorMessage}
           />
        </Card>
      )
    }
    return <div></div>
  }

  render(){
    /*debugger;*/
    return this.renderError()
  }
}

/*export default Notification;*/

function mapStateToProps(state) {
  return {
    notifications:  state.notificationReducer,
  };
}

export default connect(mapStateToProps, { })(Notification);

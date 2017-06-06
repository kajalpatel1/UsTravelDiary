import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedState extends Component {
  render() {
    if (!this.props.usstate) {
      return <h3 className="statedetail">Which state do you wish to visit?<br/><br/><p> Please select a state to get more details</p></h3>;
    }

    return (
      <div className="statedetail1">
       
        <div className="h3">State: {this.props.usstate.name}</div>
       
        <div className="img-thumbnail"><img src={this.props.usstate.image.credit.url}  /></div>
         <div className="h3">Location: {this.props.usstate.image.location}</div>
         <div className="desc">Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    usstate: state.activeState
  };
}

export default connect(mapStateToProps)(SelectedState);

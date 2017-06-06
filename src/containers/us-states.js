import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectState } from '../actions/index';
import { bindActionCreators } from 'redux';


class UsStates extends Component {


  renderList() {

    return this.props.usstate.map((usstate) => {
      return (
        <li
          key={usstate.name}
          onClick={() => this.props.selectState(usstate)}
          className="list-group-item">
          {usstate.name}
        </li>
      );
    });
  }

  render() {
    return (
     <div>
     <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>

      </div>

    )
  }
}

function mapStateToProps(state) {

  return {
    usstate: state.usstate
  };
}


function mapDispatchToProps(dispatch) {

  return bindActionCreators({ selectState: selectState }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UsStates);

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';

const mapStateToProps = state => {
  return {
    content: state.home.content,
  }
};

const mapDispatchToProps = dispatch => ({
  loadContent: bindActionCreators(actions.loadContent, dispatch),
});

class Home extends React.Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          { this.props.content }
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

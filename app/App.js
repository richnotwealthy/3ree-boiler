import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Grid, Row } from 'react-flexbox-grid/lib/index';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import dataActions from './actions/data-actions';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
        </div>

        <Grid className="main">
          <Row center="md">
            <TodoList />
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return state || {};
}

function mapDispatchToProps(dispatch) {
  return {
    dataActions: bindActionCreators(dataActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { connect } from 'react-redux';
import { fetchValues, increment } from './actions/index';

class App extends Component {

  componentDidMount() {
    this.props.fetchValues();
  }

  render() {

    { }
    return (
      <div className="App">
        {this.props.counter.count}
        <button onClick={() => this.props.increment(this.props.counter.count)}>Increment </button>
      </div>
    );
  }
}



export default connect(state => ({ counter: state.counter }), { fetchValues, increment })(App);

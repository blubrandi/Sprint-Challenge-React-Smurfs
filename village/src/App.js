import React, { Component } from 'react';

import './App.css';
import axios from 'axios'
import { Route } from 'react-router-dom'

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Nav from './components/Nav'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ 
          smurfs: response.data})
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Route
            path='/add-smurf'
            render={() => <SmurfForm addSmurf={this.addSmurf} />}
          />
            <Route
            exact
            path='/'
            render={() => <Smurfs smurfs={this.state.smurfs} />}
          />
      </div>
    );
  }
}

export default App;

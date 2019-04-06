import React, { Component } from 'react';

import axios from 'axios'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = data => {
    axios
      .post('http://localhost:3333/smurfs', {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      })
      .then(response => {
        this.setState({
          name: '',
          age: '',
          height: ''
        })
      })
      .catch(err => console.log(err))
  }

  changeHandler = event => {
    this.setState({ 
      [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addSmurf(this.state)
  }

  putHandler = event => {
    event.preventdefault()
    axios
        .put("http://localhost:3333/smurfs/${id}", this.state.item)
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
          type='text'
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
          type='text'
            onChange={this.changeHandler}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
          type='text'
            onChange={this.changeHandler}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}


export default SmurfForm;

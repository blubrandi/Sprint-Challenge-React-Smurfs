import React, { Component } from 'react';

import axios from 'axios'

import styled from 'styled-components'

const FormContainer = styled.div`
  margin: 0 auto;
  max-width: 600px;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 80px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  input {
    padding: 20px;
    border: 0;
    border-radius: 5px;
    background-color: #0AA5EB;
    color: #fff;
    margin-bottom: 15px;
    width: 80%;
  }

  button {
    width: 200px;
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 20px;
    border: 2px solid #0AA5EB;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    color: #0AA5EB;
  }

  button:hover {
    background-color: #0AA5EB;
    color: #fff;
    -webkit-box-shadow: -1px 3px 16px 0px rgba(0,0,0,0.23);
    -moz-box-shadow: -1px 3px 16px 0px rgba(0,0,0,0.23);
    box-shadow: -1px 3px 16px 0px rgba(0,0,0,0.23);
  }

  h2 {
    padding-top: 40px;
  }

  placeholder {
    color: #fff;
  }
`

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      thumbnail: ''
    };
  }

  addSmurf = data => {
    axios
      .post('http://localhost:3333/smurfs', {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
        thumbnail: this.state.thumbnail
      })
      .then(response => {
        this.setState({
          name: '',
          age: '',
          height: '',
          thumbnail: ''
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

  render() {
    return (
      <FormContainer>
        <h2>Add Your Smurf to the Village!</h2>
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
          <input
          type='text'
            onChange={this.changeHandler}
            placeholder="Thumbnail Image URL"
            value={this.state.thumbnail}
            name="thumbnail"
          />
          <button type="submit">Add Smurf</button>
        </form>
      </FormContainer>
    );
  }
}


export default SmurfForm;

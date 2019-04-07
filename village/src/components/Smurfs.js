import React, { Component } from 'react';

import styled from 'styled-components'

import Smurf from './Smurf';

const SmurfContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 900px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }
`

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <SmurfContainer>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                thumbnail={smurf.thumbnail}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
              />
            );
          })}
        </SmurfContainer>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
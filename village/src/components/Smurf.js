import React from 'react';

import styled from 'styled-components'

const SmurfClass = styled.div`
  background-color: #fff;
  max-width: 400px;
  padding: 40px;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    max-width: 100px;
  }

  smurfInfoHolder {
    display: flex;
    flex-direction: column;
  }

`

const Smurf = props => {
  const { id } = props
  return (
    <SmurfClass>
      <div className="thumbnailHolder">
      <img src={props.thumbnail} alt={props.thumbnail} />
      </div>
      <div className="smurfInfoHolder">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => props.deleteSmurf(id)}>
        Delete Smurf?
      </button>
      </div>
    </SmurfClass>
  );
};

Smurf.defaultProps = {
  thumbnail: '',
  name: '',
  height: '',
  age: ''
};

export default Smurf;


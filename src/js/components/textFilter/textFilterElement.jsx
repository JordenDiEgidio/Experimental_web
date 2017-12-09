import React from 'react';

const textFilterElement = props => {
  const name = props[`name`];
  return (
    <p className='text-effect'>{name}</p>
  );

};

export default textFilterElement;

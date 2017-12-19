import React from 'react';
import {func, string} from "prop-types";
import {observer, inject} from "mobx-react";
const textFilterElement = ({name, setSelectedLabel}) => {
  // const name = props[`name`];
  const handleSelectedLabel = () => {
    setSelectedLabel(name);

  };

  return (
    <p onClick={handleSelectedLabel} className='text-effect'>{name}</p>
  );

};

textFilterElement.propTypes = {
  setSelectedLabel: func.isRequired,
  name: string.isRequired
};

export default inject(
  ({store}) => {
    return {setSelectedLabel: store.setSelectedLabel};
  }
)(
  observer(textFilterElement)
);

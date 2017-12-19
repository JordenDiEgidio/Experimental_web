import React from 'react';
import {observer, inject} from "mobx-react";
import {func, string} from "prop-types";

const textField = ({setSelectedLabel, selectedLabel}) => {

  const handleSetLabel = e => {
    setSelectedLabel(e.target.value);
  };
  return (
    <div>
      <h2>Custom label</h2>
      <input value={selectedLabel} onChange={handleSetLabel} type='text' />
    </div>
  );

};

textField.propTypes = {
  setSelectedLabel: func.isRequired,
  selectedLabel: string.isRequired,

};

export default inject(
  ({store}) => {
    return {
      setSelectedLabel: store.setSelectedLabel,
      selectedLabel: store.selectedLabel
    };
  }
)(
  observer(textField)
);

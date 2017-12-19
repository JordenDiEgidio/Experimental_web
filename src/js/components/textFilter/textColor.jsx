import React from 'react';
import {observer, inject} from "mobx-react";
import {func} from "prop-types";

const textColor = ({setSelectedColor}) => {
  const handleSelectedColor = e => {
    const color = e.target.dataset.color;
    console.log(`selected ${  color}`);
    setSelectedColor(color);
  };
  return (
    <div>
      <h2>Text colors</h2>
      <div className='color-group'>
        <div onClick={handleSelectedColor} data-color='red' className='text-color-red'></div>
        <div onClick={handleSelectedColor} data-color='blue' className='text-color-blue'></div>
        <div onClick={handleSelectedColor} data-color='green' className='text-color-green'></div>
        <div onClick={handleSelectedColor} data-color='yellow' className='text-color-yellow'></div>
      </div>
    </div>
  );

};

textColor.propTypes = {
  setSelectedColor: func.isRequired,
};

export default inject(
  ({store}) => {
    return {setSelectedColor: store.setSelectedColor};
  }
)(
  observer(textColor)
);

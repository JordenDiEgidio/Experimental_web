import React from 'react';
import {observer, inject} from "mobx-react";
import {func} from "prop-types";

const textColor = ({setSelectedColor}) => {
  // const handleSelectedColor = e => {
  //   const color = e.target.dataset.color;
  //   console.log(`selected ${  color}`);
  //   setSelectedColor(color);
  // };
  return (
    <div>
      <h2>Type your own text</h2>
      <form className='color-group'>
        <input type='text' />
        <input type='submit' />
      </form>
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

import React from 'react';
import {func, bool} from "prop-types";
import {observer, inject} from "mobx-react";

const canvasAdd = () => {
  return (
    <select>
      <option value='sepia'>Sepia</option>
      <option value='directionblur'>Directional blur</option>
    </select>
  );

};

canvasAdd.propTypes = {
  setCanvas: func.isRequired,
  drawImage: func.isRequired,
  screenshotTaken: bool.isRequired
};

export default inject(({store}) => {
  return {
    setCanvas: store.setCanvas,
    drawImage: store.drawImage,
    screenshotTaken: store.screenshotTaken
  };
})(observer(canvasAdd));

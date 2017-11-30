import React from 'react';
import {func, bool} from "prop-types";
import {observer, inject} from "mobx-react";

const canvasAdd = ({setCanvas, drawImage, screenshotTaken}) => {

  if (screenshotTaken === true) {
    console.log(`draw`);
    drawImage();
  }

  this.handledrawImage = e => {
    setCanvas(e);
  };

  setCanvas();

  return (
    <canvas id='canvas' width='700' height='500' ref={this.handledrawImage}></canvas>
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

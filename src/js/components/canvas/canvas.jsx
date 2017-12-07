import React from 'react';
import {func, bool} from "prop-types";
import {observer, inject} from "mobx-react";

const canvasAdd = ({setCanvas, drawImage, screenshotTaken}) => {

  const seriouslyCallback = Seriously => {
    const seriously = new Seriously();
    const target = seriously.target(`#canvas2`);
    const sepiafilter = seriously.effect(`sepia`);
    const src = seriously.source(`#canvas`);
    sepiafilter.source = src;
    target.source = sepiafilter;
    seriously.go();
  };

  this.filters = () => {
    require([
      `../../lib/effects/seriously`,
      `../../lib/effects/seriously.sepia`
    ], seriouslyCallback);
  };

  if (screenshotTaken === true) {
    console.log(`draw`);
    drawImage();
    this.filters();
  }

  this.handledrawImage = e => {
    setCanvas(e);
  };

  setCanvas();

  return (
    <div>
      <canvas id='canvas' className='canvas' width='700' height='500' ref={this.handledrawImage}></canvas>
      <canvas id='canvas2' width='700' height='500'></canvas>
    </div>
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

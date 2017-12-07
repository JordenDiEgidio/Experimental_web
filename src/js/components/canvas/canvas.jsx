import React from 'react';
import {func, bool, string} from "prop-types";
import {observer, inject} from "mobx-react";

const canvasAdd = ({setCanvas, drawImage, screenshotTaken, filter}) => {

  const seriouslyCallback = Seriously => {
    console.log(filter);
    const seriously = new Seriously();
    const target = seriously.target(`#canvas2`);
    const sepiafilter = seriously.effect(filter);
    //const sepiafilter = seriously.effect(`sepia`);
    const src = seriously.source(`#canvas`);
    sepiafilter.source = src;
    target.source = sepiafilter;
    seriously.go();
  };

  this.filters = () => {
    require([
      `../../lib/effects/seriously`,
      `../../lib/effects/seriously.sepia`,
      `../../lib/effects/seriously.directionblur`
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
  screenshotTaken: bool.isRequired,
  filter: string.isRequired
};

export default inject(({store}) => {
  return {
    setCanvas: store.setCanvas,
    drawImage: store.drawImage,
    screenshotTaken: store.screenshotTaken,
    filter: store.filter
  };
})(observer(canvasAdd));

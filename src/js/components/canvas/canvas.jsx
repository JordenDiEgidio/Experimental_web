import React from 'react';
import {func, bool, string, number} from "prop-types";
import {observer, inject} from "mobx-react";

const canvasAdd = ({setCanvas, setCanvas2, drawImage, screenshotTaken, filter, filterAmount}) => {

  const seriouslyCallback = Seriously => {
    console.log(filterAmount);
    const seriously = new Seriously();
    const target = seriously.target(`#canvas2`);
    const sepiafilter = seriously.effect(filter);
    //const sepiafilter = seriously.effect(`sepia`);
    const src = seriously.source(`#canvas`);
    sepiafilter.source = src;
    target.source = sepiafilter;
    sepiafilter.amount = filterAmount;
    seriously.go();
  };

  this.filters = () => {
    console.log(filter);
    require([
      `../../lib/effects/seriously`,
      `../../lib/effects/seriously.${filter}`
      // `../../lib/effects/seriously.directionblur`,
      // `../../lib/effects/seriously.emboss`,
    ], seriouslyCallback);
  };

  if (screenshotTaken === true) {
    drawImage();
    this.filters();
  }

  this.handledrawImage = e => {
    setCanvas(e);
  };

  this.handledrawSprite = e => {
    setCanvas2(e);
  };

  setCanvas();
  setCanvas2();

  return (
    <div>
      <canvas id='canvas' className='canvas' width='700' height='500' ref={this.handledrawImage}></canvas>
      <canvas id='canvas2' width='700' height='500'></canvas>
      <canvas id='canvas3' width='700' height='500' ref={this.handledrawSprite}></canvas>
    </div>
  );

};

canvasAdd.propTypes = {
  setCanvas: func.isRequired,
  drawImage: func.isRequired,
  screenshotTaken: bool.isRequired,
  filter: string.isRequired,
  filterAmount: number.isRequired,
  setCanvas2: func.isRequired
};

export default inject(({store}) => {
  return {
    setCanvas: store.setCanvas,
    drawImage: store.drawImage,
    screenshotTaken: store.screenshotTaken,
    filter: store.filter,
    filterAmount: store.filterAmount,
    setCanvas2: store.setCanvas2
  };
})(observer(canvasAdd));

import React from 'react';
import {bool, string, number} from "prop-types";

import {observer, inject} from 'mobx-react';



const canvas2 = ({screenshotTaken, canvasSrc, textColor, selectedLabel, filter, filterAmount}) => {
  let canvasWidth = 0;
  let canvasHeight = 0;

  const seriouslyCallback = Seriously => {
    console.log(filterAmount);
    const seriously = new Seriously();
    const target = seriously.target(this.canvas123);
    const sepiafilter = seriously.effect(filter);
    //const sepiafilter = seriously.effect(`sepia`);
    const src = seriously.source(canvasSrc);
    sepiafilter.source = src;
    target.source = sepiafilter;
    sepiafilter.amount = filterAmount;
    seriously.go();
  };

  this.filters = () => {
    //console.log(filter);
    require([
      `../../lib/effects/seriously`,
      `../../lib/effects/seriously.${filter}`
      // `../../lib/effects/seriously.directionblur`,
      // `../../lib/effects/seriously.emboss`,
    ], seriouslyCallback);
  };

  const drawImage = () => {
    const ctx = this.canvas123.getContext(`2d`);
    const img = new Image();

    img.onload = function() {
      console.log(`load`);
      ctx.drawImage(img, 0, 0);
      ctx.font = `48px bold`;
      ctx.textAlign = `center`;
      ctx.fillStyle = textColor;
      ctx.fillText(selectedLabel, 250, 50);
    };
    img.src = canvasSrc;
  };

  const myImage = new Image();
  myImage.src = `../../assets/sprites/rain_sprite2.png`;
  this.ctx;



  if (screenshotTaken) {
    drawImage();
    this.filters();

    canvasWidth = 500;
    canvasHeight = 400;
    console.log(canvasWidth, canvasHeight);
  }

  return (
    <div className='testcanvas'>
      <canvas width={canvasWidth} height={canvasHeight} ref={c => { this.canvas123 = c; }}></canvas>
    </div>
  );
};

canvas2.propTypes = {

  screenshotTaken: bool.isRequired,
  canvasSrc: string.isRequired,
  selectedLabel: string.isRequired,
  textColor: string.isRequired,
  filter: string.isRequired,
  filterAmount: number.isRequired,


};

export default inject(({store}) => {
  return {

    screenshotTaken: store.screenshotTaken,
    canvasSrc: store.canvasSrc,
    selectedLabel: store.selectedLabel,
    textColor: store.textColor,
    selectedColor: store.selectedColor,
    shiftImage: store.shiftImage,
    frameWidth: store.frameWidth,
    frameHeight: store.frameHeight,
    currentFrame: store.currentFrame,
    totalFrames: store.totalFrames,
    filter: store.filter,
    filterAmount: store.filterAmount,

  };
})(observer(canvas2));

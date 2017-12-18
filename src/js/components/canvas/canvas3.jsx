import React from 'react';
import {bool, string} from "prop-types";

import {observer, inject} from 'mobx-react';


// const canvas2 = ({screenshotTaken, canvasSrc, textColor, selectedLabel, frameWidth, frameHeight, currentFrame, totalFrames, shiftImage}) => {

const canvas2 = ({screenshotTaken, canvasSrc, textColor, selectedLabel}) => {

  // const drawImage = () => {
  //   const img = new Image();
  //
  //   img.onload = function() {
  //     console.log(`load`);
  //     ctx.drawImage(img, 0, 0);
  //     ctx.font = `48px bold`;
  //     ctx.textAlign = `center`;
  //     ctx.fillStyle = textColor;
  //     ctx.fillText(selectedLabel, 250, 50);
  //   };
  //   img.src = canvasSrc;
  // };

  const myImage = new Image();
  myImage.src = `../../assets/sprites/rain_sprite2.png`;
  this.ctx;

  // this.handleDrawSprite = e => {
  //   this.ctx = e.getContext(`2d`);
  //   limitLoop(this.drawSprite, 5);
  // };
  //
  // this.drawSprite = () => {
  //   this.ctx.clearRect(0, 0, 226, 300);
  //   this.ctx.drawImage(myImage, shiftImage, 0, frameWidth, frameHeight, 120, 25, frameWidth, frameHeight);
  //   shiftImage += frameWidth + 1;
  //   if (currentFrame === totalFrames) {
  //     shiftImage = 0;
  //     currentFrame = 0;
  //   }
  //   currentFrame ++;
  // };

  // const limitLoop = function (fn, fps) {
  //   let then = new Date().getTime();
  //   fps = fps || 5;
  //   const interval = 1000 / fps;
  //
  //   return (function loop() {
  //     requestAnimationFrame(loop);
  //     const now = new Date().getTime();
  //     const delta = now - then;
  //
  //     if (delta > interval) {
  //       then = now - (delta % interval);
  //       fn();
  //     }
  //   }(0));
  // };


  const testing = e => {
    const img = new Image();
    const ctx = e.getContext(`2d`);

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

  return (
    <div>Hello Canvas2 {screenshotTaken}
      <canvas  width='500' height='400' ref={c => { this.canvas123 = c; }}></canvas>
    </div>
  );
};

canvas2.propTypes = {

  screenshotTaken: bool.isRequired,
  canvasSrc: string.isRequired,
  selectedLabel: string.isRequired,
  textColor: string.isRequired,
  // shiftImage: number.isRequired,
  // frameWidth: number.isRequired,
  // frameHeight: number.isRequired,
  // currentFrame: number.isRequired,
  // totalFrames: number.isRequired



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
    totalFrames: store.totalFrames

  };
})(observer(canvas2));

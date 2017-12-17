import React from 'react';
import {bool, number} from "prop-types";
import {observer, inject} from "mobx-react";

const animation = ({screenshotTaken, shiftImage, frameWidth, frameHeight, currentFrame, totalFrames}) => {

  const myImage = new Image();
  myImage.src = `../../assets/sprites/rain_sprite2.png`;
  this.ctx;

  this.handleDrawSprite = e => {
    this.ctx = e.getContext(`2d`);
    limitLoop(this.drawSprite, 5);
  };

  this.drawSprite = () => {
    this.ctx.clearRect(0, 0, 226, 300);
    this.ctx.drawImage(myImage, shiftImage, 0, frameWidth, frameHeight, 120, 25, frameWidth, frameHeight);
    shiftImage += frameWidth + 1;
    if (currentFrame === totalFrames) {
      shiftImage = 0;
      currentFrame = 0;
    }
    currentFrame ++;
  };

  const limitLoop = function (fn, fps) {
    let then = new Date().getTime();
    fps = fps || 5;
    const interval = 1000 / fps;

    return (function loop() {
      requestAnimationFrame(loop);
      const now = new Date().getTime();
      const delta = now - then;

      if (delta > interval) {
        then = now - (delta % interval);
        fn();
      }
    }(0));
  };

  if (screenshotTaken) {
    return (
      <canvas id='canvas3' width='500' height='400' ref={this.handleDrawSprite}></canvas>
    );
  } else {
    return (
      <p></p>
    );
  }
};

  // const myImage = new Image();
  // myImage.src = `../../assets/sprites/rain_sprite2.png`;
  // //console.log(shift);
  //
  // this.drawSprite = () => {
  //   const canvas = this.canvas2;
  //   const ctx = canvas.getContext(`2d`);
  //
  //   //console.log(this.frameWidth);
  //   myImage.onload = function() {
  //     ctx.clearRect(0, 0, 226, 300); //this.shiftt, 0, this.frameWidth, this.frameHeight, 120, 25, this.frameWidth, this.frameHeight)
  //     //console.log(shiftImage);
  //   //   ctx.drawImage(myImage, shiftImage, 0, frameWidth, frameHeight, 120, 25, frameWidth, frameHeight);
  //   //   shiftImage += frameWidth + 1;
  //   //   //console.log(shiftImage);
  //   //   //console.log(ctx.drawImage(myImage, this.shiftt, 0, this.frameWidth, this.frameHeight, 120, 25, this.frameWidth, this.frameHeight));
  //   //   if (currentFrame === totalFrames) {
  //   //     shiftImage = 0;
  //   //     currentFrame = 0;
  //   //   }
  //   //   currentFrame ++;
  //   // };
  //   };
  //
  //
  //   this.handleDrawSprite = () => {
  //     console.log(`anim canvas`);
  //   };



animation.propTypes = {
  screenshotTaken: bool.isRequired,
  shiftImage: number.isRequired,
  frameWidth: number.isRequired,
  frameHeight: number.isRequired,
  currentFrame: number.isRequired,
  totalFrames: number.isRequired
};

export default inject(({store}) => {
  return {
    screenshotTaken: store.screenshotTaken,
    shiftImage: store.shiftImage,
    frameWidth: store.frameWidth,
    frameHeight: store.frameHeight,
    currentFrame: store.currentFrame,
    totalFrames: store.totalFrames
  };
})(observer(animation));
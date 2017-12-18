import React from 'react';
import {bool, number, string} from "prop-types";
import {observer, inject} from "mobx-react";

const animation = ({screenshotTaken, shiftImage, frameWidth, frameHeight, currentFrame, totalFrames, sprite}) => {

  //myImage.src = `../../assets/sprites/thunder_sprite.png`;
  //myImage.src = `../../assets/sprites/rain_sprite2.png`;
  //myImage.src = `../../assets/sprites/sun_sprite.png`;
  console.log(`de sprite is :${  sprite}`);
  this.ctx;

  this.handleDrawSprite = e => {
    console.log(this.animationCanvas);
    console.log(e);
    this.ctx = this.animationCanvas.getContext(`2d`);
    limitLoop(this.drawSprite, 5);
  };

  this.drawSprite = () => {
    const myImage = new Image();
    // myImage.src = `../../assets/sprites/${sprite}_sprite.png`;
    myImage.src = `../../assets/sprites/sun_sprite.png`;

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
      <div>
        <canvas id='canvas3' width='500' height='400' className='hiddencanvas' ref={c => { this.animationCanvas = c; }}></canvas>
        <button onClick={this.handleDrawSprite}>show smart animation</button>
      </div>
    );
  } else {
    return (
      <p></p>
    );
  }
};

animation.propTypes = {
  screenshotTaken: bool.isRequired,
  shiftImage: number.isRequired,
  frameWidth: number.isRequired,
  frameHeight: number.isRequired,
  currentFrame: number.isRequired,
  totalFrames: number.isRequired,
  sprite: string.isRequired
};

export default inject(({store}) => {
  return {
    screenshotTaken: store.screenshotTaken,
    shiftImage: store.shiftImage,
    frameWidth: store.frameWidth,
    frameHeight: store.frameHeight,
    currentFrame: store.currentFrame,
    totalFrames: store.totalFrames,
    sprite: store.sprite
  };
})(observer(animation));

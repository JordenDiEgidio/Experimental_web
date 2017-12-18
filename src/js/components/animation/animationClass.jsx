import React, {Component} from 'react';
import {number} from "prop-types";
import {observer, inject} from "mobx-react";

// const animation = ({screenshotTaken, shiftImage, frameWidth, frameHeight, currentFrame, totalFrames, sprite}) => {

export class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  limitLoop(fn, fps) {
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
  }

  componentDidMount() {
    console.log(`alles geladen`);
    this.limitLoop(this.drawSprite, 5);

  }

  drawSprite() {
    const myImage = new Image();
    // myImage.src = `../../assets/sprites/${this.props.sprite}_sprite.png`;
    myImage.src = `../../assets/sprites/sun_sprite.png`;

    this.ctx = document.getElementById(`canvas3`);

    this.ctx.clearRect(0, 0, 226, 300);
    this.ctx.drawImage(myImage, this.props.shiftImage, 0, this.props.frameWidth, this.props.frameHeight, 120, 25, this.props.frameWidth, this.props.frameHeight);
    this.props.shiftImage += this.props.frameWidth + 1;
    if (this.props.currentFrame === this.props.totalFrames) {
      this.props.shiftImage = 0;
      this.props.currentFrame = 0;
    }
    this.props.currentFrame ++;
  }


  render() {

  //myImage.src = `../../assets/sprites/thunder_sprite.png`;
  //myImage.src = `../../assets/sprites/rain_sprite2.png`;
  //myImage.src = `../../assets/sprites/sun_sprite.png`;
    // console.log(`de sprite is :${  this.props.sprite}`);

    return (
      <canvas id='canvas3' className='hiddencanvas' width='500' height='400' ref={c => { this.animationCanvas = c; }}></canvas>
    );

  }
}

Animation.propTypes = {
  // screenshotTaken: bool.isRequired,
  shiftImage: number.isRequired,
  frameWidth: number.isRequired,
  frameHeight: number.isRequired,
  currentFrame: number.isRequired,
  totalFrames: number.isRequired,
  // sprite: string.isRequired
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
})(observer(Animation));

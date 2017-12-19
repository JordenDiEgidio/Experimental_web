import React from 'react';
import {bool, string, number, func, object} from "prop-types";
import {observer, inject} from 'mobx-react';
import gifshot from 'gifshot';

const canvas2 = ({screenshotTaken, canvasSrc, textColor, selectedLabel, filter, filterAmount, addGifFrame, gifFrames}) => {
  let canvasWidth = 0;
  let canvasHeight = 0;

  const seriouslyCallback = Seriously => {
    if (!this.seriously) {
      this.seriously = new Seriously();
      console.log(`new seriously`);
    }

    if (!this.target) {
      this.target = this.seriously.target(this.canvasfilter);
    }
    // const target = this.seriously.target(this.canvasfilter);
    const sepiafilter = this.seriously.effect(filter);

    if (!this.src) {
      this.src = this.seriously.source(this.canvas123);
    }
    //  const src = this.seriously.source(this.canvas123);
    sepiafilter.source = this.src;
    this.target.source = sepiafilter;
    sepiafilter.amount = filterAmount;
    this.seriously.go();
    combinecanvas();
  };

  this.filters = () => {
    require([
      `../../lib/effects/seriously`,
      `../../lib/effects/seriously.${filter}`
    ], seriouslyCallback);
  };

  const combinecanvas = () => {
    const can2 = document.getElementById(`canvas2`);
    const can3 = document.getElementById(`canvas3`);

    if (!this.ctx) {
      this.ctx = this.finalCanvas.getContext(`2d`);
      console.log(`getContext`);
    }
    addGifFrame(this.finalCanvas.toDataURL());
    this.ctx.clearRect(0, 0, 226, 300);
    this.ctx.drawImage(can2, 0, 0);
    this.ctx.drawImage(can3, 0, 0);
    this.ctx.drawImage(can3, 100, 0);
    this.ctx.drawImage(can3, 200, 0);
    this.ctx.font = `48px bold`;
    this.ctx.textAlign = `center`;
    this.ctx.fillStyle = textColor;
    this.ctx.fillText(selectedLabel, 250, 300);

    requestAnimationFrame(combinecanvas);
  };

  const drawImage = () => {
    const ctx = this.canvas123.getContext(`2d`);
    const img = new Image();
    img.onload = function() {
      console.log(`load`);
      ctx.drawImage(img, 0, 0);
    };
    img.src = canvasSrc;
  };

  const myImage = new Image();
  myImage.src = `../../assets/sprites/rain_sprite2.png`;
  this.ctx;

  this.handleClick = () => {
    const gifshotArray = gifFrames.slice(- 60);

    gifshot.createGIF({
      images: [
        gifshotArray[0],
        gifshotArray[1],
        gifshotArray[2],
        gifshotArray[3],
        gifshotArray[4],
        gifshotArray[5],
        gifshotArray[6],
        gifshotArray[7],
        gifshotArray[8],
        gifshotArray[9],
        gifshotArray[10],
        gifshotArray[11],
        gifshotArray[12],
        gifshotArray[13],
        gifshotArray[14],
        gifshotArray[15],
        gifshotArray[16],
        gifshotArray[17],
        gifshotArray[18],
        gifshotArray[19],
        gifshotArray[20],
        gifshotArray[21],
        gifshotArray[22],
        gifshotArray[23],
        gifshotArray[24],
        gifshotArray[25],
        gifshotArray[26],
        gifshotArray[27],
        gifshotArray[28],
        gifshotArray[29],
        gifshotArray[30],
        gifshotArray[31],
        gifshotArray[32],
        gifshotArray[33],
        gifshotArray[34],
        gifshotArray[35],
        gifshotArray[36],
        gifshotArray[37],
        gifshotArray[38],
        gifshotArray[39],
        gifshotArray[40],
      ],
    }, function(obj) {
      if (!obj.error) {
        const image = obj.image,
          animatedImage = document.createElement(`img`);
        animatedImage.src = image;
        document.body.appendChild(animatedImage);
      }
    });
  };


  if (screenshotTaken) {
    drawImage();
    this.filters();

    canvasWidth = 500;
    canvasHeight = 400;
  }

  if (screenshotTaken) {
    return (
      <div className='testcanvas'>
        <canvas id='canvas1' className='hiddencanvas' width={canvasWidth} height={canvasHeight} ref={c => { this.canvas123 = c; }}></canvas>
        <canvas id='canvas2' className='hiddencanvas' width={canvasWidth} height={canvasHeight} ref={c => { this.canvasfilter = c; }}></canvas>
        <canvas id='allcanvases' width={canvasWidth} height={canvasHeight} ref={c => { this.finalCanvas = c; }}></canvas>
        <a className='big-button' onClick={this.handleClick}>Download a snapshot</a>
      </div>
    );
  } else {
    return (
      <div className='testcanvas'>
        <canvas id='canvas1' className='hiddencanvas' width={canvasWidth} height={canvasHeight} ref={c => { this.canvas123 = c; }}></canvas>
        <canvas id='canvas2' className='hiddencanvas' width={canvasWidth} height={canvasHeight} ref={c => { this.canvasfilter = c; }}></canvas>
        <canvas id='allcanvases' width={canvasWidth} height={canvasHeight} ref={c => { this.finalCanvas = c; }}></canvas>
      </div>
    );
  }

};

canvas2.propTypes = {

  screenshotTaken: bool.isRequired,
  canvasSrc: string.isRequired,
  selectedLabel: string.isRequired,
  textColor: string.isRequired,
  filter: string.isRequired,
  filterAmount: number.isRequired,
  addGifFrame: func.isRequired,
  gifFrames: object.isRequired


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
    addGifFrame: store.addGifFrame,
    gifFrames: store.gifFrames

  };
})(observer(canvas2));

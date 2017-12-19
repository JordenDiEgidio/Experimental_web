import React from 'react';
import {bool, string, number, func, object} from "prop-types";
import {observer, inject} from 'mobx-react';
import gifshot from 'gifshot';

const canvas2 = ({screenshotTaken, canvasSrc, textColor, selectedLabel, filter, filterAmount, addGifFrame, gifFrames}) => {
  let canvasWidth = 0;
  let canvasHeight = 0;

  const seriouslyCallback = Seriously => {
  //  console.log(filterAmount);
    const seriously = new Seriously();
    const target = seriously.target(this.canvasfilter);
    const sepiafilter = seriously.effect(filter);
    //const sepiafilter = seriously.effect(`sepia`);
    const src = seriously.source(this.canvas123);
    sepiafilter.source = src;
    target.source = sepiafilter;
    sepiafilter.amount = filterAmount;
    seriously.go();
    combinecanvas();
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

  const combinecanvas = () => {
    //const can1 = document.getElementById(`canvas1`);
    const can2 = document.getElementById(`canvas2`);
    const can3 = document.getElementById(`canvas3`);

    const ctx = this.finalCanvas.getContext(`2d`);
    addGifFrame(this.finalCanvas.toDataURL());

    //console.log(can1);
    // console.log(can2);
    // console.log(can3);
    // console.log(ctx);
    ctx.clearRect(0, 0, 226, 300);
    ctx.drawImage(can2, 0, 0);
    //ctx.globalAlpha = 0.2;
    //ctx.fillStyle = `rgba(0, 0, 200, 0)`;
    ctx.drawImage(can3, 0, 0);
    ctx.drawImage(can3, 100, 0);
    ctx.drawImage(can3, 200, 0);
    ctx.font = `48px bold`;
    ctx.textAlign = `center`;
    ctx.fillStyle = textColor;
    ctx.fillText(selectedLabel, 250, 300);



    requestAnimationFrame(combinecanvas);

  };

  const drawImage = () => {
    const ctx = this.canvas123.getContext(`2d`);
    const img = new Image();
    // ctx.drawImage(img, 0, 0);

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
    const gifshotArray = gifFrames.slice(- 10);

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

      ],
    }, function(obj) {
      if (!obj.error) {
        const image = obj.image,
          animatedImage = document.createElement(`img`);
        animatedImage.src = image;
        document.body.appendChild(animatedImage);
      }
    });

    // const url = this.finalCanvas.toDataURL(``);
    // console.log(url);
    // const link = document.createElement(`a`);
    // link.download = `Gif`;
    // link.href = url;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    //delete link;
  };


  if (screenshotTaken) {
    drawImage();
    this.filters();

    canvasWidth = 500;
    canvasHeight = 400;
    console.log(canvasWidth, canvasHeight);
  }

  return (
    <div className='testcanvas'>
      <canvas id='canvas1' className='hiddencanvas' width={canvasWidth} height={canvasHeight} ref={c => { this.canvas123 = c; }}></canvas>
      <canvas id='canvas2' className='hiddencanvas' width={canvasWidth} height={canvasHeight} ref={c => { this.canvasfilter = c; }}></canvas>
      <canvas id='allcanvases' width={canvasWidth} height={canvasHeight} ref={c => { this.finalCanvas = c; }}></canvas>
      <a className='big-button' onClick={this.handleClick}>Download a snapshot</a>
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

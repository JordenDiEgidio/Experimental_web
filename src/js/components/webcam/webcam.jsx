import React from 'react';
import Webcam from 'react-webcam';
import {func, bool} from "prop-types";
import {observer, inject} from "mobx-react";

//test
const webcamAdd = ({setCanvasSrc, drawImage, drawSprite, screenshotTakenswitch, screenshotTaken, setStoreImgSource}) => {

  this.imageSrc;

  this.setRef = webcam => {
    this.webcam = webcam;
  };

  this.setImage = imageSrc => {
    this.imageSrc = imageSrc;
  };

  this.handleScreenshot = () => {
    screenshotTakenswitch();
    const imageSrc = this.webcam.getScreenshot();
    //remove datatype and base64 from string to get only the content we need
    const slicedImageSrc = imageSrc.slice(23, imageSrc.length);
    setCanvasSrc(imageSrc);
    setStoreImgSource(slicedImageSrc);
    drawImage();
    //console.log(update);
    //update();
  };
  if (screenshotTaken) {
    window.requestAnimationFrame(drawSprite);
  }

  if (screenshotTaken) {
    return (
      <p></p>
    );
  } else {
    return (
      <div>
        <button onClick={this.handleScreenshot}>take screenshot</button>
        <Webcam
          audio={false}
          height={700}
          screenshotFormat='image/webp'
          ref={this.setRef}
          width={700}
        />
      </div>
    );
  }
};

webcamAdd.propTypes = {
  setCanvasSrc: func.isRequired,
  drawImage: func.isRequired,
  screenshotTakenswitch: func.isRequired,
  setStoreImgSource: func.isRequired,
  screenshotTaken: bool.isRequired,
  drawSprite: func.isRequired
};

export default inject(({store}) => {
  return {
    drawImage: store.drawImage,
    screenshotTakenswitch: store.screenshotTakenswitch,
    setCanvasSrc: store.setCanvasSrc,
    screenshotTaken: store.screenshotTaken,
    setStoreImgSource: store.setStoreImgSource,
    drawSprite: store.drawSprite
  };
})(observer(webcamAdd));

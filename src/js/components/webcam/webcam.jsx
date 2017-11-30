import React from 'react';
import Webcam from 'react-webcam';
import {func} from "prop-types";
import {observer, inject} from "mobx-react";

//test
const webcamAdd = ({setCanvasSrc, drawImage, screenshotTakenswitch}) => {

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
    // const slicedImageSrc = imageSrc.slice(23, imageSrc.length);
    setCanvasSrc(imageSrc);
    drawImage();
  };

  return (
    <div>
      <Webcam
        audio={false}
        height={700}
        screenshotFormat='image/webp'
        ref={this.setRef}
        width={700}
      />
      <button onClick={this.handleScreenshot}>take screenshot</button>
    </div>
  );

};

webcamAdd.propTypes = {
  setCanvasSrc: func.isRequired,
  drawImage: func.isRequired,
  screenshotTakenswitch: func.isRequired
};

export default inject(({store}) => {
  return {
    drawImage: store.drawImage,
    screenshotTakenswitch: store.screenshotTakenswitch,
    setCanvasSrc: store.setCanvasSrc
  };
})(observer(webcamAdd));

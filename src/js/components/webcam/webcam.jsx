import React from 'react';
import Webcam from 'react-webcam';
import {string, func} from "prop-types";
import {observer, inject} from "mobx-react";

const webcamAdd = ({storeImgSource, setStoreImgSource}) => {

  this.imageSrc;

  this.setRef = webcam => {
    this.webcam = webcam;
  };

  this.setImage = imageSrc => {
    this.imageSrc = imageSrc;
    console.log(this.imageSrc);
  };

  this.handleScreenshot = () => {
    const imageSrc = this.webcam.getScreenshot();
    // this.imageSrc = imageSrc;

    setStoreImgSource(imageSrc);
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

      <img src={storeImgSource} ref={this.setImage} height='100' width='150' />

    </div>
  );

};

webcamAdd.propTypes = {
  storeImgSource: string.isRequired,
  setStoreImgSource: func.isRequired
};

export default inject(({store}) => {
  return {
    storeImgSource: store.storeImgSource,
    setStoreImgSource: store.setStoreImgSource
  };
})(observer(webcamAdd));

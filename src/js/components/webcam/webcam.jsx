import React from 'react';
import Webcam from 'react-webcam';
import {string, func} from "prop-types";
import {observer, inject} from "mobx-react";


const webcamAdd = ({storeImgSource, setStoreImgSource, test}) => {

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
    //remove datatype and base64 from string to get only the content we need
    const slicedImageSrc = imageSrc.slice(23, imageSrc.length);
    //console.log(slicedImageSrc);
    setStoreImgSource(imageSrc);
    test(slicedImageSrc);

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
  setStoreImgSource: func.isRequired,
  test: func.isRequired
};

export default inject(({store}) => {
  return {
    storeImgSource: store.storeImgSource,
    test: store.test,
    setStoreImgSource: store.setStoreImgSource
  };
})(observer(webcamAdd));

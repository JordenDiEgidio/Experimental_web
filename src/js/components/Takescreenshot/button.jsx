import React from 'react';
import {func} from "prop-types";
import {observer, inject} from "mobx-react";

const Takescreenshot = ({screenshotTakenswitch, setCanvasSrc, setStoreImgSource, drawImage}) => {
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

  return (
    <a className='big-button' onClick={this.handleScreenshot}>take screenshot</a>
  );
};

Takescreenshot.propTypes = {
  setCanvasSrc: func.isRequired,
  drawImage: func.isRequired,
  screenshotTakenswitch: func.isRequired,
  setStoreImgSource: func.isRequired,
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
})(observer(Takescreenshot));

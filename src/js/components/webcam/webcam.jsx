import React from 'react';
import Webcam from 'react-webcam';

const webcamAdd = () => {
  return (
    <Webcam
      audio={false}
      height={700}
      screenshotFormat='image/jpeg'
      width={700}
    />
  );

};

webcamAdd.propTypes = {
};

export default webcamAdd;

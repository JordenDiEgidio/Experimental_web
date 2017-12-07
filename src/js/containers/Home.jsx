import React from 'react';
import {inject, observer} from 'mobx-react';
import Webcam from '../components/webcam/webcam.jsx';
import Canvas from '../components/canvas/canvas.jsx';
import {bool} from 'prop-types';

const Home = ({screenshotTaken}) => {

  console.log(screenshotTaken);


  return (
    <div>
      <Webcam />
      <Canvas />
    </div>
  );
};

Home.propTypes = {
  screenshotTaken: bool.isRequired,
};

export default inject(
  ({store}) => {
    return {screenshotTaken: store.screenshotTaken};
  }
)(
  observer(Home)
);

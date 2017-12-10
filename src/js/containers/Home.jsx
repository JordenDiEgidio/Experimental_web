import React from 'react';
import {inject, observer} from 'mobx-react';
import Webcam from '../components/webcam/webcam.jsx';
import Canvas from '../components/canvas/canvas.jsx';
import Textfilter from '../components/textFilter/textFilter.jsx';
import Dropdown from '../components/Dropdown/Dropdown.jsx';
import Slider from '../components/Dropdown/slider.jsx';
import {bool} from 'prop-types';

const Home = () => {

  return (
    <div>
      <Textfilter />
      <Webcam />
      <Canvas />
      <Dropdown />
      <Slider />

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

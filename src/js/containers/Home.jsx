import React from 'react';
import {inject, observer} from 'mobx-react';
import Webcam from '../components/webcam/webcam.jsx';
import Canvas from '../components/canvas/canvas.jsx';
import Textfilter from '../components/textFilter/textFilter.jsx';
import Dropdown from '../components/Dropdown/Dropdown.jsx';
import Slider from '../components/Dropdown/slider.jsx';
// import Takescreenshot from '../components/Takescreenshot/button.jsx';

import {bool} from 'prop-types';

const Home = () => {

  return (
    <main>
      <h1>The Gifmaker</h1>
      <div className='gif-generator'>
        <div className='image-frame'>
          <Webcam />
        </div>
        <div className='manipulation'>
          <Textfilter />
        </div>
      </div>
      <Canvas />
      <Dropdown />
      <Slider />
    </main>
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

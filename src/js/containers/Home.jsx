import React from 'react';
import {inject, observer} from 'mobx-react';
import Webcam from '../components/webcam/webcam.jsx';
// import Canvas from '../components/canvas/canvas.jsx';
import Canvas2 from '../components/canvas/canvas2.jsx';
import Animation from '../components/animation/animation.jsx';
import Textfilter from '../components/textFilter/textFilter.jsx';
// import Dropdown from '../components/Dropdown/Dropdown.jsx';
// import Slider from '../components/Dropdown/slider.jsx';
// import Takescreenshot from '../components/Takescreenshot/button.jsx';

import {bool} from 'prop-types';

const Home = ({screenshotTaken}) => {
  if (screenshotTaken) {
    console.log(`het eerste`);
    return (
      <main className='gif-generator'>
        <h1 className='title'>The Gifmaker</h1>
        <Canvas2 />
        <Textfilter />

        <Animation />


      </main>
    );
  } else {
    console.log(`het tweede`);
    return (
      <main className='gif-generator'>
        <h1 className='title'>The Gifmaker</h1>
        <Canvas2 />
        <Webcam />

      </main>
    );
  }

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

import React from 'react';
import {inject, observer} from 'mobx-react';
import Webcam from '../components/webcam/webcam.jsx';
import Canvas2 from '../components/canvas/canvas2.jsx';
import Animation from '../components/animation/animation.jsx';
import Textfilter from '../components/textFilter/textFilter.jsx';


import {bool} from 'prop-types';

const Home = ({screenshotTaken}) => {
  if (screenshotTaken) {
    return (
      <main className='gif-generator'>
        <h1 className='title'>The smart Gifmaker</h1>
        <Animation />
        <Canvas2 />
        <Textfilter />
      </main>
    );
  } else {
    return (
      <main className='gif-generator'>
        <h1 className='title'>The smart Gifmaker</h1>
        <Canvas2 />
        <Webcam />
        <p className='intro'>Make a smart gif based on your emotions using machine learning, you can also use WebGL filters to make it even more stunning. Made with ReactJS, Google Vision, Seriously.js and Gifshot. <br /> <br /> Browser requirements : Google Chrome, JavaScript, WebGL, Webcam</p>

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

import React from 'react';
import {bool, func, string} from "prop-types";
import {observer, inject} from "mobx-react";

const dropdown = ({setAmount, screenshotTaken, filter}) => {

  this.sliderAmount;

  this.handleSliders = () => {
    console.log(this.sliderAmount.value);
    setAmount(this.sliderAmount.value);
  };

  this.handleAmount = e => {
    this.sliderAmount = e;
    console.log(e);
    //console.log(filterAmount);
  };

  if (!screenshotTaken || filter === `sepia` || filter === `ascii` || filter === `checkerboard` || filter === `daltonize`
    || filter === `dither` || filter === `edge` || filter === `exposure` || filter === `invert` || filter === `falsecolor`
    || filter === `hue-saturation` || filter === `kaleidoscope` || filter === `mirror` || filter === `nightvision` || filter === `opticalflow`
  || filter === `panorama` || filter === `pixelate` || filter === `polar` || filter === `ripple` || filter === `scanlines` || filter === `sketch`
|| filter === `tone` || filter === `whitebalance`) {
    return (
      <p></p>
    );
  } else {
    return (
      <form>
        <h2>Filter intensity</h2>
        <input type='range' onChange={this.handleSliders} ref={this.handleAmount} max='1' min='0.10' step='0.01' />
      </form>
    );
  }
};

dropdown.propTypes = {
  screenshotTaken: bool.isRequired,
  setAmount: func.isRequired,
  filter: string.isRequired
};

export default inject(({store}) => {
  return {
    screenshotTaken: store.screenshotTaken,
    setAmount: store.setAmount,
    filter: store.filter
  };
})(observer(dropdown));

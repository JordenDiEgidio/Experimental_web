import React from 'react';
import {bool, func} from "prop-types";
import {observer, inject} from "mobx-react";

const dropdown = ({screenshotTaken, setFilter}) => {

  this.dropdownSelect;

  this.handleFilters = e => {
    this.dropdownSelect = e;
  };

  this.handleChange = () => {
    const selectedFilter = this.dropdownSelect.options[this.dropdownSelect.selectedIndex].value;
    setFilter(selectedFilter);
  };

  if (!screenshotTaken) {
    return (
      <p></p>
    );
  } else {
    return (
      <form>
        <select ref={this.handleFilters} onChange={this.handleChange}>
          <optgroup label='adjustable'>
            <option value='directionblur'>Directional blur</option>
            <option value='bleach-bypass'>bleach-bypass</option>
            <option value='blur'>blur</option>
            <option value='colorcomplements'>colorcomplements</option>
            <option value='emboss'>emboss</option>
            <option value='fader'>fader</option>
            <option value='filmgrain'>filmgrain</option>
            <option value='noise'>noise</option>
            <option value='tvglitch'>tvglitch</option>
            <option value='vibrance'>vibrance</option>
            <option value='vignette'>vignette</option>
          </optgroup>
          <optgroup label='overlays'>
            <option value='linear-transfer'>normal</option>
            <option value='sepia'>Sepia</option>
            <option value='ascii'>ascii</option>
            <option value='checkerboard'>checkerboard</option>
            <option value='daltonize'>daltonize</option>
            <option value='dither'>dither</option>
            <option value='edge'>edge</option>
            <option value='exposure'>exposure</option>
            <option value='falsecolor'>falsecolor</option>
            <option value='hue-saturation'>hue-saturation</option>
            <option value='invert'>invert</option>
            <option value='kaleidoscope'>kaleidoscope</option>
            <option value='mirror'>mirror</option>
            <option value='nightvision'>nightvision</option>
            <option value='opticalflow'>opticalflow</option>
            <option value='panorama'>panorama</option>
            <option value='pixelate'>pixelate</option>
            <option value='polar'>polar</option>
            <option value='ripple'>ripple</option>
            <option value='scanlines'>scanlines</option>
            <option value='sketch'>sketch</option>
            <option value='tone'>tone</option>
            <option value='whitebalance'>whitebalance</option>
          </optgroup>
        </select>
      </form>
    );
  }
};

dropdown.propTypes = {
  screenshotTaken: bool.isRequired,
  setFilter: func.isRequired
};

export default inject(({store}) => {
  return {
    setCanvas: store.setCanvas,
    drawImage: store.drawImage,
    screenshotTaken: store.screenshotTaken,
    setFilter: store.setFilter
  };
})(observer(dropdown));

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
          <option value='sepia'>Sepia</option>
          <option value='directionblur'>Directional blur</option>
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

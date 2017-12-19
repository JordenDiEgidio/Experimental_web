import React from 'react';
import {object} from "prop-types";
import {observer, inject} from "mobx-react";
import TextfilterElement from './textFilterElement.jsx';
import TextField from './textField.jsx';
import TextColor from './textColor.jsx';
import Dropdown from '../dropdown/dropdown.jsx';
import Slider from '../dropdown/slider.jsx';
const textFilter = ({labels}) => {

  if (labels.length === 0) return (
    <div className='no-labels'>no labels yet</div>
  );

  return (
    <div className='edit'>
      <TextField />
      <h2>Smart captions</h2>
      {
        labels.map(
          t => (
            <TextfilterElement
              name={t.toString()}
              key={t.toString()}
            />
          )
        )
      }
      <TextColor />
      <Dropdown />
      <Slider />

    </div>
  );

};

textFilter.propTypes = {
  labels: object.isRequired

};

export default inject(
  ({store}) => {
    return {labels: store.labels};
  }
)(
  observer(textFilter)
);

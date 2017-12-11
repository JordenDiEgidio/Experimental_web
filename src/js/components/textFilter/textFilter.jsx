import React from 'react';
import {object} from "prop-types";
import {observer, inject} from "mobx-react";
import TextfilterElement from './textFilterElement.jsx';
import TextColor from './textColor.jsx';

const textFilter = ({labels}) => {

  if (labels.length === 0) return (
    <div className='no-labels'>no labels yet</div>
  );

  return (
    <div className='filters'>
      <div className='text-filter'>
        <h2>Text filters</h2>
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

      </div>
      <div className='color-filter'>
        <TextColor />
      </div>
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

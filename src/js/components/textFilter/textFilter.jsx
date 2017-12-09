import React from 'react';
import {string} from "prop-types";
import {observer, inject} from "mobx-react";
import TextfilterElement from './textFilterElement.jsx';
import TextColor from './textColor.jsx';

const textFilter = () => {

  return (
    <div className='filters'>
      <div className='text-filter'>
        <h2>Text filters</h2>
        <TextfilterElement />
        <TextfilterElement />
        <TextfilterElement />
      </div>
      <div className='color-filter'>
        <TextColor />
      </div>
    </div>
  );

};

textFilter.propTypes = {
  name: string.isRequired

};

export default inject(({store}) => {
  return {
    name: store.name

  };
})(observer(textFilter));

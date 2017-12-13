import React from 'react';
import {bool} from "prop-types";

import {observer, inject} from 'mobx-react';



const canvas2 = ({screenshotTaken}) => {

  const drawImage = () => {
    const ctx = this.canvas123.getContext(`2d`);
    const img = new Image();
    const selectedLabel = this.selectedLabel;
    const textColor = this.textColor;
    img.onload = function() {
      console.log(`load`);
      ctx.drawImage(img, 0, 0);
      ctx.font = `48px bold`;
      ctx.textAlign = `center`;
      ctx.fillStyle = textColor;
      ctx.fillText(selectedLabel, 250, 50);
    };
    img.src = this.canvasSrc;
  };

  if (screenshotTaken) {
    drawImage();
  }

  return (
    <div>Hello Canvas2 {screenshotTaken}
      <canvas ref={c => { this.canvas123 = c; }}></canvas>
    </div>
  );
};

canvas2.propTypes = {

  screenshotTaken: bool.isRequired,

};

export default inject(({store}) => {
  return {

    screenshotTaken: store.screenshotTaken,

  };
})(observer(canvas2));

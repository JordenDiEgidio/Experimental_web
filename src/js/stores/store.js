import {observable, action} from 'mobx';
import visionAPI from '../lib/api/vision';

class Store {
  constructor() {
    // this.myImage = new Image();
    // this.myImage.src = `../../assets/sprites/rain_sprite2.png`;
  }

  @observable
  name = `GIF generator`

  @observable
  textColor = `#FF0000`

  @observable
  sprites = `../../assets/sprites/rain_cloud/rain_sprite2.png`;

  @observable
  labels = [`test`, `test2`, `test3`]

  @observable
  selectedLabel = `Deviner`

  @observable
  textColor = `red`

  @observable
  screenshotTaken = false;

  @observable
  canvas = ``;

  @observable
  canvas2 = ``;

  @observable
  filter = `linear-transfer`;

  @observable
  filterAmount = 0;

  @observable
  shiftImage = 0;

  @observable
  frameWidth = 99;

  @observable
  frameHeight = 226;

  @observable
  totalFrames = 10;

  @observable
  currentFrame = 0;

  @action
  setFilter = selection => {
    this.filter = selection;
  }

  @action
  setAmount = Amount => {
    this.filterAmount = Amount;
  }

  @action
  screenshotTakenswitch = () => {
    this.screenshotTaken = !this.screenshotTaken;
  }

  @action
  setCanvas = e => {
    this.canvas = e;
  }

  @action
  setCanvas2 = e => {
    this.canvas2 = e;
  }

  @action
  setStoreImgSource = src => {
    this.storeImgSource = src;
  }

  @action
  setCanvasSrc = imageSrc => {
    this.canvasSrc = imageSrc;
  }

  @action
  setSelectedLabel = selectedLabel => {
    this.selectedLabel = selectedLabel;
  }

  @action
  setSelectedColor = selectedColor => {
    this.selectedColor = selectedColor;
  }

  @action
  drawImage = () => {
    const canvas = this.canvas;
    const ctx = canvas.getContext(`2d`);
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
    console.log(this.sprites);
    img.src = this.canvasSrc;
  }

  // @action
  // drawSprite = () => {
  //   const canvas = this.canvas2;
  //   const ctx = canvas.getContext(`2d`);
  //
  //   const myImage = new Image();
  //   myImage.src = `../../assets/sprites/rain_sprite2.png`;
  //
  //   let shiftImage = this.shiftImage;
  //   const frameWidth = this.frameWidth;
  //   const frameHeight = this.frameHeight;
  //   const totalFrames = this.totalFrames;
  //   let currentFrame = this.currentFrame;
  //   //console.log(this.frameWidth);
  //   myImage.onload = function() {
  //     ctx.clearRect(0, 0, 226, 300); //this.shiftt, 0, this.frameWidth, this.frameHeight, 120, 25, this.frameWidth, this.frameHeight)
  //     //console.log(shiftImage);
  //     ctx.drawImage(myImage, shiftImage, 0, frameWidth, frameHeight, 120, 25, frameWidth, frameHeight);
  //     shiftImage += frameWidth + 1;
  //     //console.log(shiftImage);
  //     //console.log(ctx.drawImage(myImage, this.shiftt, 0, this.frameWidth, this.frameHeight, 120, 25, this.frameWidth, this.frameHeight));
  //     if (currentFrame === totalFrames) {
  //       shiftImage = 0;
  //       currentFrame = 0;
  //     }
  //     currentFrame ++;
  //   };
  // }

  @action
  update = () => {

  };

  @action
  test = image => {
    visionAPI.read(image)
      // .then(data => console.log(data.responses[0].labelAnnotations));
      .then(data => this.addLabels(data.responses[0].labelAnnotations));

  }

  @action
  addLabels = (...data) => {
    data[0].forEach(d => {
      // console.log(d);
      // console.log(d.description);
      this.labels.push(d.description);
    });

  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;

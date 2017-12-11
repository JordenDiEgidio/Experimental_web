import {observable, action} from 'mobx';
import visionAPI from '../lib/api/vision';

class Store {

  @observable
  name = `GIF generator`

  @observable
  textColor = `#FF0000`

  @observable
  sprites = `../../assets/sprites/rain_cloud/rain_sprite2.png`;

  @observable
  labels = [`test`]

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

  @action
  setFilter = selection => {
    this.filter = selection;
    console.log(this.filter);
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
  drawImage = () => {
    const canvas = this.canvas;
    const ctx = canvas.getContext(`2d`);
    const img = new Image();
    img.onload = function() {
      console.log(`load`);
      ctx.drawImage(img, 0, 0);
      // ctx.font = `48px bold`;
      // ctx.fillText(`I'm very emotional`, 10, 50);
    };
    console.log(this.sprites);
    img.src = this.canvasSrc;
  }

  @action
  drawSprite = () => {
    console.log(`drawing`);
    let shift = 0;
    const frameWidth = 100;
    const frameHeight = 226;
    const totalFrames = 24;
    let currentFrame = 1;
    const canvas = this.canvas2;
    const ctx = canvas.getContext(`2d`);
    const sprite = new Image();

    sprite.onload = function() {
      ctx.clearRect(120, 25, 300, 300);
      ctx.drawImage(sprite, shift, 0, frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
      shift += frameWidth + 1;
      if (currentFrame === totalFrames) {
        shift = 0;
        currentFrame = 1;
      }
      currentFrame ++;
    };
    sprite.src = this.sprites;
    //console.log(currentFrame);
    //this.update();
  }

  @action
  update = () => {
    this.requestAnimationFrame(this.drawSprite);
  }

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

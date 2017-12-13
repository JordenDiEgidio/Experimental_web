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

  constructor() {
    this.myImage = new Image();
    this.myImage.src = `/assets/sprites/rain_sprite2.png`;
  }

  shiftt = 0;
  constframeWidth = 100;
  frameHeight = 226;
  totalFrames = 24;
  currentFrame = 0;

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
    //console.log(`drawing`)
    const canvas = this.canvas2;
    const ctx = canvas.getContext(`2d`);

    //console.log(this.m yImage);

    this.myImage.onload = function() {
      console.log(`loaded`);
      ctx.clearRect(0, 0, 226, 300);
      ctx.drawImage(this.myImage, this.shiftt, 0, this.frameWidth, this.frameHeight, 120, 25, this.frameWidth, this.frameHeight);
      this.shiftt += this.frameWidth + 1;
      if (this.currentFrame === this.totalFrames) {
        this.shiftt = 0;
        this.currentFrame = 0;
      }

      this.currentFrame ++;
    };
    requestAnimationFrame(this.drawSprite);
    //console.log(currentFrame);
    //this.update();
  }

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

const log = () => {
  console.log(`requestAnimation`);
};

window.requestAnimationFrame(log);

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;

import {observable, action} from 'mobx';
import visionAPI from '../lib/api/vision';

class Store {

  @observable
  name = `GIF generator`

  @observable
  textColor = `#FF0000`

  @observable
  labels = [`test`]

  @observable
  screenshotTaken = false;

  @observable
  canvasSrc = `../assets/images/Placeholder.jpg`;

  @observable
  canvas = ``;

  @observable
  filter = `sepia`;

  @action
  setFilter = selection => {
    this.filter = selection;
    console.log(this.filter);
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
    img.src = this.canvasSrc;
    this.test(this.storeImgSource);
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

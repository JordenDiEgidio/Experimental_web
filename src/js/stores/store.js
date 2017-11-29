import {observable, action} from 'mobx';
import visionAPI from '../lib/api/vision';

class Store {

  @observable
  name = `GIF generator`

  @observable
  storeImgSource = `../assets/images/Placeholder.jpg`;

  @action
  setStoreImgSource = src => {
    this.storeImgSource = src;
  }

  @action
  test = image => {
    visionAPI.read(image)
      .then(data => console.log(data));
  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;

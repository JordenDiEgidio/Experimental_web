import {observable, action} from 'mobx';

class Store {

  @observable
  name = `GIF generator`

  @observable
  storeImgSource = ``;

  @action
  setStoreImgSource = src => {
    this.storeImgSource = src;
  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;

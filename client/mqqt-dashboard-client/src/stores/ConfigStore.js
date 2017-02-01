import { EventEmitter } from "events";

import dispatcher from "../dispatcher";
import setCookie from "../util/setCookie"

class ConfigStore extends EventEmitter {
  constructor() {
    super()
    this.colors = {};
  }

  handleActions(action) {
    // warnung für kein default case ausschalten
    // eslint-disable-next-line

    switch(action.type) {
      case "TEST_CONFIG_STORE":
        console.log("configStore");
        break;
    }
  }
}

const configStore = new ConfigStore();
dispatcher.register(configStore.handleActions.bind(configStore));

export default configStore;

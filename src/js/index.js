import '../css/index.css';
import { stateManager } from './@shared/models/StateManager';
import { Subway } from './subway';
import { STATE_KEY } from './subway/constants/constants';

class App {
  run() {
    this.mountChildComponents();
  }

  mountChildComponents() {
    this.subway = new Subway();
  }
}

window.addEventListener('load', () => {
  const app = new App();
  const id = window.location.hash.replace('#', '');

  stateManager[STATE_KEY.ROUTE].set(id);
  app.run();
});

window.addEventListener('hashchange', () => {
  const id = window.location.hash.replace('#', '');

  stateManager[STATE_KEY.ROUTE].set(id);
});

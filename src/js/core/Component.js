export default class Component extends HTMLElement {
  $target;
  $state;
  constructor() {
    super();
    this.setup();
    this.setEvent();
    this.render();
  }
  setup() {}
  template() {
    return "";
  }
  render() {
    this.innerHTML = this.template();
  }
  renderAdd(position, html) {
    this.insertAdjacentHTML(position, html);
  }
  setEvent() {}
  setState(newState) {
    console.log(newState);
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}

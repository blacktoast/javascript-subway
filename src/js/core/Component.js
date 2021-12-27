export default class Component extends HTMLElement {
  $target;
  $state;
  $props;
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
  setProps(newProps) {
    this.$props = newProps;
  }

  setEvent() {}
  setState(newState) {
    console.log(newState);
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}

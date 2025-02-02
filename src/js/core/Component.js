export default class Component extends HTMLElement {
  $target;
  $state;
  $props;
  $value;
  constructor() {
    super();
    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}
  template(props = null) {
    return "";
  }

  render() {
    this.innerHTML = this.template(this.$props);
  }
  setProps() {
    console.log(
      [...this.attributes].map((e) => {
        let newProps = { [e.name]: e.value };
        this.$props = { ...this.$props, ...newProps };
      })
    );
    console.log(this.$props);
    //  this.render();
  }
  setValue(value) {
    this.$value = value;
    this.render();
  }

  addEvent(eventType, selector, callback) {
    const children = [...this.querySelectorAll(selector)];
    // selector에 명시한 것 보다 더 하위 요소가 선택되는 경우가 있을 땐
    // closest를 이용하여 처리한다.
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);
    console.log("Ev     ", this, callback);
    this.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
  setEvent() {}

  setState(newState) {
    console.log(newState);
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}

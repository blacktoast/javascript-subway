export default class Components extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = this.getTemplate();
  }

  getTemplate() {}

  connectedCallback() {}

  disconnectedCallback() {}

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {}
}

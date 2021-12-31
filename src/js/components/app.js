import Component from "../core/Component.js";
import { Nav } from "./header.js";

export default class App extends Component {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log(this);
  }
  setup() {
    this.$props = {
      route: "",
    };
  }

  template() {
    let tag = this.$props.route || "";
    let tmp = `<div class="d-flex flex-col">
              <div class="d-flex justify-center">
                <img src="src/images/subway_emoji.png" width="200" />
              </div>
              <p class="mt-0 text-center">
                지하철 노선도 앱을 사용하기 위해서는 로그인이 필요할껄요? 필요합니다.
              </p>
            </div>`;
    return `
      <div class="d-flex justify-center mt-5 w-100">
        <div class="w-100">
          <main-nav class="my-4">${"at"}</main-nav>
          <main class="mt-10 d-flex justify-center">
          ${tag ? `<${tag}></${tag}>` : tmp}
            <main-login class="d-none"></main-login>
            <main-lines class="d-none"></main-lines>
            <main-sections class="d-none"></main-sections>
            <main-stations class="d-none"></main-stations>
          </main>
        </div>
      </div>
`;
  }
}

customElements.define("main-app", App);

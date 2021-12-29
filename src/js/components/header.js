import Component from "../core/Component.js";
import { localStore } from "../utils/localStore.js";
import { getRouteName, routingTable } from "../utils/route.js";

export class Nav extends Component {
  constructor() {
    super();
  }
  getRoutingDate() {}
  setup() {
    this.$props = getRoutingDate();
  }
  template() {
    return hearderTemplate(this.$props);
  }
  setEvent() {
    this.addEvent("click", ".menu", ({ target }) => {
      let menu = target.dataset.menu;
      console.log(target.dataset.menu);
      let routeName = getRouteName(menu);
      let props = {
        route: routeName,
      };
      document.querySelector("main-app").setProps(props);
    });
  }
}

function getRoutingDate() {
  let tmp;
  if (localStore.isLogin()) {
    tmp = [
      {
        Route: "stations",
        name: "역관리",
      },
      {
        Route: "stations",
        name: "역관리",
      },
      {
        Route: "stations",
        name: "역관리",
      },
      {
        Route: "stations",
        name: "역관리",
      },
      {
        Route: "stations",
        name: "역관리",
      },
    ];
  }
  tmp = [{ Route: "login", name: "👤 로그인" }];
  return tmp;
}

export function hearderTemplate(navigation) {
  console.log(navigation);
  return `
    <a href="/" class="text-black">
  <h1 class="text-center font-bold">🚇 지하철 노선도</h1>
</a>
<nav class="d-flex justify-center flex-wrap menuNav">
${navigation
  .map((e) => {
    return getNavButtonTemplate(e);
  })
  .join("")}
</nav>
  `;
}
export function getNavButtonTemplate({ Route, name }) {
  return `
<button class="btn bg-white shadow mx-1 menu" data-menu="${Route}"> ${name}</button>
 
  `;
}

customElements.define("main-nav", Nav);

import Component from "../core/Component.js";
import { localStore } from "../utils/localStore.js";
import { getRouteName, routingTable } from "../utils/route.js";

export class Nav extends Component {
  constructor() {
    super();
  }
  getRoutingDate() {}
  setup() {
    this.$state = getRoutingDate();
  }
  template() {
    let state = this.$state;
    return hearderTemplate(state);
  }
  setEvent() {
    this.addEvent("click", ".menu", ({ target }) => {
      let menu = target.dataset.menu;
      console.log(target.dataset.menu);
      let routeName = getRouteName(menu);
      let value = {
        route: routeName,
      };
      document.querySelector("main-app").setValue(value);
    });
  }
}

function getRoutingDate() {
  let tmp;
  if (localStore.isLogin()) {
    tmp = [
      {
        Route: "stations",
        name: "🚉 역 관리",
      },
      {
        Route: "line",
        name: "🛤️ 노선 관리",
      },
      {
        Route: "section",
        name: "🔁 구간 관리",
      },
      {
        Route: "map",
        name: "🗺️ 전체 보기",
      },
      {
        Route: "search",
        name: "🔎 길 찾기",
      },
      {
        Route: "logout",
        name: "로그아웃",
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

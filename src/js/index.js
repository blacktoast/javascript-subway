import Login from "./components/pages/login.js";
import SingUp from "./components/pages/singup.js";
import test from "./utils/test.js";
import App from "./components/app.js";

Login;
const headerTemplate = `
<a href="/" class="text-black">
  <h1 class="text-center font-bold">🚇 지하철 노선도</h1>
</a>
<nav class="d-flex justify-center flex-wrap menuNav">
    <button class="btn bg-white shadow mx-1 menu" data-menu="stations">🚉 역 관리</button>
    <button class="btn bg-white shadow mx-1 menu"  data-menu="line"  >🛤️ 노선 관리</button>
    <button class="btn bg-white shadow mx-1 menu" data-menu="section">🔁 구간 관리</button>
    <button class="btn bg-white shadow mx-1 menu" data-menu="map"  >🗺️ 전체 보기</button>
    <button class="btn bg-white shadow mx-1 menu" data-menu="search" >🔎 길 찾기</button>
    <button class="btn bg-white shadow mx-1 menu " data-menu="login" >👤 로그인</button>
</nav>`;

document.querySelector("#app").innerHTML = "<main-app></main-app>";
document.querySelector("header").innerHTML = headerTemplate;
document.querySelector(".menuNav").addEventListener("click", function (e) {
  let menu = e.target.dataset.menu;
  console.log(e.target.dataset.menu);
  history.pushState({ data: menu }, "title을 pushState로", `/pages/${menu}`);
  console.log(window.location.pathname);
  document.querySelector(
    "main"
  ).innerHTML = `<main-login class="d-none"></main-login>`;
});
window.addEventListener("popstate", function () {
  console.log(history.state);
});

window.addEventListener("locationchange", () => {
  console.log(window.location.pathname);
});

test();
const route = {
  "/pages/login": "main-login",
  "/pages/lines": "main-lines",
  "/pages/sections ": "main-sections",
  "/pages/stations": "main-stations",
  "/pages/map": "main-map",
  "/pages/singup": "main-singup",
};

function routePage(pathname) {}

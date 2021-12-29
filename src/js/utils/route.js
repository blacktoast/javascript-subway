export const routingTable = {
  "/pages/login": "main-login",
  "/pages/lines": "main-lines",
  "/pages/sections ": "main-sections",
  "/pages/stations": "main-stations",
  "/pages/map": "main-map",
  "/pages/signup": "main-signup",
};
export function getRouteName(menu) {
  history.pushState({ data: menu }, "title을 pushState로", `/pages/${menu}`);
  let pathname = window.location.pathname;
  console.log(pathname);
  return routingTable[pathname];
}

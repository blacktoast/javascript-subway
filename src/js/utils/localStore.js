import { LOCAL_KEY } from "./constante.js";

export let localStore = {
  singUp({ id, password }) {
    console.log(hash(password));
  },
  Login({ id, password }) {
    let flag = false;
    let users = getItem(LOCAL_KEY.SIGNUP);
    [...users].map((user) => {
      if (user.id === id && user.password === password) {
        setItem(LOCAL_KEY.LOGIN_AUTH, id);
      }
    });
  },
  isLogin() {
    return getItem(LOCAL_KEY.LOGIN_AUTH);
  },
};

function hash(password) {
  let t = [...password].map((e, i) => e.charCodeAt(0) * (100 - i)).join("");
  t = parseInt(t).toString(16);
  return t;
}

function getItem(key) {
  return JSON.stringify(localStorage.getItem(key)) || "";
}
function setItem(key, item) {
  localStore.setItem(key, JSON.parse(item));
}

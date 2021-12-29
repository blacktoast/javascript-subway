import { localStore } from "./localStore.js";

export default function test() {
  let testid = {
    id: "est",
    password: "testtest",
  };
  localStore.singUp(testid);
}

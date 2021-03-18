import PAGE_URLS from "../constants/pages.js";
import { ERROR_MESSAGE } from "../constants/messages.js";
import { $ } from "../utils/DOM.js";

export default class LoginForm {
  constructor({ $parent, setIsLoggedIn, pageRouter }) {
    this.$parent = $parent;
    this.setIsLoggedIn = setIsLoggedIn;
    this.pageRouter = pageRouter;
  }

  attachEvent() {
    $("form", this.$parent).addEventListener(
      "submit",
      this.onSubmitLoginForm.bind(this)
    );
    $(".js-signup-link", this.$parent).addEventListener(
      "click",
      this.onClickSignupLink.bind(this)
    );
  }

  onSubmitLoginForm(event) {
    event.preventDefault();

    // TODO: 로그인 확인 로직 필요

    this.setIsLoggedIn(true);
  }

  onClickSignupLink(event) {
    if (!event.target.classList.contains("js-signup-link")) {
      return;
    }
    event.preventDefault();

    const path = event.target.getAttribute("href");
    this.pageRouter.movePage(path);
  }

  render() {
    this.$parent.innerHTML = `
      <div class="wrapper p-10 bg-white">
        <div class="heading">
          <h2>👋 로그인</h2>
        </div>
        <form name="login" class="form">
          <div class="input-control">
            <label for="email" class="input-label" hidden>이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              class="input-field"
              placeholder="이메일"
              required
            />
          </div>
          <div class="input-control">
            <label for="password" class="input-label" hidden>
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="input-field"
              placeholder="비밀번호"
              required
            />
          </div>
          <p class="js-login-error text-red text-center d-none">
            ${ERROR_MESSAGE.LOGIN_FAILURE}
          </p>
          <div class="input-control w-100">
            <button
              type="submit"
              name="submit"
              class="input-submit w-100 bg-cyan-300"
            >
              확인
            </button>
          </div>
          <p class="text-gray-700 pl-2">
            아직 회원이 아니신가요?
            <a href="${PAGE_URLS.SIGNUP}" class="js-signup-link">회원가입</a>
          </p>
        </form>
      </div>
    `;

    this.attachEvent();
  }
}

import Component from "../../core/Component.js";

export default class SignUp extends Component {
  constructor() {
    super();
  }
  setEvent() {
    this.addEvent("submit", ".form", (e) => {
      e.preventDefault();
      console.log(e.target);
    });
  }
  template() {
    return `
           <div class="wrapper p-10 bg-white">
              <div class="heading">
                <h2 class="text">📝 회원가입</h2>
              </div>
              <form name="signUp" class="form">
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
                  <label for="name" class="input-label" hidden>이름</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="input-field"
                    placeholder="이름"
                    required
                  />
                </div>
                <div class="input-control">
                  <label for="password" class="input-label" hidden
                    >비밀번호</label
                  >
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="input-field"
                    placeholder="비밀번호"
                  />
                </div>
                <div class="input-control">
                  <label for="password-confirm" class="input-label" hidden
                    >비밀번호 확인</label
                  >
                  <input
                    type="password"
                    id="password-confirm"
                    name="password-confirm"
                    class="input-field"
                    placeholder="비밀번호 확인"
                  />
                </div>
                <div class="input-control">
                  <button
                    type="submit"
                    name="submit"
                    class="input-submit w-100 bg-cyan-300"
                  >
                    확인
                  </button>
                </div>
              </form>
            </div>
  
      `;
  }
}

customElements.define("main-signup", SignUp);

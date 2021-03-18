import { MENU, MESSAGE } from '../../constants/constants';

export const signIn = `
<main class="mt-10 d-flex justify-center">
  <div class="wrapper p-10 bg-white">
    <div class="heading">
      <h2>${MENU.SIGNIN}</h2>
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
      <div class="input-control w-100">
        <button
          type="button"
          name="submit"
          class="input-submit w-100 bg-cyan-300"
        >
          확인
        </button>
      </div>
      <p class="text-gray-700 pl-2">
        ${MESSAGE.SIGNIN.INVITE}
        <a href="#signup">회원가입</a>
      </p>
    </form>
  </div>
</main>
`;

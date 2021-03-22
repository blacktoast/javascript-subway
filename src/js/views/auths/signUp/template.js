const SIGN_UP_TEMPLATE = `
<div class="wrapper p-10 bg-white">
  <div class="heading">
    <h2 class="text">📝 회원가입</h2>
  </div>
  <form name="login" class="form">
    <div class="input-control">
      <label for="name" class="input-label" hidden>이름</label>
      <input type="text" id="name" name="name" class="input-field" placeholder="이름" required />
      <span></span>
    </div>
    <div class="input-control">
      <label for="email" class="input-label" hidden>이메일</label>
      <input type="email" id="email" name="email" class="input-field" placeholder="이메일" required />
      <span></span>
    </div>
    <div class="input-control">
      <label for="password" class="input-label" hidden>비밀번호</label>
      <input type="password" id="password" name="password" class="input-field" placeholder="비밀번호" required />
      <span></span>
    </div>
    <div class="d-flex my-3 mx-5 items-center">
      <label>비밀번호 표시</label>
      <input type="checkbox" id="password-checkbox"></input>
    </div>
    <div class="input-control">
      <button type="submit" name="submit" class="input-submit w-100 bg-cyan-300" disabled>확인</button>
    </div>
  </form>
</div>`;

export default SIGN_UP_TEMPLATE;

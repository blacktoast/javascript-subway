const MESSAGE = {
  ERROR: {
    PAGE_NOT_FOUND: '존재하지 않는 페이지입니다.',
    FAIL_TO_SIGNUP: '회원가입에 실패 하셨습니다. 다시 시도 해주세요.',
    DUPLICATED_EMAIL: '중복된 이메일입니다.',
    WRONG_EMAIL_FORMAT: '알맞은 이메일 형식을 입력해 주세요.',
    CHECK_EMAIL_AND_PASSWORD: '이메일과 비밀번호를 확인해주세요.',
    NOT_CHECKED_EMAIL: '이메일 중복 체크를 해주세요',
  },
  SUCCESS: {
    AVAILABLE_EMAIL: '사용가능한 이메일 입니다.',
  },
};

const SNACKBAR_MESSAGE = {
  SUCCESS: {
    SIGNUP: '회원가입에 성공했습니다.',
    LOGIN: '로그인에 성공했습니다.',
    LOGOUT: '로그아웃에 성공했습니다.',
  },
};

export { MESSAGE, SNACKBAR_MESSAGE };

import {
  STATION_NAME_MIN_LENGTH,
  STATION_NAME_MAX_LENGTH,
  LINE_MIN_DISTANCE,
  LINE_MIN_DURATION,
  LINE_NAME_MIN_LENGTH,
  LINE_NAME_MAX_LENGTH,
} from "./general.js";

export const ERROR_MESSAGE = {
  MEMBER: {
    SIGNUP: "회원가입에 실패했습니다. 다시 시도해주세요.",
    LOGIN: "이메일 혹은 비밀번호가 유효하지 않습니다.",
    PASSWORD_CONFIRM: "비밀번호가 일치하지 않습니다.",
    INVALID_EMAIL: "사용할 수 없는 이메일입니다. 이메일을 다시 입력해주세요.",
    EMPTY_NAME: "이름을 입력해주세요.",
    INVALID_PASSWORD:
      "유효하지 않은 비밀번호 입니다. 6자리 이상의 비밀번호를 입력해주세요.",
    INVALID_EMAIL_FORM: "올바르지 않은 이메일 형식입니다.",
    DUPLICATED_EMAIL: "이미 존재하는 이메일입니다.",
  },
  STATIONS: {
    INVALID_STATION: "사용할 수 없는 지하철역 이름 입니다.",
    STATION_NAME_LENGTH: `${STATION_NAME_MIN_LENGTH}자 이상 ${STATION_NAME_MAX_LENGTH}자 이하의 역 이름을 입력해주세요.`,
    LINE_NAME_LENGTH: `${LINE_NAME_MIN_LENGTH}자 이상 ${LINE_NAME_MAX_LENGTH}자 이하의 역 이름을 입력해주세요.`,
    DELETE_STATION: "Fail to delete station",
    FETCH_STATION: "Fail to fetch stations",
  },
  LINES: {
    EMPTY_UP_STATION: "상행역을 선택해주세요",
    EMPTY_DOWN_STATION: "하행역을 선택해주세요",
    EMPTY_LINE_COLOR: "노선의 색상을 선택해주세요",
    SAME_UP_DOWN_STATION: "상행역과 하행역은 같을 수 없습니다.",
    INVALID_LINE_DISTANCE: `상행역과 하행역 사이의 거리는 ${LINE_MIN_DISTANCE} 이상이어야 합니다.`,
    INVALID_LINE_DURATION: `상행역과 하행역 사이의 소요 시간은 ${LINE_MIN_DURATION} 이상이어야 합니다.`,
    INVALID_LINE: "사용할 수 없는 노선 이름 입니다.",
    FETCH_LINE: "Fail to fetch lines",
    DELETE_LINE: "Fail to delete line",
  },
  SECTIONS: {
    DUPLICATED_SECTION: "이미 노선에 존재하는 구간입니다.",
    INVALID_DISTANCE:
      "기존 구간의 거리보다 긴 거리로 구간을 추가할 수 없습니다.",
    INVALID_DURATION:
      "기존 구간의 시간보다 긴 시간으로 구간을 추가할 수 없습니다.",
    MIN_SECTION_LENGTH: "하나의 노선은 1개의 구간을 가져야 합니다.",
  },
  GENERAL: {
    API_CALL_FAILURE:
      "시스템 오류로 인해 요청하신 동작을 수행할 수 없습니다.\n 문의: sunccol@woowahan.com",
    NO_ACCESS_TOKEN: "요청하신 동작을 수행할 수 없습니다. 로그인해주세요.",
    TYPE_REQUIRED_STRING: "String is required",
    UNKNOWN_API_STATUS: "Unknown API status",
    FORBIDDEN: "접근 권한이 필요한 요청입니다.",
  },
};

export const SUCCESS_MESSAGE = {
  MEMBER: {
    PASSWORD_CONFIRM: "비밀번호가 확인되었습니다.",
    VALID_EMAIL: "사용가능한 이메일입니다.",
    SIGNUP: "환영합니다!",
    LOGIN: "안녕하세요!",
    LOGOUT: "안녕히가세요.",
  },
  STATIONS: {
    ADD: "지하철역을 추가했습니다.",
    MODIFY: "지하철역 이름을 수정했습니다.",
    DELETE: "지하철역을 삭제했습니다.",
  },
  LINES: {
    ADD: "지하철 노선을 추가했습니다.",
    MODIFY: "지하철역 노선을 수정했습니다.",
    DELETE: "지하철 노선을 삭제했습니다.",
  },
  SECTIONS: {
    ADD: "노선의 구간을 추가했습니다.",
    DELETE: "노선의 구간을 삭제했습니다.",
  },
};

export const CONFIRM_MESSAGE = {
  DELETE_STATION: "정말 해당 역을 삭제하시겠습니까?",
  DELETE_LINE: "정말 해당 노선을 삭제하시겠습니까?",
  DELETE_SECTION: "정말 해당 구간을 삭제하시겠습니까?",
};

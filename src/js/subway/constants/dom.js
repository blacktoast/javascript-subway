import { $, $$ } from '../../@shared/utils/dom';
import { mainElements, modalElements } from '../views';
import { ROUTE } from './constants';
import { SELECTOR } from './selector';

export const DOM = {
  CONTAINER: {
    MENU: $(`#${SELECTOR.CONTAINER.MENU_BUTTON}`),
    SIGN: $(`#${SELECTOR.CONTAINER.SIGN_BUTTON}`),
    MAIN: $(`#${SELECTOR.CONTAINER.MAIN}`),
    MODAL: $(`#${SELECTOR.CONTAINER.MODAL}`),
  },
  ROOT: {
    MAIN: {
      MSG: $(`#${SELECTOR.ROOT.MAIN.MSG}`, mainElements[ROUTE.ROOT]),
    },
  },
  USER_JOIN: {
    MAIN: {
      FORM: $(`#${SELECTOR.USER_JOIN.MAIN.FORM}`, mainElements[ROUTE.SIGNUP]),
      EMAIL_INPUT: $(`#${SELECTOR.USER_JOIN.MAIN.EMAIL_INPUT}`, mainElements[ROUTE.SIGNUP]),
      PASSWORD_INPUT: $(`#${SELECTOR.USER_JOIN.MAIN.PASSWORD_INPUT}`, mainElements[ROUTE.SIGNUP]),
      PASSWORD_CONFIRM_INPUT: $(`#${SELECTOR.USER_JOIN.MAIN.PASSWORD_CONFIRM_INPUT}`, mainElements[ROUTE.SIGNUP]),
      NAME_INPUT: $(`#${SELECTOR.USER_JOIN.MAIN.NAME_INPUT}`, mainElements[ROUTE.SIGNUP]),
      EMAIL_MSG: $(`#${SELECTOR.USER_JOIN.MAIN.EMAIL_MSG}`, mainElements[ROUTE.SIGNUP]),
      PASSWORD_MSG: $(`#${SELECTOR.USER_JOIN.MAIN.PASSWORD_MSG}`, mainElements[ROUTE.SIGNUP]),
      PASSWORD_CONFIRM_MSG: $(`#${SELECTOR.USER_JOIN.MAIN.PASSWORD_CONFIRM_MSG}`, mainElements[ROUTE.SIGNUP]),
      NAME_MSG: $(`#${SELECTOR.USER_JOIN.MAIN.NAME_MSG}`, mainElements[ROUTE.SIGNUP]),
    },
  },
  USER_AUTH: {
    MAIN: {
      FORM: $(`#${SELECTOR.USER_AUTH.MAIN.FORM}`, mainElements[ROUTE.SIGNIN]),
      EMAIL_INPUT: $(`#${SELECTOR.USER_AUTH.MAIN.EMAIL_INPUT}`, mainElements[ROUTE.SIGNIN]),
      PASSWORD_INPUT: $(`#${SELECTOR.USER_AUTH.MAIN.PASSWORD_INPUT}`, mainElements[ROUTE.SIGNIN]),
      PASSWORD_MSG: $(`#${SELECTOR.USER_AUTH.MAIN.PASSWORD_MSG}`, mainElements[ROUTE.SIGNIN]),
    },
  },
  STATION: {
    MAIN: {
      FORM: $(`#${SELECTOR.STATION.MAIN.FORM}`, mainElements[ROUTE.STATIONS]),
      NAME_INPUT: $(`#${SELECTOR.STATION.MAIN.NAME_INPUT}`, mainElements[ROUTE.STATIONS]),
      SUBMIT_BUTTON: $(`#${SELECTOR.STATION.MAIN.SUBMIT_BUTTON}`, mainElements[ROUTE.STATIONS]),
      NAME_MSG: $(`#${SELECTOR.STATION.MAIN.NAME_MSG}`, mainElements[ROUTE.STATIONS]),
      LIST: $(`#${SELECTOR.STATION.MAIN.LIST}`, mainElements[ROUTE.STATIONS]),
    },
    MODAL: {
      FORM: $(`#${SELECTOR.STATION.MODAL.FORM}`, modalElements[ROUTE.STATIONS]),
      NAME_INPUT: $(`#${SELECTOR.STATION.MODAL.NAME_INPUT}`, modalElements[ROUTE.STATIONS]),
      SUBMIT_BUTTON: $(`#${SELECTOR.STATION.MODAL.SUBMIT_BUTTON}`, modalElements[ROUTE.STATIONS]),
      NAME_MSG: $(`#${SELECTOR.STATION.MODAL.NAME_MSG}`, modalElements[ROUTE.STATIONS]),
    },
  },
  LINE: {
    MAIN: {
      ADD_MODAL_BUTTON: $(`#${SELECTOR.LINE.MAIN.ADD_MODAL_BUTTON}`, mainElements[ROUTE.LINES]),
      LIST: $(`#${SELECTOR.LINE.MAIN.LIST}`, mainElements[ROUTE.LINES]),
    },
    MODAL: {
      FORM: $(`#${SELECTOR.LINE.MODAL.FORM}`, modalElements[ROUTE.LINES]),
      NAME_INPUT: $(`#${SELECTOR.LINE.MODAL.NAME_INPUT}`, modalElements[ROUTE.LINES]),
      UP_STATION_SELECTOR: $(`#${SELECTOR.LINE.MODAL.UP_STATION_SELECTOR}`, modalElements[ROUTE.LINES]),
      DOWN_STATION_SELECTOR: $(`#${SELECTOR.LINE.MODAL.DOWN_STATION_SELECTOR}`, modalElements[ROUTE.LINES]),
      DISTANCE_INPUT: $(`#${SELECTOR.LINE.MODAL.DURATION_INPUT}`, modalElements[ROUTE.LINES]),
      DURATION_INPUT: $(`#${SELECTOR.LINE.MODAL.DURATION_INPUT}`, modalElements[ROUTE.LINES]),
      COLOR_INPUT: $(`#${SELECTOR.LINE.MODAL.COLOR_INPUT}`, modalElements[ROUTE.LINES]),
      PALETTE: $(`#${SELECTOR.LINE.MODAL.PALETTE}`, modalElements[ROUTE.LINES]),
      SUBMIT_BUTTON: $(`#${SELECTOR.LINE.MODAL.SUBMIT_BUTTON}`, modalElements[ROUTE.LINES]),
      MSG: $(`#${SELECTOR.LINE.MODAL.MSG}`, modalElements[ROUTE.LINES]),
      NON_MODIFIABLE: $$(`.${SELECTOR.LINE.MODAL.NON_MODIFIABLE}`, modalElements[ROUTE.LINES]),
    },
  },
  SECTION: {
    MAIN: {
      ADD_MODAL_BUTTON: $(`#${SELECTOR.SECTION.MAIN.ADD_MODAL_BUTTON}`, mainElements[ROUTE.SECTIONS]),
      LINE_SELECTOR: $(`#${SELECTOR.SECTION.MAIN.LINE_SELECTOR}`, mainElements[ROUTE.SECTIONS]),
      LIST: $(`#${SELECTOR.SECTION.MAIN.LIST}`, mainElements[ROUTE.SECTIONS]),
    },
    MODAL: {
      FORM: $(`#${SELECTOR.SECTION.MODAL.FORM}`, modalElements[ROUTE.SECTIONS]),
      LINE_NAME: $(`#${SELECTOR.SECTION.MODAL.LINE_NAME}`, modalElements[ROUTE.SECTIONS]),
      UP_STATION_SELECTOR: $(`#${SELECTOR.SECTION.MODAL.UP_STATION_SELECTOR}`, modalElements[ROUTE.SECTIONS]),
      DOWN_STATION_SELECTOR: $(`#${SELECTOR.SECTION.MODAL.DOWN_STATION_SELECTOR}`, modalElements[ROUTE.SECTIONS]),
      DISTANCE_INPUT: $(`#${SELECTOR.SECTION.MODAL.DISTANCE_INPUT}`, modalElements[ROUTE.SECTIONS]),
      DURATION_INPUT: $(`#${SELECTOR.SECTION.MODAL.DURATION_INPUT}`, modalElements[ROUTE.SECTIONS]),
      SUBMIT_BUTTON: $(`#${SELECTOR.SECTION.MODAL.SUBMIT_BUTTON}`, modalElements[ROUTE.SECTIONS]),
      MSG: $(`#${SELECTOR.SECTION.MODAL.MSG}`, modalElements[ROUTE.SECTIONS]),
      NON_MODIFIABLE: $(`.${SELECTOR.SECTION.MODAL.NON_MODIFIABLE}`, modalElements[ROUTE.SECTIONS]),
    },
  },
  MAP: {
    MAIN: {
      CANVAS: $(`#${SELECTOR.MAP.MAIN.CANVAS}`, mainElements[ROUTE.MAP]),
    },
  },
};

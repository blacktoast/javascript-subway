import Component from '../components/Component.js';
import { ALERT_MESSAGE, ID_SELECTOR, MODAL_TYPE } from '../constants.js';
import { LINE_TEMPLATE } from '../templates/lineTemplate.js';
import { closeModal } from '../utils/DOM.js';
import { fetchLineCreation, fetchLineUpdate } from '../utils/fetch.js';
import { loadLineList } from '../utils/loadByAJAX.js';
import $ from '../utils/querySelector.js';
import Modal from './Modal.js';

class LineModal extends Modal {
  constructor(props) {
    super(props);

    this._router = {
      [MODAL_TYPE.CREATION]: new LineCreationComponent({
        accessTokenState: this.props.accessTokenState,
        stationsState: this.props.stationsState,
        linesState: this.props.linesState,
      }),
      [MODAL_TYPE.UPDATE]: new LineUpdateComponent({
        accessTokenState: this.props.accessTokenState,
        linesState: this.props.linesState,
      }),
    };
  }
}

class LineCreationComponent extends Component {
  constructor(props) {
    super(props);
  }

  initEvent() {
    $(`#${ID_SELECTOR.LINE_MODAL_FORM}`).addEventListener('submit', event => {
      event.preventDefault();

      this.#createLine(event);
    });
  }

  render() {
    $(`#${ID_SELECTOR.MODAL}`).innerHTML = LINE_TEMPLATE.MODAL;

    this.#loadSelectOption(`#${ID_SELECTOR.LINE_MODAL_FORM_UP_STATION}`);
    this.#loadSelectOption(`#${ID_SELECTOR.LINE_MODAL_FORM_DOWN_STATION}`);
  }

  #loadSelectOption(selector) {
    $(selector).innerHTML = this.props.stationsState.Data.map(
      ({ id, name }) => `<option value="${id}">${name}</option>`
    ).join('');
  }

  #createLine = async event => {
    const lineName = event.target[ID_SELECTOR.LINE_MODAL_FORM_NAME].value;
    const upStationId =
      event.target[ID_SELECTOR.LINE_MODAL_FORM_UP_STATION].value;
    const downStationId =
      event.target[ID_SELECTOR.LINE_MODAL_FORM_DOWN_STATION].value;

    if (upStationId === downStationId) {
      alert(ALERT_MESSAGE.STATIONS_SETTING_OF_LINE_FAIL);
      return;
    }

    const distance = event.target[ID_SELECTOR.LINE_MODAL_FORM_DISTANCE].value;
    const duration = event.target[ID_SELECTOR.LINE_MODAL_FORM_DURATION].value;
    const color = event.target[ID_SELECTOR.LINE_MODAL_FORM_COLOR].value;
    const bodyData = {
      name: lineName,
      color,
      upStationId,
      downStationId,
      distance,
      duration,
    };
    const accessToken = this.props.accessTokenState.Data;

    try {
      const response = await fetchLineCreation({
        bodyData,
        accessToken,
      });

      alert(ALERT_MESSAGE.LINE_CREATION_SUCCESS);

      const { id, name, color } = await response.json();
      const lines = this.props.linesState.Data;

      lines.push({ id, name, color });
      this.props.linesState.Data = lines;
      closeModal();
      this.#clearModalInput();
    } catch (err) {
      alert(err.message);
      return;
    }
  };

  #clearModalInput() {
    $(`#${ID_SELECTOR.LINE_MODAL_FORM_NAME}`).value = '';
    $(`#${ID_SELECTOR.LINE_MODAL_FORM_DISTANCE}`).value = '';
    $(`#${ID_SELECTOR.LINE_MODAL_FORM_DURATION}`).value = '';
    $(`#${ID_SELECTOR.LINE_MODAL_FORM_COLOR}`).value = '';
  }
}

class LineUpdateComponent extends Component {
  constructor(props) {
    super(props);
  }

  initLoad() {
    this.#loadUpdateModal();
  }

  initEvent() {
    $(`#${ID_SELECTOR.LINE_MODAL_FORM}`).addEventListener('submit', event => {
      event.preventDefault();

      this.#updateLine(event);
    });
  }

  render() {
    $(`#${ID_SELECTOR.MODAL}`).innerHTML = LINE_TEMPLATE.UPDATE_MODAL;
  }

  #loadUpdateModal() {
    const lineId = $(`#${ID_SELECTOR.MODAL}`).dataset.lineId;

    if (!lineId) {
      console.error(
        `#${ID_SELECTOR.MODAL}l의 dataset 속성으로 lineId가 존재하지 않습니다.`
      );
      return;
    }

    const line = this.#findLineBy(lineId);

    $(`#${ID_SELECTOR.LINE_MODAL_FORM_NAME}`).value = line.name;
    $(`#${ID_SELECTOR.LINE_MODAL_FORM_COLOR}`).value = line.color;
  }

  #findLineBy(targetId) {
    const lines = this.props.linesState.Data;

    return lines.find(line => line.id === Number(targetId));
  }

  #updateLine = async event => {
    const lineId = $(`.${ID_SELECTOR.MODAL}`).dataset.lineId;
    const lineName = event.target[ID_SELECTOR.LINE_MODAL_FORM_NAME].value;
    const color = event.target[ID_SELECTOR.LINE_MODAL_FORM_COLOR].value;
    const bodyData = {
      name: lineName,
      color,
    };
    const accessToken = this.props.accessTokenState.Data;

    try {
      await fetchLineUpdate({
        lineId,
        bodyData,
        accessToken,
      });

      alert(ALERT_MESSAGE.LINE_UPDATE_SUCCESS);

      loadLineList(this.props.linesState, this.props.accessTokenState.Data);
      closeModal();
    } catch (err) {
      alert(err.message);
      return;
    }
  };
}

export default LineModal;

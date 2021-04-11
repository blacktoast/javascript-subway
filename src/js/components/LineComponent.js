import {
  ALERT_MESSAGE,
  CLASS_SELECTOR,
  CONFIRM_MESSAGE,
  ID_SELECTOR,
  KEYWORD,
  LOCAL_STORAGE_KEY,
  REQUEST_URL,
} from '../constants.js';
import LineModal from '../modals/LineModal.js';
import LINE_TEMPLATE from '../templates/lineTemplate.js';
import $ from '../utils/querySelector.js';
import Component from './Component.js';
import { fetchLineRemoval } from '../utils/fetch.js';
import { loadLineList } from '../utils/loadByAJAX.js';
import { hasClassName } from '../utils/validation.js';

class LineComponent extends Component {
  lineModal;

  constructor(props) {
    super(props);

    this.lineModal = new LineModal({
      stationsState: this.props.stationsState,
      linesState: this.props.linesState,
    });
  }

  initStateListener() {
    this.props.linesState.setListener(this.renderLineList);
  }

  initLoad() {
    this.renderLineList(this.props.linesState.Data);
  }

  initEvent() {
    $(`#${ID_SELECTOR.LINE_CREATION_BUTTON}`).addEventListener('click', () => {
      this.lineModal.route(KEYWORD.CREATION);
    });

    $(`#${ID_SELECTOR.LINE_LIST}`).addEventListener(
      'click',
      this.#onLineRevised
    );

    $(`#${ID_SELECTOR.LINE_LIST}`).addEventListener(
      'click',
      this.#onLineRemoved
    );

    $(`#${ID_SELECTOR.MODAL}`).addEventListener(
      'click',
      this.#onLineColorSelected
    );
  }

  render() {
    super.render(LINE_TEMPLATE);
  }

  renderLineList = lines => {
    const template = lines.map(LINE_TEMPLATE.makeLineTemplate).join('');

    $(`#${ID_SELECTOR.LINE_LIST}`).innerHTML = template;
  };

  #onLineRevised = ({ target }) => {
    if (!hasClassName(target, CLASS_SELECTOR.LINE_LIST_ITEM_REVISION)) {
      return;
    }

    $(`#${ID_SELECTOR.MODAL}`).dataset.lineId = target.dataset.id;
    this.lineModal.route(KEYWORD.REVISION);
  };

  #onLineRemoved = ({ target }) => {
    if (!hasClassName(target, CLASS_SELECTOR.LINE_LIST_ITEM_REMOVAL)) {
      return;
    }

    if (!confirm(CONFIRM_MESSAGE.LINE_REMOVAL)) {
      return;
    }

    this.#removeLine(target.dataset.id);
  };

  #onLineColorSelected = ({ target }) => {
    if (!hasClassName(target, CLASS_SELECTOR.LINE_COLOR_SELECTOR_OPTION)) {
      return;
    }

    $(`#${ID_SELECTOR.LINE_MODAL_FORM_COLOR}`).value = target.dataset.color;
  };

  #removeLine = async lineId => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);

    try {
      await fetchLineRemoval(lineId, accessToken);

      alert(ALERT_MESSAGE.LINE_REMOVAL_SUCCESS);

      loadLineList(this.props.linesState, accessToken);
    } catch (err) {
      this.props.treatFetchError(error);
      return;
    }
  };
}

export default LineComponent;

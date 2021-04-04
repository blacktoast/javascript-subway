import { show, $ } from '../../@shared/utils';
import { DOM, STATE_KEY, UP_STATION, DOWN_STATION, MESSAGE, ROUTE } from '../constants';
import { hideModal, isValidDistance, isValidDuration, sectionManageAPI, showModal } from '../utils';
import { subwayView } from '../views';
import { store } from '../../subway/models/store';
import { Component } from '../../@shared/models/Component';

export class SectionManage extends Component {
  setup() {
    store[STATE_KEY.ROUTE].subscribe(this.reset.bind(this));
    store[STATE_KEY.STATIONS].subscribe(this.updateStations.bind(this));
    store[STATE_KEY.LINES].subscribe(this.updateLines.bind(this));
  }

  reset() {
    const lines = store[STATE_KEY.LINES].get();

    if (!lines) return;
    subwayView.renderLineOptions(lines);
    DOM.SECTION.MAIN.LINE_COLOR_BAR.classList.add('hidden');
    subwayView.renderSectionList();
  }

  updateStations(stations) {
    subwayView.renderStationOptions(DOM.SECTION.MODAL.UP_STATION_SELECTOR, UP_STATION, stations);
    subwayView.renderStationOptions(DOM.SECTION.MODAL.DOWN_STATION_SELECTOR, DOWN_STATION, stations);
  }

  updateLines(lines) {
    const lineId = Number(DOM.SECTION.MAIN.LINE_SELECTOR.value);

    if (!lineId) return;
    const { stations } = lines.find(line => line.id === lineId);

    subwayView.renderSectionList(stations);
  }

  bindEvent() {
    DOM.SECTION.MAIN.ADD_MODAL_BUTTON.addEventListener('click', this.handleAddButton.bind(this));
    DOM.SECTION.MAIN.LINE_SELECTOR.addEventListener('change', this.handleLineSelector.bind(this));
    DOM.SECTION.MODAL.FORM.addEventListener('submit', this.handleAddSubmit.bind(this));
    DOM.SECTION.MAIN.LIST.addEventListener('click', this.handleRemoveButton.bind(this));
  }

  handleAddButton() {
    const lineId = DOM.SECTION.MAIN.LINE_SELECTOR.value;

    if (!lineId) {
      alert(MESSAGE.SECTION_MANAGE.LINE_SELECT_REQUIRED);

      return;
    }

    DOM.SECTION.MODAL.FORM.dataset.lineId = lineId;
    DOM.SECTION.MODAL.LINE_NAME.value = $(`option[value='${lineId}']`, DOM.SECTION.MAIN.LINE_SELECTOR).innerText;
    DOM.SECTION.MODAL.MSG.innerText = '';

    show(DOM.SECTION.MODAL.NON_MODIFIABLE);
    showModal(DOM.CONTAINER.MODAL);
  }

  handleLineSelector(event) {
    const id = Number(event.target.value);
    const { color, stations } = store[STATE_KEY.LINES].get().find(line => line.id === id);

    subwayView.fillLineColorBar(color);
    subwayView.renderSectionList(stations);
  }

  async handleAddSubmit(event) {
    event.preventDefault();
    const requestInfo = {
      id: DOM.SECTION.MODAL.FORM.dataset.lineId,
      upStationId: DOM.SECTION.MODAL.UP_STATION_SELECTOR.value,
      downStationId: DOM.SECTION.MODAL.DOWN_STATION_SELECTOR.value,
      distance: DOM.SECTION.MODAL.DISTANCE_INPUT.value,
      duration: DOM.SECTION.MODAL.DURATION_INPUT.value,
    };

    if (requestInfo.upStationId === requestInfo.downStationId) {
      DOM.LINE.MODAL.MSG.innerText = MESSAGE.LINE_MANAGE.SAME_STATIONS;

      return;
    }
    if (!(isValidDistance(requestInfo.distance) && isValidDuration(requestInfo.duration))) {
      DOM.LINE.MODAL.MSG.innerText = MESSAGE.LINE_MANAGE.INVALID_DISTANCE_DURATION;

      return;
    }

    try {
      await sectionManageAPI.addSection(requestInfo);
      store[STATE_KEY.LINES].update();
      DOM.SECTION.MODAL.FORM.reset();
      hideModal(DOM.CONTAINER.MODAL);
    } catch (error) {
      DOM.SECTION.MODAL.MSG.innerText = error.message;
    }
  }

  async handleRemoveButton({ target }) {
    if (!target.classList.contains('js-remove-button')) return;
    const $station = target.closest('.js-station-list-item');
    const requestInfo = {
      lineId: DOM.SECTION.MAIN.LINE_SELECTOR.value,
      stationId: $station.dataset.stationId,
    };

    if (!confirm(MESSAGE.CONFIRM.STATION_REMOVE)) return;

    try {
      await sectionManageAPI.removeSection(requestInfo);
      store[STATE_KEY.LINES].update();
    } catch (error) {
      alert(error.message === '400' ? MESSAGE.SECTION_MANAGE.STATION_MIN_COUNT : MESSAGE.RETRY);
    }
  }
}

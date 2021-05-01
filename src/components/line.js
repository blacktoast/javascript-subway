import { SELECTOR_CLASS, SELECTOR_ID, PAGE_TITLE, FILE_PATH, STATE_KEY, STYLE_CLASS } from '../constants.js';
import Observer from '../lib/Observer.js';
import { $ } from '../utils/dom.js';
import { delegateLineClickEvent } from '../delegators/line.js';

export default class Line extends Observer {
  #state;
  #targetSelector;
  #parentSelector;

  constructor(state, targetSelector = `#${SELECTOR_ID.LINE_LIST}`, parentSelector = `#${SELECTOR_ID.MAIN_CONTAINER}`) {
    super();
    this.#state = state;
    this.#targetSelector = targetSelector;
    this.#parentSelector = parentSelector;
  }

  update() {
    this.renderComponent();
  }

  renderPage() {
    $(this.#parentSelector).innerHTML = this.#getWrapperTemplate();
  }

  renderComponent() {
    const targetContainer = $(this.#targetSelector);
    if (!targetContainer) return;
    targetContainer.innerHTML = this.#getListListTemplate();
    this.#initEvents();
  }

  #initEvents() {
    $(this.#parentSelector).addEventListener('click', delegateLineClickEvent);
  }

  #getWrapperTemplate() {
    return `
      <div data-test-id="lines" class="wrapper bg-white p-10 fade-in">
        <div class="heading d-flex">
          <h2 class="mt-1 w-100">🛤️ 노선 관리</h2>
          <button type="button" class="${SELECTOR_CLASS.LINE_LIST_MODAL_OPEN} modal-trigger-btn bg-cyan-300 ml-2">노선 추가</button>
        </div>
        <ul id="${SELECTOR_ID.LINE_LIST}" class="mt-3 pl-0"></ul>
      </div>
    `;
  }

  #getListListTemplate() {
    return this.#state.get(STATE_KEY.LINE_LIST).map(this.#getLineTemplate).join('');
  }

  #getLineTemplate(line) {
    return `
      <li data-line-id="${line.id}" class="${SELECTOR_CLASS.LINE_LIST_ITEM} ${STYLE_CLASS.HOVER} d-flex items-center py-2 relative">
        <span class="subway-line-color-dot ${line.color}"></span>
        <span class="w-100 pl-6 subway-line-list-item-name">${line.name}</span>
        <button 
          type="button" 
          data-line-id="${line.id}" 
          data-line-name = "${line.name}"
          class="${SELECTOR_CLASS.LINE_LIST_ITEM_UPDATE} bg-gray-50 text-gray-500 text-sm mr-1"
        >수정</button>
        <button 
          type="button" 
          data-line-id="${line.id}" 
          data-line-name = "${line.name}"
          class="${SELECTOR_CLASS.LINE_DELETE_BUTTON} bg-gray-50 text-gray-500 text-sm"
        >삭제</button>
      </li>
      <hr class="my-0" />
    `;
  }
}

import { deleteLineAPI, getLinesAPI, getStationsAPI } from "../APIs/index.js";
import { CONFIRM_MESSAGE } from "../constants/messages.js";
import { PAGE_KEYS, PAGE_URLS } from "../constants/pages.js";
import { createLineListItemTemplate } from "../constants/template.js";
import { $ } from "../utils/DOM.js";
import snackbar from "../utils/snackbar.js";
import Component from "./common/Component.js";
import LineModal from "./LineModal.js";

export default class Lines extends Component {
  constructor({ $parent, setPageState }) {
    super($parent);
    this.setPageState = setPageState;
    this.lineModal = new LineModal({
      addLine: this.addLine.bind(this),
      modifyLine: this.modifyLine.bind(this),
    });

    this.initContent();

    this.$lineList = $(".js-line-list", this.innerElement);
  }

  initContent() {
    const template = `
      <div class="wrapper bg-white p-10">
        <div class="heading d-flex">
          <h2 class="mt-1 w-100">🛤️ 노선 관리</h2>
          <button
            type="button"
            class="js-add-line-btn add-btn modal-trigger-btn bg-cyan-300 ml-2"
          >
            노선 추가
          </button>
        </div>
        <ul class="js-line-list mt-3 pl-0"></ul>
      </div>
    `;

    super.initContent(template);
    this.attachEvent();
  }

  async deleteLine(lineId) {
    if (!window.confirm(CONFIRM_MESSAGE.DELETE_LINE)) {
      return;
    }

    const deleteResult = await deleteLineAPI(lineId);

    snackbar.show(deleteResult.message);

    if (!deleteResult.isSucceeded) {
      return;
    }

    $(
      `.js-line-list > li[data-line-id="${lineId}"]`,
      this.innerElement
    ).remove();

    this.render();
  }

  addLine(lineData) {
    this.$lineList.insertAdjacentHTML(
      "beforeend",
      createLineListItemTemplate(lineData)
    );
    this.render();
  }

  modifyLine(lineData) {
    const $modifiedLine = $(
      `li[data-line-id="${lineData.id}"]`,
      this.innerElement
    );

    $modifiedLine.dataset.lineName = lineData.name;
    $modifiedLine.dataset.lineColor = lineData.color;
    $(
      ".js-line-color-dot",
      $modifiedLine
    ).className = `js-line-color-dot subway-line-color-dot ${lineData.color}`;
    $(".js-line-name", $modifiedLine).textContent = lineData.name;

    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  toggleLineInfo($lineListItem) {
    $(".js-line-info", $lineListItem).classList.toggle("d-none");
  }

  onClickLineList({ target }) {
    if (target.classList.contains("js-modify-line-btn")) {
      const lineData = target.closest("li").dataset;
      this.lineModal.openForModify(lineData);

      return;
    }

    if (target.classList.contains("js-delete-line-btn")) {
      this.deleteLine(target.closest("li").dataset.lineId);

      return;
    }

    this.toggleLineInfo(target.closest("li"));
  }

  attachEvent() {
    $(".js-add-line-btn", this.innerElement).addEventListener(
      "click",
      this.lineModal.openForAdd.bind(this.lineModal)
    );
    $(".js-line-list", this.innerElement).addEventListener(
      "click",
      this.onClickLineList.bind(this)
    );
  }

  async loadPage() {
    const loadedLines = await getLinesAPI();
    const loadedStations = await getStationsAPI();
    const isLoadSucceeded =
      loadedLines.isSucceeded && loadedStations.isSucceeded;

    this.setPageState({
      isLoggedIn: isLoadSucceeded,
      pageURL: isLoadSucceeded
        ? PAGE_URLS[PAGE_KEYS.LINES]
        : PAGE_URLS[PAGE_KEYS.LOGIN],
    });
    this.$lineList.innerHTML = loadedLines.lines.reduce(
      (lineListHTML, line) =>
        `${lineListHTML}\n${createLineListItemTemplate(line)}`,
      ""
    );
    this.lineModal.renderSelectOption(loadedStations.stations);

    this.render();
    this.lineModal.render();
  }
}

import { modifyStationNameAPI } from "../APIs/index.js";
import {
  SPACE_REG_EXP,
  STATION_NAME_MAX_LENGTH,
  STATION_NAME_MIN_LENGTH,
} from "../constants/general.js";
import { ERROR_MESSAGE } from "../constants/messages.js";
import { $ } from "../utils/DOM.js";
import snackbar from "../utils/snackbar.js";
import Modal from "./common/Modal.js";

// eslint-disable-next-line import/prefer-default-export
export class StationModifyModal extends Modal {
  constructor({ modifyStationName }) {
    super();
    this.stationId = "";
    this.prevStationName = "";
    this.modifyStationName = modifyStationName;

    this.initContent();
  }

  initContent() {
    const template = `
    <div>
      <h2 class="js-modify-station-title"></h2>
      <form>
        <div class="d-flex w-100">
          <label for="modify-station-name" class="input-label" hidden>
            역 이름
          </label>
          <input
            type="text"
            id="modify-station-name"
            name="modify-station-name"
            class="js-modify-station-name input-field"
            placeholder="역 이름"
            minlength="${STATION_NAME_MIN_LENGTH}"
            maxlength="${STATION_NAME_MAX_LENGTH}"
            required
          />
          <button
            type="submit"
            name="submit"
            class="input-submit bg-cyan-300 ml-2 w-30"
          >
            확인
          </button>
        </div>
      </form>
      <p class="js-modify-station-message text-base text-red text-center"></p>
    </div>
    `;

    super.initContent(template);
    this.attachEvent();
  }

  attachEvent() {
    super.attachEvent();

    $("form", this.innerElement).addEventListener(
      "submit",
      this.onModifyStationName.bind(this)
    );
  }

  async onModifyStationName(event) {
    event.preventDefault();

    const { target } = event;
    const $errorMessage = $(".js-modify-station-message", this.innerElement);
    const newStationName = target.elements["modify-station-name"].value.replace(
      SPACE_REG_EXP,
      ""
    );

    if (
      newStationName.length < STATION_NAME_MIN_LENGTH ||
      newStationName.length > STATION_NAME_MAX_LENGTH
    ) {
      snackbar.show(ERROR_MESSAGE.STATIONS.STATION_NAME_LENGTH);
      target.reset();

      return;
    }

    if (this.prevStationName === newStationName) {
      target.reset();
      this.close();

      return;
    }

    const { isSucceeded, message } = await modifyStationNameAPI(
      this.stationId,
      newStationName
    );

    if (isSucceeded) {
      this.modifyStationName(this.stationId, newStationName);
      snackbar.show(message);
      target.reset();
      this.close();

      return;
    }

    $errorMessage.textContent = message;
    target.elements["modify-station-name"].value = newStationName;
  }

  open({ stationId, prevStationName }) {
    this.stationId = stationId;
    this.prevStationName = prevStationName;
    $(
      ".js-modify-station-title",
      this.innerElement
    ).textContent = `🛤 ${this.prevStationName}`;
    $(".js-modify-station-message", this.innerElement).textContent = "";

    super.open();
  }
}

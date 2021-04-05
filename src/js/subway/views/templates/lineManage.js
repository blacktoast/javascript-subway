import { SELECTOR } from '../../constants';
import { MENU } from '../../constants/constants';

export const lineInfo = ({ id, name, color }) => `
<li data-id=${id}
    data-name=${name}
    data-color=${color}
    class="js-line-list-item d-flex items-center py-2 relative">
  <span class="subway-line-color-dot ${color}"></span>
  <span class="js-line-name w-100 pl-6">${name}</span>
  <button type="button" class="js-modify-button bg-gray-50 text-gray-500 text-sm mr-1">수정</button>
  <button type="button" class="js-remove-button bg-gray-50 text-gray-500 text-sm">삭제</button>
</li>
`;

export const lineList = lines => lines.map(lineInfo).join('');

export const lineManage = `
  <div id="main-content" class="manage bg-white p-10">
    <div class="heading d-flex">
      <h2 class="mt-1 w-100">${MENU.LINES}</h2>
      <button
        id="${SELECTOR.LINE.MAIN.ADD_MODAL_BUTTON}"
        type="button"
        class="input-submit create-line-btn modal-trigger-btn bg-cyan-300 ml-2"
      >
        노선 추가
      </button>
    </div>
    <ul id="${SELECTOR.LINE.MAIN.LIST}" class="mt-3 pl-0">
    </ul>
  </div>
`;

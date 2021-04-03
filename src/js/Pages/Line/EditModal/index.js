import ModalComponent from '../../../core/ModalComponent';
import { $ } from '../../../utils/DOM';
import modal from './template';
import { privateApis } from '../../../api';
import LOCAL_STORAGE_KEY from '../../../constants/localStorage';
import ExpiredTokenError from '../../../error/ExpiredTokenError';
import { UNAUTHENTICATED_LINK } from '../../../constants/link';
import { showSnackbar } from '../../../utils/snackbar';
import { SNACKBAR_MESSAGE } from '../../../constants/message';

class EditModal extends ModalComponent {
  constructor({
    parentNode,
    modalName,
    props: { goPage, setIsLogin, updateSubwayState },
  }) {
    super({ parentNode, modalName });

    this.goPage = goPage;
    this.setIsLogin = setIsLogin;
    this.updateSubwayState = updateSubwayState;
  }

  renderSelf() {
    this.parentNode.insertAdjacentHTML(
      'beforeend',
      modal({ state: this.state, modalName: this.modalName })
    );
  }

  addEventListeners() {
    super.addEventListeners();

    $(`.${this.modalName}-js-color-selector`).addEventListener(
      'click',
      ({ target }) => {
        if (!target.classList.contains('color-option')) return;

        const { bgColor } = target.dataset;
        $(`#${this.modalName}-color`).value = bgColor;
        $(`#${this.modalName}-color-preview`).setAttribute(
          'data-bg-color',
          bgColor
        );
      }
    );

    $(`#${this.modalName}-line-form`).addEventListener('submit', async (e) => {
      e.preventDefault();
      const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESSTOKEN);
      const name = e.target['name'].value;
      const color = e.target['subway-line-color'].value;

      try {
        await privateApis.lines.put({
          lineId: this.targetId,
          accessToken,
          body: {
            name,
            color,
          },
        });

        showSnackbar(SNACKBAR_MESSAGE.LINE.UPDATE.SUCCESS);
        await this.updateSubwayState();
      } catch (error) {
        if (error instanceof ExpiredTokenError) {
          this.setIsLogin(false);
          this.goPage(UNAUTHENTICATED_LINK.LOGIN);
        }
        console.error(error.message);
        showSnackbar(error.message || SNACKBAR_MESSAGE.LINE.UPDATE.FAIL);
      }
    });
  }

  fillTargetInForm() {
    const { name, color } = this.state.lines.find(
      (line) => line.id === Number(this.targetId)
    );

    $(`#${this.modalName}-name`).value = name;
    $(`#${this.modalName}-color`).value = color;
    $(`#${this.modalName}-color-preview`).setAttribute('data-bg-color', color);
  }

  clearForm() {
    $(`#${this.modalName}-line-form`).reset();
    $(`#${this.modalName}-color-preview`).setAttribute('data-bg-color', '');
  }

  changeModalTitle(title) {
    $(`#${this.modalName}-line-title`).innerText = title;
  }
}

export default EditModal;

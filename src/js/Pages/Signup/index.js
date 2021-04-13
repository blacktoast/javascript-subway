import { $ } from '../../utils/DOM';
import Component from '../../core/Component';
import mainTemplate from './template';
import ValidationError from '../../error/ValidationError';
import {
  VALID_MESSAGE,
  INVALID_MESSAGE,
  SNACKBAR_MESSAGE,
} from '../../constants/message';
import { LENGTH } from '../../constants/standard';
import { AUTHENTICATED_LINK } from '../../constants/link';
import publicApis from '../../api/publicApis';
import {
  isValidNameFormat,
  isValidEmailFormat,
} from '../../utils/validateFormat';
import LOCAL_STORAGE_KEY from '../../constants/localStorage';
import { showSnackbar } from '../../utils/snackbar';
import Router from '../../Router';

class Signup extends Component {
  constructor({ parentNode, props: { setIsLogin } }) {
    super({ parentNode });
    this.formValidationFlag = { name: false, email: false, password: false };

    this.setIsLogin = setIsLogin;
  }

  renderSelf() {
    this.parentNode.innerHTML = mainTemplate();
  }

  addEventListeners() {
    $('#signup-form').addEventListener(
      'focusout',
      this.validateInput.bind(this)
    );

    $('#signup-form').addEventListener('submit', async (e) => {
      e.preventDefault();

      const inVaildInputName = Object.keys(this.formValidationFlag).find(
        (key) => !this.formValidationFlag[key]
      );

      if (inVaildInputName) {
        e.target[inVaildInputName].focus();
        return;
      }

      try {
        const name = e.target['name'].value;
        const email = e.target['email'].value;
        const password = e.target['password'].value;

        await publicApis.signup(name, email, password);

        const accessToken = await publicApis.login(email, password);
        localStorage.setItem(LOCAL_STORAGE_KEY.ACCESSTOKEN, accessToken);
        this.setIsLogin(true);

        Router.goPage(AUTHENTICATED_LINK.STATION.PATH);
        showSnackbar(SNACKBAR_MESSAGE.SIGNUP.SUCCESS);
      } catch (error) {
        console.error(error);
        showSnackbar(error.message || SNACKBAR_MESSAGE.SIGNUP.FAIL);
      }
    });
  }

  async validateInput({ target, currentTarget }) {
    if (currentTarget['submit'] === target) return;

    if (currentTarget['name'] === target) {
      this.validateAndNotify(this.validateName.bind(this), target);
      return;
    }

    if (currentTarget['email'] === target) {
      await this.validateAndNotify(this.validateEmail.bind(this), target);
      return;
    }

    if (
      currentTarget['password'] === target ||
      currentTarget['password-confirm'] === target
    ) {
      const password = currentTarget['password'].value;
      const passwordConfirm = currentTarget['password-confirm'].value;
      this.validatePasswordAndNotify(password, passwordConfirm);
    }
  }

  async validateAndNotify(validate, target) {
    const name = target.name;
    const $check = $(`.js-${name}-check`);

    try {
      await validate(target.value);
      $check.classList.add('correct');
      $check.innerText = VALID_MESSAGE[name.toUpperCase()];
      this.formValidationFlag[name] = true;
    } catch (error) {
      if (error instanceof ValidationError) {
        $check.classList.remove('correct');
        $check.innerText = error.message;
        this.formValidationFlag[name] = false;
      }

      console.error(error);
    }
  }

  validateName(name) {
    if (!isValidNameFormat(name)) {
      throw new ValidationError(INVALID_MESSAGE.SIGNUP.NAME.FORMAT);
    }

    if (name.length < LENGTH.NAME.MIN || name.length > LENGTH.NAME.MAX) {
      throw new ValidationError(INVALID_MESSAGE.SIGNUP.NAME.LENGTH);
    }
  }

  async validateEmail(email) {
    if (!isValidEmailFormat(email)) {
      throw new ValidationError(INVALID_MESSAGE.SIGNUP.EMAIL.FORMAT);
    }

    const emailQuery = `?${new URLSearchParams({ email })}`;
    await publicApis.checkDuplicatedEmail(emailQuery);
  }

  validatePasswordAndNotify(password, passwordConfirm) {
    const $passwordCheck = $('.js-password-check');

    try {
      this.validatePassword(password, passwordConfirm);
      $passwordCheck.classList.add('correct');
      $passwordCheck.innerText = VALID_MESSAGE.PASSWORD;
      this.formValidationFlag.password = true;
    } catch (error) {
      if (error instanceof ValidationError) {
        $passwordCheck.classList.remove('correct');
        $passwordCheck.innerText = error.message;
        this.formValidationFlag.password = false;
      }

      console.error(error);
    }
  }

  validatePassword(password, passwordConfirm) {
    if (
      password.length < LENGTH.PASSWORD.MIN ||
      password.length > LENGTH.PASSWORD.MAX
    ) {
      throw new ValidationError(INVALID_MESSAGE.SIGNUP.PASSWORD.LENGTH);
    }

    const isSamePassword = password === passwordConfirm;

    if (!isSamePassword) {
      throw new ValidationError(INVALID_MESSAGE.SIGNUP.PASSWORD.MATCHED);
    }
  }
}

export default Signup;

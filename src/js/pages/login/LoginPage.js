import { $ } from '../../utils/DOM.js';
import { MESSAGE, SNACKBAR_MESSAGE } from '../../constants/messages.js';
import { COOKIE_KEY } from '../../constants/constants.js';
import { PATH } from '../../constants/path.js';
import { fetchLogin } from '../../API/auth.js';
import jwtToken from '../../jwtToken.js';
import loginTemplate from './loginTemplate.js';
import {
  checkEmailInputHandler,
  checkPasswordInputHandler,
} from '../../authHandlers.js';
import showSnackBar from '../../utils/snackbar.js';

class LoginPage {
  constructor(router) {
    this.router = router;
  }

  init() {
    this.renderView();
    this.bindEvents();
  }

  renderView() {
    $('#main').innerHTML = loginTemplate;
  }

  async requestLogin(request) {
    try {
      const response = await fetchLogin(request);

      if (!response.ok) {
        throw MESSAGE.ERROR.CHECK_EMAIL_AND_PASSWORD;
      }

      const { accessToken } = await response.json();
      jwtToken.setToken(COOKIE_KEY.JWT_TOKEN, accessToken);
      showSnackBar(SNACKBAR_MESSAGE.SUCCESS.LOGIN);
    } catch (error) {
      console.error(error);
      alert(error);
    } finally {
      this.router.navigate(PATH.ROOT);
    }
  }

  async loginHandler(e) {
    e.preventDefault();

    const loginData = {
      email: e.target.elements['email'].value,
      password: e.target.elements['password'].value,
    };

    await this.requestLogin(loginData);
  }

  bindCheckInputEvents() {
    $('#email').addEventListener('keyup', checkEmailInputHandler.bind(this));
    $('#password').addEventListener(
      'keyup',
      checkPasswordInputHandler.bind(this)
    );
  }

  bindEvents() {
    this.bindCheckInputEvents();

    $('#login-form').addEventListener('submit', this.loginHandler.bind(this));
    $('#signup').addEventListener('click', e => {
      e.preventDefault();

      this.router.navigate(PATH.SIGNUP);
    });
  }
}

export default LoginPage;

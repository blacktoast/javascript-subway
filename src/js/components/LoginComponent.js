import Component from './Component.js';
import LOGIN_TEMPLATE from '../templates/loginTemplate.js';
import $ from '../utils/querySelector.js';
import {
  ALERT_MESSAGE,
  CLASS_SELECTOR,
  ID_SELECTOR,
  LOCAL_STORAGE_KEY,
} from '../constants.js';
import { fetchLogin } from '../utils/fetch.js';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
  }

  initEvent() {
    const signupAnchor = $(`#${ID_SELECTOR.MAIN} .${CLASS_SELECTOR.ANCHOR}`);

    signupAnchor.addEventListener('click', this._onAnchorClicked);

    $(`#${ID_SELECTOR.LOGIN_FORM}`).addEventListener(
      'submit',
      this.#onLoginSubmit
    );
  }

  render() {
    super.render(LOGIN_TEMPLATE);
  }

  #onLoginSubmit = async event => {
    event.preventDefault();

    const email = event.target[ID_SELECTOR.LOGIN_FORM_EMAIL].value;
    const password = event.target[ID_SELECTOR.LOGIN_FORM_PASSWORD].value;
    const bodyData = { email, password };

    try {
      const response = await fetchLogin(bodyData);

      alert(ALERT_MESSAGE.LOGIN_SUCCESS);

      const { accessToken } = await response.json();

      localStorage.setItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN, accessToken);

      this.props.login();
    } catch (error) {
      this.props.treatFetchError(error);
      return;
    }
  };
}

export default LoginComponent;

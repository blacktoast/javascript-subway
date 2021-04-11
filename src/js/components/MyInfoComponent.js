import Component from './Component.js';
import MY_INFO_TEMPLATE from '../templates/myInfoTemplate.js';
import { fetchMyInfo } from '../utils/fetch.js';
import { ID_SELECTOR } from '../constants.js';
import $ from '../utils/querySelector.js';

class MyInfoComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    super.render(MY_INFO_TEMPLATE);
    this.#renderMyInfo();
  }

  async #renderMyInfo() {
    const accessToken = this.props.accessTokenState.Data;

    try {
      const response = await fetchMyInfo(accessToken);
      const { email, name } = await response.json();

      $(`#${ID_SELECTOR.MY_INFO_FORM_EMAIL}`).value = email;
      $(`#${ID_SELECTOR.MY_INFO_FORM_NAME}`).value = name;
    } catch (err) {
      alert(err.message);
      history.back();
    }
  }
}

export default MyInfoComponent;

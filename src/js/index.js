import '../css/index.css';
import { $ } from './utils/DOM.js';
import { AUTHENTICATED_LINK, UNAUTHENTICATED_LINK } from './constants/link.js';
import { headerTemplate } from './components/header.js';
import accessTokenManager from './stateManagers/AccessTokenManager.js';
import isLogin from './hook/isLogin.js';
import routeManager from './stateManagers/RouteManager.js';
import request from './utils/fetch.js';
import { BASE_URL, PATH } from './constants/url.js';
import { ERROR_MESSAGE } from './constants/message.js';
import HEADERS from './constants/headers.js';

class App {
  constructor() {
    this.accessTokenManager = accessTokenManager;
    this.routeManager = routeManager;

    this.accessTokenManager.subscribe(this.renderHeader);

    this.renderHeader();
    this.addEventListeners();
  }

  renderHeader() {
    $('.js-header').innerHTML = headerTemplate(
      isLogin() ? AUTHENTICATED_LINK : UNAUTHENTICATED_LINK
    );
  }

  addEventListeners() {
    window.addEventListener('popstate', (e) => {
      this.routeManager.render(e.state.route);
    });

    $('#app').addEventListener('click', (e) => {
      const anchor = e.target.closest('.js-link');
      if (!anchor) return;

      e.preventDefault();

      const route = anchor.getAttribute('href');
      if (route === AUTHENTICATED_LINK.LOGOUT.ROUTE) {
        this.fireAccessToken();

        this.routeManager.goPage(UNAUTHENTICATED_LINK.LOGIN.ROUTE);

        return;
      }

      const isLoginOrSignupRoute = [
        UNAUTHENTICATED_LINK.LOGIN.ROUTE,
        UNAUTHENTICATED_LINK.SIGNUP.ROUTE,
      ].includes(route);

      if (!isLoginOrSignupRoute && !this.isValidAccessToken()) {
        this.fireAccessToken();
      }

      this.routeManager.goPage(route);
    });

    window.addEventListener('load', () => {
      this.routeManager.render(location.pathname);
    });
  }

  fireAccessToken() {
    accessTokenManager.clearToken();
  }

  async isValidAccessToken() {
    try {
      const accessToken = this.accessTokenManager.getToken();
      const response = await request.get(BASE_URL + PATH.MEMBERS.ME, {
        headers: {
          ...HEADERS.CONTENT_TYPE.JSON,
          ...HEADERS.AUTHORIZATION.BEARER(accessToken),
        },
      });

      if (!response.ok) throw Error(ERROR_MESSAGE.INVALID_TOKEN);
    } catch (error) {
      console.error(error);
      return false;
    }

    return true;
  }
}

new App();

const BASE_URL = 'https://www.boorownie.com';

const option = {
  get: (token) => ({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }),

  post: (contents) => ({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(contents),
  }),

  delete: () => ({
    method: 'DELETE',
  }),

  put: (contents) => ({
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contents),
  }),
};

const request = async (url, option = {}) => {
  let response;
  try {
    response = await fetch(`${BASE_URL}${url}`, option);

    if (!response.ok) {
      throw new Error(response.message);
    }

    return response;
  } catch (err) {
    throw err;
  }
};

export const API = {
  signup: ({ email, password, name }) => {
    return request('/members', option.post({ email, password, name }));
  },

  login: ({ email, password }) => {
    return request('/login/token', option.post({ email, password }));
  },

  checkDuplicateEmail: (email) => {
    return request(`/members/check-validation?email=${email}`);
  },

  getUserInfo: (token) => {
    return request('/members/me', option.get(token));
  },

  getStationList: (token) => {
    return request('/stations', option.get(token));
  },
};

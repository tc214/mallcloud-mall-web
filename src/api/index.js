import axios from 'axios';
import store from '../store/';
const REFRESH_TOKEN_URL = '/usc/auth/user/refreshToken';
export function refreshToken () {
  return axios({
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: REFRESH_TOKEN_URL,
    auth: {
      username: 'devcloud-client-usc',
      password: 'devcloudClientSecret'
    },
    params: {
      refreshToken: store.getters.getRefreshToken,
      accessToken: store.getters.getAccessToken
    }
  });
}

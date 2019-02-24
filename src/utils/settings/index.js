const gbs = {
  host: 'http://tc.com',
  lockr_prefix: 'DEVCLOUD_DEV',
  secret_key: '^#rwd6Ffz$X5alRN',
  domain: '.tc.com',
  secret: {
    key_str: '^#rwd6Ffz$X5alRN',
    iv_str: '^#rwd6Ffz$X5alRN'
  }
};
const cbs = {};

if (process.env.NODE_ENV === 'production') {
  gbs.domain = '.tc.com';
} else {
  gbs.domain = '.tc.com';
  gbs.lockr_prefix += 'DEV_';
}

const enums = {
  USER: {
    LOGIN_NAME: 'LOGIN_NAME',
    MENU_LIST: 'MENU_LIST',
    REMEMBER_ME: 'REMEMBER_ME',
    AUTH_TOKEN: 'AUTH_TOKEN',
    REFRESH_TOKEN: 'REFRESH_TOKEN',
    REDIRECT_URI: 'REDIRECT_URI'
  }
};

export {
  gbs,
  cbs,
  enums
};

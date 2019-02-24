import { gbs } from '../settings';
import Cookies from 'js-cookie';

class MyCookie {
  constructor () {
    this.pcPrefix = gbs.lockr_prefix;
    this.secretKey = gbs.secret_key;
    this.domain = gbs.domain;
    this.expireTime = 7200;
  }

  set (cookieParam) {
    let {key, value, expires, path, success} = cookieParam;
    MyCookie.checkKey(key);
    key = this.pcPrefix + key;
    Cookies.set(key, value, {expires: expires || this.expireTime, path: path || '/', domain: this.domain});
    success && success();
  }

  get (key) {
    MyCookie.checkKey(key);
    return Cookies.get(this.pcPrefix + key);
  }

  delete (cookieParam) {
    let {key, path, success} = cookieParam;
    MyCookie.checkKey(key);
    Cookies.remove(this.pcPrefix + key, {path: path || '/', domain: this.domain});
    success && success();
  }

  geteAll () {
    return Cookies.get();
  }

  static checkKey (key) {
    if (!key) {
      throw new Error('没有找到key。');
    }
    if (typeof key === 'object') {
      throw new Error('key不能是一个对象。');
    }
  }
}

export default new MyCookie();

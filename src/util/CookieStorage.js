import Cookies from 'js-cookie';
export class CookieStorage {
    static authPrefix = 'advanto';
    // set item with the key
    static setItem(key, value) {
        Cookies.set(this.authPrefix + key, value, {
            secure: true
        });
        return Cookies.get(key);
    }
    // get item with the key
    static getItem(key) {
        return Cookies.get(this.authPrefix + key);
    }
    // remove item with the key
    static removeItem(key) {
        Cookies.remove(this.authPrefix + key);
    }
    // Clear out the storage
    static clear() {
        const cookies = Object.keys(Cookies.get());
        for (let i = 0; i < cookies.length; i++) {
            if (cookies[i].indexOf(this.authPrefix) === 0) {
                Cookies.remove(cookies[i]);
            }
        }
    }
}
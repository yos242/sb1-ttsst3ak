const PREFIX = 'paypal_';

export const storage = {
  set: (key: string, value: string) => {
    sessionStorage.setItem(`${PREFIX}${key}`, value);
  },
  
  get: (key: string) => {
    return sessionStorage.getItem(`${PREFIX}${key}`);
  },
  
  remove: (key: string) => {
    sessionStorage.removeItem(`${PREFIX}${key}`);
  },
  
  clear: () => {
    Object.keys(sessionStorage)
      .filter(key => key.startsWith(PREFIX))
      .forEach(key => sessionStorage.removeItem(key));
  }
};
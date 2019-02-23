export const withComponent = (Base = class {}) => class extends Base {
  _upgradeProperties (propNames) {
    propNames.forEach(propName => {
      if (this.hasOwnProperty(propName)) {
        const value = this[propName];
        delete this[propName];
        this[propName] = value;
      }
    });
  }

  _dispatchEventAndCallMethod (evtName, detail, target = this) {
    const options = { bubbles: true, detail };
    const event = new CustomEvent(evtName, options);
    const method = target[`on${evtName}`];

    target.dispatchEvent(event);

    if (typeof method === 'function') {
      method(event);
    }
  }
};

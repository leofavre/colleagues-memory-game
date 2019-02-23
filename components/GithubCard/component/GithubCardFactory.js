import { setAttr } from '../../../helpers/setAttr.js';

export const GithubCardFactory = (Base = class {}) => view =>
  class extends Base {
    constructor () {
      super();
      this.attachShadow({ mode: 'open' });
      this.view = view;
      this.shadowRoot.appendChild(this.view.content.cloneNode(true));
    }

    static get observedAttributes () {
      return ['revealed', 'username'];
    }

    get revealed () {
      return this.hasAttribute('revealed');
    }

    set revealed (value) {
      setAttr(this, 'revealed', value);
    }

    get username () {
      return this.getAttribute('username');
    }

    set username (value) {
      setAttr(this, 'username', value);
    }
  };

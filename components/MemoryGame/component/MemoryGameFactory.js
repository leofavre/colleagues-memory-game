import { upperCaseFirst } from '../../../helpers/upperCaseFirst.js';
import { parseNumericAttr } from '../../../helpers/parseNumericAttr.js';
import { parseArrayAttr } from '../../../helpers/parseArrayAttr.js';
import { setAttr } from '../../../helpers/setAttr.js';
import { delay } from '../../../helpers/delay.js';

export const MemoryGameFactory = (Base = class {}) => view =>
  class extends Base {
    constructor () {
      super();
      this.attachShadow({ mode: 'open' });
      this.view = view;
      this.shadowRoot.appendChild(this.view.content.cloneNode(true));
    }

    get rows () {
      return Math.round(parseNumericAttr(this.getAttribute('rows')));
    }

    set rows (value) {
      setAttr(this, 'rows', value);
    }

    get columns () {
      return Math.round(parseNumericAttr(this.getAttribute('columns')));
    }

    set columns (value) {
      setAttr(this, 'columns', value);
    }

    get selected () {
      return parseArrayAttr(this.getAttribute('selected'));
    }

    set selected (value) {
      setAttr(this, 'selected', value);
    }

    get total () {
      return this.rows * this.columns;
    }

    get renderRoot () {
      return this.shadowRoot;
    }

    get board () {
      return this.renderRoot.querySelector('div');
    }

    get cards () {
      return Array.from(this.children);
    }

    static get observedAttributes () {
      return ['rows', 'columns', 'selected'];
    }

    connectedCallback () {
      if (super.connectedCallback) {
        super.connectedCallback();
      }

      this._upgradeProperties(this.constructor.observedAttributes);
    }

    attributeChangedCallback (attrName, oldValue, newValue) {
      if (super.attributeChangedCallback) {
        super.attributeChangedCallback(attrName, oldValue, newValue);
      }

      if (oldValue !== newValue) {
        this[`_handle${upperCaseFirst(attrName)}Changed`](newValue);
      }
    }

    async _handleRowsChanged (rows) {
      await delay();
      this.board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    }

    async _handleColumnsChanged (columns) {
      await delay();
      this.board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    }

    async _handleSelectedChanged (selected) {
      await delay();
      this.cards.forEach((card, index) => {
        setAttr(card, 'selected', selected.includes(index));
      });
    }
  };

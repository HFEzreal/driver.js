import Overlay from './overlay';
import Element from './element';
import './polyfill';

/**
 * Plugin class that drives the plugin
 */
export default class Sholo {
  constructor({ opacity = 0.75, padding = 5 } = {}) {
    this.overlay = new Overlay({
      opacity,
      padding,
    });
  }

  highlight(selector) {
    let domElement;

    if (typeof selector === 'string') {
      domElement = document.querySelector(selector);
    } else if (typeof selector === 'object') {
      domElement = selector;
    } else {
      throw new Error('Element can only be string or the dom element');
    }

    if (domElement) {
      const element = new Element(domElement);
      this.overlay.highlight(element);
    } else {
      this.overlay.clear();
    }
  }
}

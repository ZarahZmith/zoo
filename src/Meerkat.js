(function() {
  'use strict';

  window.zoo = window.zoo || {};

  /**
   * Function that establishes the features of an individual animal, in this case a Meerkat, using Animal.js as the parent function
   * @type {Object}
   */
  window.zoo.Meerkat = class Meerkat extends Animal {

    constructor(name, dateOfBirth) {

      super(name, dateOfBirth);

    }

    static scientificName() {
      return 'Suricata suricatta';
    }

  };

}());

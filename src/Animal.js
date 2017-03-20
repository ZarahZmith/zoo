(function() {
  'use strict';

  window.zoo = window.zoo || {};


  /**
   * Establishes qualities each animal will have
   * @type {Object}
   */
  window.zoo.Animal = class Animal() {
    constructor(name, dateOfBirth) {

      this.name = name;
      this.dob = dateOfBirth;

    }
  };

}());

(function() {
  'use strict';

  window.zoo = window.zoo || {};


  /**
   * Establishes function discerning qualities each individual animal must have
   * @type {Object}
   */
  window.zoo.Animal = class Animal {
    constructor(name, dateOfBirth) {

      this.name = name;

      if (!(dateOfBirth instanceof Date)) {
        dateOfBirth = new Date();
      }
      this.dob = dateOfBirth;

      this.age = dateOfBirth/(new Date());

    }

    toString() {
      return this.name + ', born ' + this.dob;
    }
  };

}());

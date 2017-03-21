(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

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

    giveBirth(meerkat) {
      this.giveBirth = giveBirth;
    }

    burrowEfficiency(speed, depth) {
      return (speed * depth);
    }

    toString() {
      return this.name + ', scienficically known as ' + this.scientificName;
    }

  };

}());

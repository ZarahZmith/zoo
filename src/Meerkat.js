(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  /**
   * Function that establishes the features of an individual animal, in this case a Meerkat, using Animal.js as the parent function
   * @type {Object}
   */
  window.zoo.Meerkat = class Meerkat extends Animal {

    /**
     * Re-establishes the arguments in the parent function in Animal.js
     */
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
    }

    /**
     * Creates a function to constantly return the scientific name of the animal that is not subject to change
     */
    static scientificName() {
      return 'Suricata suricatta';
    }

    /**
     * Creates the function for the specific animal's birth outcome
     */
    giveBirth(meerkat) {
      this.giveBirth = giveBirth;
    }

    /**
     * This function calculates the speed and depth the animal burrowed to return the burrow efficiency
     */
    burrowEfficiency(speed, depth) {
      return (speed * depth);
    }

    /**
     * Returns the name of the anaimal as well as a string which related it to it's scientific name
     */
    toString() {
      return this.name + ', scienficically known as ' + this.scientificName;
    }

  };

}());

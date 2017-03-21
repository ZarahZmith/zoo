(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  /**
   * Connects the individual animal to it's parent class, in this case Animal
   * @type {Object}
   */
  window.zoo.Elephant = class Elephant extends Animal {

    /**
     * Re-establishes the arguments of the parent function in Animal.js
     */
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
    }

    /**
     * Creates a function to constantly return the scientific name of the animal, the scientific name is not subject to change
     */
    static scientificName() {
      return 'Loxodonta';
    }

    /**
     * Creates the function for the specific animal's birth outcome
     */
    giveBirth(elephant) {
      this.giveBirth = giveBirth;
    }

    /**
     * Method by which the Animal migrates calculated by distance times time
     */
    migrate(distance, time) {
      return (distance * time);
    }


    /**
     * Returns the name of the anaimal as well as a string which related it to it's scientific name
     */
    toString() {
      return this.name + ', scienficically known as ' + this.scientificName;
    }

  };


}());

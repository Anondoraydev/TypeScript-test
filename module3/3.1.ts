{
  //oop -class

  class Amimal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }
  }

  const dog = new Amimal('German Shepard', 'dog', 'Ghe w Ghew');
  const cat = new Amimal('Persian', 'cat', 'miw miw');

  //
}

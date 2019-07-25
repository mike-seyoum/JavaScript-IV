/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
    === GameObject ===
    * createdAt
    * name
    * dimensions (These represent the character's size in the video game)
    * destroy() // prototype method that returns: `${this.name} was removed from the game.`
    */
    function GameObject (attrs){
        this.createdAt = attrs.createdAt;
        this.name = attrs.name;
        this.dimensions = attrs.dimensions;
    };
    GameObject.prototype.destroy = function(){
        return `${this.name} was removed from the game.`
    };
    /*
        === CharacterStats ===
        * healthPoints
        * takeDamage() // prototype method -> returns the string '<object name> took damage.'
        * should inherit destroy() from GameObject's prototype
    */
    function CharacterStats (attrs2){
        GameObject.call(this, attrs2) ;
        this.healthPoints = attrs2.healthPoints;
        this.strength = attrs2.strength;
    };
    CharacterStats.prototype = Object.create(GameObject.prototype);
    CharacterStats.prototype.takeDamage = function(){
        return `${this.name} took damage ${this.strength}.`
    };
    CharacterStats.prototype.giveDamage = function(){
        return `${this.name} gave damage ${this.strength}.`
    }
    
    /*
        === Humanoid (Having an appearance or character resembling that of a human.) ===
        * team
        * weapons
        * language
        * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
        * should inherit destroy() from GameObject through CharacterStats
        * should inherit takeDamage() from CharacterStats
    */
    function Humanoid (attrs3) {
        CharacterStats.call(this, attrs3)
        this.team = attrs3.team;
        this.weapons = attrs3.weapons;
        this.language = attrs3.language;
    };
    Humanoid.prototype = Object.create(CharacterStats.prototype);
    Humanoid.prototype.greet = function(){
        return `${this.name} offers a greeting in ${this.language}`;
    };
    Humanoid.prototype.attack = function(target){
        target.healthPoints -= 5;
        if (target.healthPoints === 0){
        return target.destroy();
        } else {
        return target.healthPoints;
    };
    };
    // strecth Goals!
    
    function Hero (attrs4) {
        Humanoid.call(this, attrs4);
        this.title = attrs4.title;
        this.motivation = attrs4.motivation;
        this.saying = attrs4.saying;
    };
    
    Hero.prototype = Object.create(Humanoid.prototype);
    Hero.prototype.shout = function(){
        return `The ${this.title} ${this.name}, calls out their famous saying: ${this.saying}`;
    };
    Hero.prototype.motive = function(){
        return `The ${this.title} ${this.name}, calls out their motivation, ${this.motivation}`;
    };
    Hero.prototype.attack = function(target){
        target.healthPoints -= 10;
        if (target.healthPoints === 0){
        return target.destroy();
        } else {
        return `${target.name} has ${target.healthPoints} hit points left!`;
    };
    };
    Hero.prototype.screech = function(){
        return `${this.name}, the Hero, gave out a loud victory screech over the land at notMack's defeat!`;
    };
    
    function Villain (attrs5) {
        Hero.call(this, attrs5);
        this.evilplan = attrs5.evilplan;
    };
    
    Villain.prototype = Object.create(Hero.prototype);
    Villain.prototype.cackle = function (){
        return `Forever a villain, foolish and procrastinating, ${this.name} gives their evil plan: ${this.evilplan}!`
    }
    
    /*
        * Inheritance chain: GameObject -> CharacterStats -> Humanoid
        * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
        * Instances of CharacterStats should have all of the same properties as GameObject.
    */
    
    // Test you work by un-commenting these 3 objects and the list of console logs below:
    
    
        const mage = new Humanoid({
        createdAt: new Date(),
        dimensions: {
            length: 2,
            width: 1,
            height: 1,
        },
        healthPoints: 5,
        name: 'Bruce',
        team: 'Mage Guild',
        weapons: [
            'Staff of Shamalama',
        ],
        language: 'Common Tongue',
        });
    
        const swordsman = new Humanoid({
        createdAt: new Date(),
        dimensions: {
            length: 2,
            width: 2,
            height: 2,
        },
        healthPoints: 15,
        name: 'Sir Mustachio',
        team: 'The Round Table',
        weapons: [
            'Giant Sword',
            'Shield',
        ],
        language: 'Common Tongue',
        });
    
        const archer = new Humanoid({
        createdAt: new Date(),
        dimensions: {
            length: 1,
            width: 2,
            height: 4,
        },
        healthPoints: 10,
        name: 'Lilith',
        team: 'Forest Kingdom',
        weapons: [
            'Bow',
            'Dagger',
        ],
        language: 'Elvish',
        });
    
        console.log(mage.createdAt); // Today's date
        console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
        console.log(swordsman.healthPoints); // 15
        console.log(mage.name); // Bruce
        console.log(swordsman.team); // The Round Table
        console.log(mage.weapons); // Staff of Shamalama
        console.log(archer.language); // Elvish
        console.log(archer.greet()); // Lilith offers a greeting in Elvish.
        console.log(mage.takeDamage()); // Bruce took damage.
        console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    
    
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
//js is an object oriented programing language, and classes are the blueprint for objects
//classes desrcibe what an object looks like and how it behaves while the object carries it out
//static methods in classes are functions that are related to a class but dont need any personal info from it (doesnt need an instance) so you dont call it by an instance, you call on the actual class
//regular inheritance with extends and then super keyword

//easy exercise 1: create animal class and then dog and cat child classes from it
class Animal{
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    get getName(){
        return this.name;
    }
    set setName(newName){
        this.name = newName;
    }
    static welcome(){
        return 'Animals are fun';
    }
}
class Dog extends Animal{
    constructor(name, age, color, legs, sound){
        super(name, age, color, legs);
        this.sound= sound;
    }
    get getSound(){
        return this.sound;
    }
    woof(){
        return this.sound.repeat(2);
    }
    static welcome(){
        return super.welcome() + 'This is a dog tho';
    }
}
let a1 = new Animal('steve',20,'brown',2);
let d1 = new Dog('rex',21,'black',4,'woof');
d1.setName = 'davo';
console.log(d1.getName);
console.log(d1.getSound);
console.log(d1.woof());
console.log(Dog.welcome());
console.log(Animal.welcome());


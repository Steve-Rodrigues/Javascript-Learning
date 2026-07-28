//objects have properties and those properites have values which means it is a key-vaue pair with key as property and value as the value
const person = {
    firstName: 'Steve',
    lastName:'Rodrigues',
    skills:['html','css','js','python','mathematics'],
    student:true,
    getName(){
    return `${this.firstName} ${this.lastName} has the skills of ${this.skills}`;
    }
};//object literal
//can access the properties and their values by eithe rusing dot notation or using square bracket notation
console.log(person.skills);
console.log(person['firstName']);//must be in quotes
console.log(person.getName());
//since objects are mutable because of being non-primitive we can add keys 
person.nationality = 'American';
person.skills.push('AI');
person.getCountry = function(){
    return `${this.nationality}`;
}
//obj methods: obj.assign, obj.keys, obj.values, obj.entries
//assign create a shallow copy so it mutates the original object
const copyPerson = Object.assign({grade: 'A'},person);
//to get keys and values use Object.entries()
const entries = Object.entries(person);
console.log(entries[0]);//first property/value pair because list of lists
//check if a object has a prperty by using the .hasOwnProperty('prop')
console.log(person.hasOwnProperty('skills'));
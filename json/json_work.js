//json is just a lightweight data format to send and recieve data in. it gets the name js object notation because json is just a string form of a js object literal
//it could also be an array of objects too but overall they are in js object shape typically
//to turn an object into json (string format) we use the JSON object and call the .stringify(obj, filter, spacing) method which takes an object to convert to string json, and optional filter
//filter is a list of the keys you want to include in the json you are sending or storing from the obj, and spacing is just a number of how much indent you want for format
//then to go from json to obj use .parse(json, reciever) where json is the string u parse into the object and reciever is a optoinal call back to transform some of the data because not all json is converted nicely
//for ex, dates are not normal in json so you could take in the (key,val) check if its a date time and convert it to a new date object before storing in the object

//exercises:
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'];//changing this into json
const json = JSON.stringify(skills);
console.log(typeof json);//now type string
let age = 250;//stringify this
age = JSON.stringify(age);

const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
} //this is a student object, lets turn it into json ready to be sent through a http request by strinigfying it
const stduentJson = JSON.stringify(student, null, 2);//keeping all of the properties but adding 2 indentation spaces
const filteredJSON = JSON.stringify(student, ['firstName','lastName','skills'],2);//turned student into a json but only lept the firstname, lastname, and skills properties to send over
//adding some json data we recieved: this is going to be an object made of person objects as the values
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;
//wrapping this in a try/catch in case it parses weird into object
let personObject;//declared outisde so we can actually use it outside of the block
try{
    personObject = JSON.parse(txt);
}
catch(err){
    console.error('Was unable to parse JSON into object: ', err.message);
}
finally{
    if(typeof personObject == 'object'){
        console.log('Parsed succesfully');
    }
}
//lets see who has over five skills
let highSkilled = [];
for(person of Object.keys(personObject)){
    if(personObject[person].skills.length > 5){
        highSkilled.push([person,personObject[person].skills.length]);
    }
}
console.table(highSkilled);
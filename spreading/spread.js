//destructuring is the same as unpacking, it allows you to either take an array and assign the elemenets into individual variabls or assign values of an iterable to that array
//spreading is putting the elements in an iterable by destructuring inside of it
const constants = [2.72, 3.14, 9.81, 37, 100];//going to unpack this ito vars
let [e,pi,grav,humantemp,boiling] = constants;
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];//assiging all of these elements to var
const [fin,est,swe,den,nor] = countries;//takes an iterable and assigns each index to a value
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
};//going to unpack using the properties
const{width,height,area,perimeter:p} = rectangle;//accesses the properties by using the exact name, but to change you set it in the unpacking

const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
];

for(let {name,scores,skills,age} of users){
    console.log(name,scores,skills);//unpacking the key values of every index
}
const lessSkills = [];
for(let {name,skills} of users){
    if(skills.length < 2){lessSkills.push(name,skills);}
}

//const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
//const [name,skills,[html,css,js,react]] = student;//unpack while unpacking
//console.log(name,skills,js,react);

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];//want to convert this to an array of objects
function convertToObj(arr){
    const newArr = [];
    for(let [nameV,skillsV,scoresV] of arr){
        newArr.push({name:nameV, skills:skillsV, scores: scoresV});
    }
    return newArr;
}
console.log(convertToObj(students)[0]);//converted to object
    const student1 = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    };
    //building a copy of the studetn and then addign skills to it
    const newStudent = {...student1, skills: {...student1.skills, frontEnd: [...student1.skills.frontEnd, {skill:'Bootstrap', level:8}], backEnd: [...student1.skills.backEnd,{skill:'SQL',level:100}]}};
    console.log(newStudent.skills.backEnd[2]);

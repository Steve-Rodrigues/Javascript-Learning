//sets and maps: sets are collections of unique elements and maps are a key-val data structure that allow the key to be anything rather than the regular just string rule of objects(dicts)
//exersice number 1

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const seta = new Set([...a]);//using the unpacking in js to get all the values
const setb = new Set([...b]);

console.log(seta);
const countries = ['Finland', 'Sweden', 'Norway'];
const addOns = ['Canada', 'Mexico'];
const both = countries.concat(addOns);
const set1 = new Set();
for(let i=0; i<11; i++){
    set1.add(i);
}
set1.delete(9);//removed 9
console.log(set1.has(9));//returns false now
set1.clear();//removed all from the set
for(let c of both){set1.add(c);}
const map = new Map();
for(let c of countries){
    map.set(c,c.length);
}
console.log(map.get('Finland'));//getting finalnds value

//getting the union of a and b from above (all values from either)
const union = new Set([...a,...b]);//unpach all from both
//getting intersection of a with b (all in both)
const intersection = a.filter(x => b.includes(x));//returns set of all the leemnts that a and b have
const inter = new Set(intersection);
//getting the difference of a from b (all elements that are in a but not b)
const diff = a.filter(x => !(b.includes(x)));
const diffSet = new Set(diff);
//getting the map values and keys
for(let [key,val] of map){
    console.log(key,val);
}
//this is going to be a simple class to show how to export it for use in another file so everything is not so cluttered
function add(x,y){
    return x+y;
}
const sub = (a,b) => a-b;
module.exports = {add,sub};

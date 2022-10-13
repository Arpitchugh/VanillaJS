function myCounter(){
    let count =0;
    return function(){
        count ++;
        return count;
    }
}
const counter = myCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

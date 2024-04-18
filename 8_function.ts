function print() {
  console.log("hello");
}
// print()

function printAdd(a: number, b: number) {
  console.log(a + b);
}
// printAdd(5,6)

// normal
function add(a: number, b: number) {
  return a + b;
}

// anonymous
const add2 = function (a: number, b: number) {
  return a + b;
};

// arrow
const add3 = (a: number, b: number) => {
  return a + b;
};

console.log(add3(1, 2));
console.log(add2(1, 2));
console.log(add(1, 2)); //3

// const celclusToFahrenheit = (celclus:number)=>{
//     let fahrenheit = celclus * 9/5 +32
//     return fahrenheit
// }

const celclusToFahrenheit = (celclus: number) => (celclus * 9) / 5 + 32;

console.log(celclusToFahrenheit(35));

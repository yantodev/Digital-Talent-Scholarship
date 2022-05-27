// let fruit = ['apple', 'mango', 'banana', 'orange', 'strawberry'];
// fruit.push('pineapple');

// console.log(fruit);

let fruitsSet2 = new Set();
// add is a function that adds an element to the set
fruitsSet2.add('apple');
fruitsSet2.add('mango');
fruitsSet2.add('banana');
fruitsSet2.add('orange');
fruitsSet2.add('strawberry');
fruitsSet2.add('pineapple');
fruitsSet2.add(123);
console.log('====================================');
console.log(fruitsSet2);
console.log('====================================');
// has is a method that returns true if the value is present in the set
console.log("====================================");
console.log("type boolean");
console.log(fruitsSet2.has('apple')); // true
console.log(fruitsSet2.has('mangga'));  // false
console.log("=====================================");

// map is a data structure that maps keys to values
//parameter 1: key
//parameter 2: value
let fruitsMap = new Map();
fruitsMap.set('apple', 'red');
fruitsMap.set('mango', 'yellow');
fruitsMap.set('banana', 'yellow');
fruitsMap.set('orange', 'orange'); 

console.log('====================================');
console.log(fruitsMap);
console.log("get data color from mango => ", fruitsMap.get('mango'));
console.log('====================================');
const myArray = [1,2,3,4,5,6]
const muHeros = ['nikhil','klau']

// console.log(muHeros);

const myarr2 = new Array(1,2,3,4)
// console.log(myArray[1]);
// array methods

myArray.push(6) //for adding value in th e arrray
// console.log(myArray);

myArray.pop() ///to remove the element last element will remove in the array
// console.log(myArray);

myArray.unshift(9)//to adddin the 1st postion in the array
// console.log(myArray);

// console.log(myArray.includes(9));

// console.log(myArray.indexOf(2));


const newarr = myArray.join()



//  console.log(myArray);
// console.log(newarr);

// slice ,splice 

console.log("A" , myArray);
const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log(myArray);

console.log("b" , myArray);
const myn2 =myArray.splice(1,3)
console.log(myn2);
console.log(myArray);

///primitive dattype

//there are 7types string,Number,null,undefined,Boolean ,symbol ,Bigint

//reference (NONPRIMITIVE)

//ARRAY,Object ,Function

const id = Symbol('123')
const idValue = Symbol("123")

// console.log(id);
// console.log(idValue);
// console.log( id == idValue);
// console.log(typeof id);


const bigNUmber = 44654415642164768348645684n

// console.log(typeof bigNUmber);

const hero  = ["shaktiman","pruthib","chandragupta"]

const details = {
    name : "nikhilesh",
    age : 20,
    city : "bam"
}

const myFunction = function(){console.log("hellow nikhilesh")}

// console.log( typeof hero);
// console.log( typeof details);
// console.log(myFunction);
// console.log(typeof myFunction);


// +=======++++++++=====++++++=============
//  stack(primitive),heap(nonprimtive)

let myYoutubename = "hiteshchoudhrydotcom"
let anotheNamme = myYoutubename
// anotheNamme = "chai aur code"
 console.log(myYoutubename);
 console.log(anotheNamme);

 let userOne ={

    email : "nikhilesh@mal.com",
    upi : "sbi#ybl"

 }
 let userTwo = userOne
userTwo.email = "nikhilcode@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
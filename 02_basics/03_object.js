//constructure obj always make singleton(singleton only make one copy)
//singleton

// Object.create  //this method called constructor method



//object literals

const mysym = Symbol("nik")


const jsUser = {
    name:'hitesh',
    age:20,
    "year" : "2nd",
    [mysym] : "key1",

    location : "bam",
    mail:"nik@gmail.com",
    loggedin:false,
    lasrLogedIndays : ['monday','tuesday']
}
// console.log( jsUser[mysym]);

// console.log(jsUser.mail);
// console.log(jsUser["mail"]);
// console.log(jsUser.year);
// console.log(jsUser[mysym]);
// // console.log(typeof jsUser.mysym);
// console.log(mysym);
// console.log(typeof jsUser [mysym] );
// console.log(jsUser .mysym);
// console.log(jsUser);


jsUser.mail = "nikhilecode@gmil.com"

// Object.freeze(jsUser)
jsUser.mail = "nik@123.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingtwo = function(){
    console.log(`hellow js user,${this.name}`);
}

console.log(jsUser .greeting());
console.log(jsUser .greetingtwo());



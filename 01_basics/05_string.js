 const name ="nikhilesh"
 const repoCount = "5"
 //console.log( name + repoCount + "value");//its outdated so dont use it 

 console.log(`hellow my name is ${name} and my repo count is ${repoCount}`);
 const gameName = new String("hiteshhc")
//  console.log(gameName);
//  console.log(gameName[2]);
//  console.log(gameName.__proto__);

//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());

//  console.log(gameName.charAt(2));

 const newString = gameName.substring(0,4)
 console.log(newString);

 const otherString = gameName.slice(-6 ,4)
console.log(otherString);

const newStringOne ="    hitesh    "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));

console.log(url.includes('nikhilesh'));
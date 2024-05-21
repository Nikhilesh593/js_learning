let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate .toLocaleDateString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toLocaleString());
console.log(typeof mydate); //my date
let muCreatedDate =new Date(2003 ,11 ,23)
// console.log(muCreatedDate .toString());
// console.log(muCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(muCreatedDate.getTime()); //its used to compare second from tha specxific date
// console.log(Math.floor(Date.now()/1000));
let newdate = new Date()
// console.log(newdate);
// console.log(newdate.getMonth() +1);
// console.log(newdate . getTime().toLocaleString());

console.log(newdate.toLocaleString('default' ,{weekday:"narrow"}))
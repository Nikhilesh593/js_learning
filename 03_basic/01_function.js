// console.log('h');
// console.log('i');
// console.log('t');

//we using function to now repeat samethings in many times instant of writ one times and when we use the same particular form then it return the things


function sayMyname (){
    console.log('h');
console.log('i');
console.log('t');


}
// sayMyname()
// console.log(typeof sayMyname);


// function addTwonumber ( number1 ,number2){
//     console.log(number1 + number2);

// }
function addTwonumber ( number1 ,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    console.log(number1 + number2);//after retun what evern we rtinet int is not excuted

}
addTwonumber(3 ,5)

const result = addTwonumber(3,5)
// console.log( "Result :", result ); /// wehn im printgn the variable result thn it not printing bcz functon not returning any number so there is another method for functon defining

function loginusermessage (username){ // functon loginusernmaemessage (username = 'nikhilesh) we can pass this value also
    if(username=== undefined){ //if(!username we can also write)
console.log('pleasew enter a valid username');
return
    }
    return `${username} just llogged in`
}


// console.log( loginusermessage( 'nikhilesh')); 
// console.log( loginusermessage( )); 


function calculatedCartprice (...num1){
    return num1
}
// console.log(calculatedCartprice(200, 400 , 500));


function calculatedCartprice (val1 , val2 , ...num1){
    return num1
}
// console.log(calculatedCartprice(200, 400 , 500,380));
// op - [ 500, 380 ] //in this casse the first 2 argument go to val1 ,val2

//use oof object in functon

const user = {
    username : 'nikhilesh',
    price : 250
}
 function handelObject(anyobjct){
    console.log(`username is ${anyobjct.username} and price is ${anyobjct.price}`);
 }

 handelObject(user)
 handelObject({
    username : "tapam",
    price : 399
 })
// use of arry in function

 const myNewarray = [200,400,6798,980]

 function returnseconvalue (getarray){
    return getarray[1]
 }
 console.log(returnseconvalue(myNewarray));

 console.log(returnseconvalue([43878,2344,42]));
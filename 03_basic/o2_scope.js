//scope means when we define in btwen function{} this called local scope and its cvalue shoudnot acess in outside

// when we declearing it in outsidethe function then it is called global scope and its acssable in any where

let a = 3300 //variable scope
if (true){
    let a =10
    const b = 20
    var c=34 
    // console.log('inner:' , a); //this is called block scope
   
}

// console.log( a );


//nested function
function one (){
    const username = "hitesh"

    function two (){
        const website = 'youtube'
        console.log(username);
    } ///inside function can acess outside function but not viceversa
    // console.log(website);
    // two()
}

// one()

if (true) {
    const username = 'hitesh'
    if (username === "hitesh") {
        const website = 'youtube'
        // console.log(username + website);
        
    }
    // console.log(website);
    
}


// +++++=========+++++  intresting ++========++++++++

console.log(addone(5));  
 function addone(num){
  return num + 1
    
 } //here we can acess addone bcz when im declearing the function there i have not store in any const var


//  addone(5)
addTwo(5)
 const addTwo = function(num){
    return num + 2
 }
//   
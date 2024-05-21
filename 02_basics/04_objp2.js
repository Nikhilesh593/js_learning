// const tinderUser = new Object() //singletone obj decleraation
const tinderUser = {} //its aanother method of obj decleration its not singletone obj decleratio

tinderUser.id = '123abc'
tinderUser.name = 'nikhilesh'
tinderUser.loggedin = false
console.log(tinderUser);

const newUser ={
    email : "nik@gmail.com",
    fullname :{
        userfullname :{
            firstname : "nikhilesh",
            lastname : "sahu"
        }
    }
}

// console.log(newUser);
// console.log(newUser.fullname.  userfullname);

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

// const obj3 = {obj1,obj2}
// console.log(obj3);  // its treating individual obj as a key

// const obj3 = Object.assign({} ,obj1 ,obj2)
// console.log(obj3);

const obj3 = {...obj1,...obj2}
// console.log(obj3); //we use it method frequently 

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('islogged'));


const course ={
    coursename :"js in hndi",
    price : "999",
    courseinstructor :'hitesh'

}
  console.log(course.courseinstructor)

  const {courseinstructor} = course  //its is method acesssing obj without mentioning the obj name
  console.log(courseinstructor);


  // anothr method we can usee any name in the {courseinstructor : inst} then acessing this valu by the use of inst

  

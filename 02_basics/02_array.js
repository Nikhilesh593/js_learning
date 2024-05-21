
const marvel_heros = ['thor', 'ironman' , 'spiderman']
const dc_heros = ["superman", "gangu bhai",'superman']

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);


 const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros );

const allNewHeros = [...marvel_heros,...dc_heros]
// console.log(allNewHeros);

const anotherarray = [1,2,3,[4,5,6],[6,7,[4,5]]]
const real_another_arra = anotherarray.flat(Infinity)
// console.log(real_another_arra);

console.log(Array .isArray('hitesh'))
console.log(Array.from('hitesh'));
console.log(Array.from({name:'nikhilesh'}));//u shopuld define from which it will makke a array

let score1 = 100
let score2 = 300
let score3 = 699
console.log(Array.of(score1,score2,score3));


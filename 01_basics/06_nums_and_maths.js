const score = 100


/*
console.log(score)

//to expliclty define number datatype
const balance = new Number(100)
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNum = 23.8777
console.log(otherNum.toPrecision(3))
console.log(otherNum.toPrecision(2))

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'))

*/

//+++++++++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.4))
// console.log(Math.min(0 , 7 , 55, 356))

console.log(Math.random())  // gives values b/w 0 to 1 only
console.log(Math.random()*10 )//numbers from 0 to 9
console.log(Math.floor((Math.random()*10) +1)) // to avoid 0 , nums from 1 to 9 will come

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// when we need to define the min and max , that is we ony want random numbers b/w min and max defined     //@
const min = 10                                                                                             //@
const max = 20                                                                                             //@
console.log(Math.floor(Math.random() * (max - min + 1)) + min )                                            //@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

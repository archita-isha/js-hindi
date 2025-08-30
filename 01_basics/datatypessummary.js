//Primitive datatypes - these are call by values , means the copy of the data are passed 
//7 - types ( String , NULL , Boolean . number , undefined ,Symbol ,  BigInt)

//Non Primitive (Reference)
// Objects , Strings , Functions

//js is a dynamically typed language that is the datatype is determined at runtime


//declaring datatypes
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail ; // ways to declare or use undefined

const id = Symbol("123")
const anotherId = Symbol("123")
/*
console.log(id === anotherId)
*/

const num = 2356789987654456768765n

//Non Primitive (Reference)
// Objects , Strings , Functions

const heros =['batman', 'superman', 'padman'];

let myObj ={
    name : "archi",
    age: 22
}   //key value pair

const myFun = function(){
    console.loh("hello world");
}

/*
console.log(typeof num)
console.log(typeof scoreValue )
console.log(typeof myFun)  // datatype is object function
*/


//read datatypes on ecma 


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
//two types of memory

//primitive ->stack
//non primitive ->heap

let myName = "Archita"
let anotherName = myName
anotherName = "Isha"


console.log(myName)
console.log(anotherName)

let userOne = {
    email : "architaish@gmail.com",
    upi : "archi@hdfc"
}

let userTwo = userOne
userTwo.email = "isha@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)


//both objects email have changed so we can say that usertow got the reference of original object
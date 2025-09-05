//array
const myArr = [0, 1, 2, 3, 4, "Isha"]
//arrays resizable
console.log(myArr[5])


//shallow copies will give the copy the original reference
//deep copies , properties do not share same reference 


//can be declared
const myArr2 = new Array(1, 2, 3, 4 )


//Methods

/*
myArr.push(6) //adds ele at the end
console.log(myArr)

myArr.pop()
console.log(myArr)
*/
/*
Arr.unshift(0)    //appends ele at the starting , but will shift all the ele by one place , hence more timecomplexity if larger arr
myArr.shift()
console.log(myArr)
*/

/*
console.log(myArr.includes(9))
console.log(myArr.includes(0))

console.log(myArr.indexOf(0))
*/

/*
const newArr = myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)
*/



console.log("A " ,myArr)
const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C ",myArr)

/*
splice includes from pos 1 to 3 including 1 and 3 both
slice includes from pos 1 to 3 excluding 3

imp point to note is

splice changes the original array 
slice doesn't change the original array
*/



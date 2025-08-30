const name = "Archita "
const repoCount = 50

//   console.log(name + repoCount + " Value")


/*
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
*/


//one more way to declare string
const gameName = new String('Chained-Together')
console.log(gameName)
console.log(gameName[3])// accesing one char 

console.log(gameName.length)
console.log(gameName.toUpperCase())

//Strings in JavaScript are immutable. Methods like .toUpperCase() don’t modify the original string but return a new string. That’s why gameName is unchanged

console.log(gameName.charAt(4))
console.log(gameName.indexOf('e'))

const newStr = gameName.substring(0,4)
console.log(newStr)
// including the 1st begining and excluding the end one of the substring, eg=> 0 is included and 4th pos is excluded

const anotherStr = gameName.slice(-11,15)
console.log(anotherStr)

const strTwo="       Archi      "
console.log(strTwo)
console.log(strTwo.trim())

const url = "https://archi.com/archita%20isha"

console.log(url.replace('%20','-'))
console.log(url.includes("isha"))  //finds if the substring mentioned is present in the string or not
console.log(gameName.split('-'))
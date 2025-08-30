//DATES

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)

//let myDateCreated = new Date(2023,0 , 30 )  
// in JS months start from 0=>which is January


// let myDateCreated = new Date(2023,0 , 30 ,5 ,9)


let myDateCreated = new Date("2023-01-04") //  yy/mm/dd  or we can also put dd/mm/yy
//console.log(myDateCreated.toLocaleString())


/*
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myDateCreated.getTime())
*/

//console.log(Date.now())  // to convert to seconds divide by 1000 
//console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
//`${newDate.getDate()} and the time`
newDate.toLocaleString( 'dafault', {
    weekday:"long"
})
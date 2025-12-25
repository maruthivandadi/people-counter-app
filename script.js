// document.getElementById("count-el").innerText = 10

// let is an keyword to create an variable
// let count = 123424
// console.log(count)//this prints value in console of browser

// let my_age = 18
// console.log(my_age)

//reference error : When you print before intializing it.

//lets try some examples

// let a = 5
// let b = 6
// let add = a+b
// let sub = a-b
// let mul = a*b
// let div = a/b

// console.log(add,sub,mul,div)

//assignment operators
// let count = 5

// count = count+1
// console.log(count)


// function increment()
// {
//     count = count+1
//     document.getElementById("count-el").innerText = count   

//     if (count %2 == 0)
//         {
// console.log("The count has reached 5")
//         }

// }





//race game

// function race_game(Number)
// {
//     if (Number == 0)
//     {
//         return;//This will end the functions continuity i mean it will come out of the block of function code.
//     }
//     console.log(Number)
//     race_game(Number-1)
    
// }

// race_game(5)



// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// Create a function that logs out the sum of all the lap times
// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

//console.log(totalTime) //totalTime cant be accesed outside the function block as it throughs the error

//logLapTime()


let count = 0
let saved = 0

let countEl = document.getElementById("count-el")
let svcount = document.getElementById("save-btn")
let saveEl = document.getElementById("save-el")
let totalSum = document.getElementById("total-passenger")

function increment()
{
    count += 1
    //console.log(count)
    //document.getElementById("count-el").innerText = count //This is one of the way
    countEl.innerText = count
}




function save(){
    
    saveEl.innerText += "-" + count
    //totalSum.innerText += count
    countEl.innerText = 0
    count = 0
    //console.log("saved content : ",saved)
    
    
    return
}



// string in javascript
// let username = "Maruthi Vandadi"
// let age = 18

// let num1 = 2
// let number = 7 // if i keep a string "two" here then output will be like two2
// console.log(num1+number)

// console.log("A"+" Warm wishes to " + username +" "+age)











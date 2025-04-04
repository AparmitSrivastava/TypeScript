let greet: string = "hello sir"
greet.toLowerCase()
console.log(greet);

// number - there is nothing as int and float and everything in ts is defined as number
let id:number= 23673

// boolean
let isPresent:boolean = true

// type inference -- 
// at times we use ts very much and give notation very much but there is no need of doing this so much ... TS is very smart 

// so better code -- 
let id2= 23673









// video 6
// ANY keyword   - not a good practice   - its not a type. its just a marker to avoid typehecking

let hero;
function gethero(){
    return "thor"
}
hero = gethero()
// when u hover on the hero word above then we will see any, that is bad becoz we can return any boolean value also here or any number 
// what to do?

// let hero:string  

// use - useimplicitany to avoid use of any 




export {}
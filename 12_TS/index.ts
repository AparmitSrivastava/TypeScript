let score:number | string = 33
score = 44
score="44"

type user ={
    name:string;
    id:number
}
type admin={
    username:string
    id:number
}

let raj : user | admin ={
    name:"raju",
    id:123
}

raj={username:"djs",id:478}

// function getid(id:number | string){
//     // making some api calls
//     console.log(`db id is ${id}`);
// }
getid(7)
getid("7")

function getid(id:number | string){
    // id.toLowerCase()
    // issue is that even after declaring it to be either string or num we are not able to apply string oprtion but if we remove the number type then it works fine, soln is below
    if(typeof id === "string"){
        id.toLowerCase()
    }
    if(typeof id === "number"){
        id+2
    }
}


// array

let arr : number[] = [1,2,3,4]
let arr2 : string[] = ["1","2","3","4"]
// let arr3 : number[] | string[] = [1,2,3,"4"]        // this gives error ,so array can either be all number or all strings, i.e. array can not conatin both the type
let arr4 : (string | number | boolean)[] = [1 , 2 , "hello" , 4 , true]



// strict define
let pi:3.14 = 3.14
// pi=3.145 // not allowed

// real life case
let seatallotment: "aisle" | "window" | "middle"
seatallotment = "middle" //user first slects this seat
seatallotment = "aisle"     //later changes his choice and now chooses this
// seatallotment="crew" //this is not allowed

export {}